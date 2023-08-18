import { Prisma, User } from '@prisma/client'

export interface UsersRepository {
  CreateUser(data: Prisma.UserCreateInput): Promise<User>
  FindByEmail(email: string): Promise<User | null>
  DeleteUser(id: string): Promise<User>
}