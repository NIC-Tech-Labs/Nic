import { InvalidCredentialsError } from '@errors/InvalidCredentials'
import { User } from '@prisma/client'
import { PrismaUsersRepository } from '@repositories/prisma/users'
import { compare } from 'bcryptjs'

interface Request {
  email: string
  password: string
}

interface Response {
  User: User
}

export class AuthServiceCase {
  constructor(private repository: PrismaUsersRepository) {}

  async AuthUser({ email, password }: Request): Promise<Response> {
    const User = await this.repository.FindByEmail(email)

    if (!User) {
      throw new InvalidCredentialsError()
    }

    const PasswordMatch = await compare(User.password, password)

    if (!PasswordMatch) {
      throw new InvalidCredentialsError()
    }

    return { User }
  }
}