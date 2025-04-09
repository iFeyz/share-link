// Simple script to create a user
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // User details - you can modify these
  const email = 'admin@example.com';
  const name = 'Administrator';
  const password = 'Admin123!';
  const role = 'superadmin'; // Options: 'user', 'admin', 'superadmin'

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log(`User with email ${email} already exists.`);
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role,
        emailVerified: new Date(),
      },
    });

    console.log(`User created successfully: ${user.email} (${user.role})`);
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 