# QR Code Generator

A Next.js application for generating and managing QR codes with analytics tracking. Built with Next.js, Prisma, PostgreSQL, and Stripe integration.

## 🇬🇧 English

### Features

- QR code generation with customizable parameters
- Support for mobile app deep links (iOS and Android)
- Analytics tracking for QR code scans
- Responsive dashboard interface

### Prerequisites

- Node.js (v18 or newer)
- PostgreSQL database
- Stripe account (for payment processing)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/qr-code-generator.git
   cd qr-code-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create your environment variables file:
   ```bash
   cp .env.exemple .env.local
   ```

4. Update the `.env.local` file with your configuration:
   ```
   NEXT_PUBLIC_APP_URL="http://localhost:3000" # Or your deployment URL
   DATABASE_URL="postgresql://username:password@localhost:5432/qrcode_db"
   # Add other required environment variables
   ```

5. Setup the database:
   ```bash
   npx prisma db push
   npx prisma generate
   ```

6. Seed the database (optional):
   ```bash
   npm run seed
   ```

7. Start the development server:
   ```bash
   npm run dev
   ```

8. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Deployment

This application can be deployed on Vercel, Netlify, or any other Next.js compatible hosting service.

```bash
npm run build
```

---

## 🇫🇷 Français

### Fonctionnalités

- Génération de codes QR avec paramètres personnalisables
- Prise en charge des liens profonds pour applications mobiles (iOS et Android)
- Interface de tableau de bord responsive

### Prérequis

- Node.js (v18 ou plus récent)
- Base de données PostgreSQL
- Compte Stripe (pour le traitement des paiements)

### Installation

1. Clonez le dépôt:
   ```bash
   git clone https://github.com/VotreNomUtilisateur/qr-code-generator.git
   cd qr-code-generator
   ```

2. Installez les dépendances:
   ```bash
   npm install
   ```

3. Créez votre fichier de variables d'environnement:
   ```bash
   cp .env.exemple .env.local
   ```

4. Mettez à jour le fichier `.env.local` avec votre configuration:
   ```
   NEXT_PUBLIC_APP_URL="http://localhost:3000" # Ou votre URL de déploiement
   DATABASE_URL="postgresql://utilisateur:motdepasse@localhost:5432/qrcode_db"
   # Ajoutez d'autres variables d'environnement requises
   ```

5. Configurez la base de données:
   ```bash
   npx prisma db push
   npx prisma generate
   ```

6. Alimentez la base de données (optionnel):
   ```bash
   npm run seed
   ```

7. Démarrez le serveur de développement:
   ```bash
   npm run dev
   ```

8. Ouvrez [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir l'application.

### Déploiement

Cette application peut être déployée sur Vercel, Netlify, ou tout autre service d'hébergement compatible avec Next.js.

```bash
npm run build
```
