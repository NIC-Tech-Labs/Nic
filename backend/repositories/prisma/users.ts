import { Prisma, User } from '@prisma/client'
import { prisma } from 'lib/prisma'
import { UsersRepository } from 'repositories/users'

export class PrismaUsersRepository implements UsersRepository {
  async CreateUser(data: Prisma.UserCreateInput): Promise<User> {
    return prisma.user.create({ data })
  }

  async FindByEmail(email: string): Promise<User> {
    return prisma.user.findUnique({
      where: { email }
    })
  }
}