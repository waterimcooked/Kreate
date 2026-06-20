console.log('🔥 PRISMA.TS IS RUNNING RIGHT NOW')

import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter: new PrismaPg({
      connectionString: process.env.DATABASE_URL,
    }),
  })

console.log('✅ Prisma object created:', prisma ? 'EXISTS' : 'UNDEFINED')
console.log('✅ Prisma.user exists:', prisma?.user ? 'YES' : 'NO')

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma