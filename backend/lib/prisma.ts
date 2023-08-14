import { Env } from '@env/index'
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: Env.NODE_ENV === 'dev' ? ['query'] : []
})