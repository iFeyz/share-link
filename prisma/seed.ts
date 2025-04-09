import { PrismaClient } from '../src/generated/prisma';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // User details - you can modify these
  const adminUser = {
    email: 'admin@example.com',
    name: 'Administrator',
    password: 'Admin123!',
    role: 'superadmin' // Options: 'user', 'admin', 'superadmin'
  };

  console.log(`Starting to seed database...`);

  // Check if admin user already exists
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminUser.email }
  });

  if (existingAdmin) {
    console.log(`User with email ${adminUser.email} already exists.`);
  } else {
    // Create admin user
    const hashedPassword = await bcrypt.hash(adminUser.password, 10);
    
    const user = await prisma.user.create({
      data: {
        email: adminUser.email,
        name: adminUser.name,
        password: hashedPassword,
        role: adminUser.role,
        emailVerified: new Date()
      }
    });
    
    console.log(`Created user: ${user.email} (${user.role})`);
  }

  console.log(`Database seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 