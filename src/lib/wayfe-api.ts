import axios from 'axios';

// Define interfaces
interface WayfeUser {
  id: number;
  firstname?: string;
  lastname?: string;
  account?: {
    username: string;
  };
  phoneNumber?: string;
  isUserSecured: boolean;
  identityValidated: {
    value: string;
  };
  userSubscription?: {
    id: number;
    expirationDate: number;
    status: string;
  } | null;
}

interface WayfeApiResponse {
  items?: WayfeUser[];
  totalRows?: number;
}

export class WayfeApiService {
  private baseUrl: string;
  private token: string | null = null;
  private axiosInstance = axios.create({
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

  constructor() {
    this.baseUrl = process.env.WAYFE_API_URL || 'https://api.wayfe.net';
    this.axiosInstance.defaults.baseURL = this.baseUrl;
  }

  // Helper method to ensure authentication
  private async ensureAuthenticated(): Promise<void> {
    if (!this.token) {
      await this.authenticate();
    }
  }
  
  // Authenticate with the Wayfe API
  private async authenticate(): Promise<void> {
    try {
      const loginData = {
        username: process.env.WAYFE_LOGIN_EMAIL,
        password: process.env.WAYFE_LOGIN_PASSWORD
      };
      
      const response = await this.axiosInstance.post('/api/login', loginData);
      
      if (response.data && response.data.access_token) {
        this.token = response.data.access_token;
        this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
      } else {
        throw new Error('Authentication failed: No token received');
      }
    } catch (error) {
      console.error('Authentication failed:', error);
      throw new Error('Authentication failed');
    }
  }
  
  // Check if a user exists and is eligible for subscription
  async checkUserEligibility(email: string): Promise<{ eligible: boolean; user: WayfeUser | null }> {
    try {
      await this.ensureAuthenticated();
      
      const formData = new FormData();
      formData.append('perPage', '50');
      formData.append('currentPage', '1');
      formData.append('sortBy', 'id');
      formData.append('sortDesc', 'true');
      formData.append('search', email);
      formData.append('filters', JSON.stringify([
        {"position": 1, "selectedValue": ""},
        {"position": 2, "selectedValue": ""}
      ]));
      
      const headers = {
        'Content-Type': 'multipart/form-data',
      };
      
      const response = await this.axiosInstance.post(
        '/mobileUser/getB122TableResults', 
        formData,
        { headers }
      );
      
      const data: WayfeApiResponse = response.data;
      
      if (!data.items || data.items.length === 0) {
        return { eligible: false, user: null };
      }
      
      const user = data.items[0];

      
      // User is eligible if they're not already secured
      const eligible = user.identityValidated.value !== "NONE";
      
      return { eligible, user };
    } catch (error) {
      console.error('Error checking user eligibility:', error);
      return { eligible: false, user: null };
    }
  }
  
  // Add subscription to a user
  async addSubscription(userId: number): Promise<boolean> {
    try {
      console.log(`🔄 Début de l'ajout d'abonnement pour l'utilisateur ${userId}`);
      await this.ensureAuthenticated();
      console.log(`🔑 Authentification réussie pour ajouter l'abonnement`);
      
      // Calculate expiration date (1 year from now)
      const now = new Date();
      const oneYearFromNow = new Date(now);
      oneYearFromNow.setFullYear(now.getFullYear() + 1);
      const expirationDate = oneYearFromNow.getTime();
      
      console.log(`📅 Date d'expiration de l'abonnement: ${new Date(expirationDate).toISOString()}`);
      
      const formData = new FormData();
      formData.append('id', process.env.WAYFE_SUBSCRIPTION_ID || '26915');
      formData.append('expirationDate', expirationDate.toString());
      
      const headers = {
        'Content-Type': 'multipart/form-data',
      };
      
      console.log(`📤 Envoi de la requête d'ajout d'abonnement pour l'utilisateur ${userId}`);
      console.log(`🔗 URL: ${this.baseUrl}/mobileUser/add-subscription/${userId}`);
      
      const response = await this.axiosInstance.post(
        `/mobileUser/add-subscription/${userId}`,
        formData,
        { headers }
      );
      
      console.log(`✅ Abonnement ajouté avec succès pour l'utilisateur ${userId}`);
      console.log(`📄 Réponse:`, response.data);
      
      return true;
    } catch (error) {
      console.error(`❌ Erreur lors de l'ajout d'abonnement pour l'utilisateur ${userId}:`, error);
      return false;
    }
  }
}

export const wayfeApiService = new WayfeApiService(); 