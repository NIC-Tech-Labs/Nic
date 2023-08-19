import { InvalidCredentialsError } from '@errors/InvalidCredentials'
import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { compare } from 'bcryptjs'
import { PrismaService } from 'src/app.service'

interface AuthRequest {
  email: string
  password: string
}

interface AuthResponse {
  User: User
}

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async Login({ email, password }: AuthRequest): Promise<AuthResponse> {
    const User = await this.prisma.user.findUnique({ where: { email } })

    if (!User) {
      throw new InvalidCredentialsError()
    }

    const passwordMatch = await compare(password, User.password)

    if (!passwordMatch) {
      throw new InvalidCredentialsError()
    }

    return { User }
  }
}