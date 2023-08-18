import { InvalidCredentialsError } from '@errors/InvalidCredentials'
import { PhoneNumberExistsError } from '@errors/PhoneExists'
import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { hash } from 'bcryptjs'
import { randomUUID } from 'crypto'
import { EmailExistsError } from 'errors/EmailExists'
import { PrismaService } from 'src/app.service'

interface Request {
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

interface Response {
  User: User
}

@Injectable()
export class UsersService {
  constructor (private prisma: PrismaService) {}

  async CreateUser({
    name, email, password, address, complement,
    house_number, house_phone, mobile_phone, occupation
    }: Request): Promise<Response> {
    const password_hash = await hash(password, 6)

    const EmailExists = await this.prisma.user.findUnique({
      where: { email }
    })

    const MobilePhoneExists = await this.prisma.user.findFirst({
      where: { mobile_phone }
    })

    const HousePhoneExists = await this.prisma.user.findFirst({
      where: { house_phone }
    })

    if (MobilePhoneExists || HousePhoneExists) {
      throw new PhoneNumberExistsError()
    }

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

  async DeleteUser(id: string): Promise<Response> {
    const findUser = await this.prisma.user.findUnique({
      where: { id }
    })

    if (!findUser) {
      throw new InvalidCredentialsError()
    }

    const User = await this.prisma.user.delete({
      where: { id }
    })

    return { User }
  }
}
