import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { hash } from 'bcryptjs'
import { randomUUID } from 'crypto'
import { EmailExistsError } from 'errors/EmailExists'
import { PrismaService } from 'src/app.service'

interface CreationRequest {
  name: string
  email: string
  password: string
  address: string
  complement: string
  house_number: number
  house_phone: string
  mobile_phone: string
  occupation: string
}

interface CreationResponse {
  User: User
}

@Injectable()
export class UsersService {
  constructor (private prisma: PrismaService) {}

  async CreateUser({
    name, email, password, address, complement,
    house_number, house_phone, mobile_phone, occupation
    }: CreationRequest): Promise<CreationResponse> {
    const password_hash = await hash(password, 6)

    const EmailExists = await this.prisma.user.findUnique({
      where: { email }
    })

    if (EmailExists) {
      throw new EmailExistsError()
    }

    const User = await this.prisma.user.create({
      data: {
        id: randomUUID(),
        name,
        email,
        password: password_hash,
        address,
        complement,
        house_number,
        house_phone,
        mobile_phone,
        occupation,
        creation_date: new Date()
      }
    })

    return { User }
  }
}
