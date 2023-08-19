import { EmailExistsError } from '@errors/EmailExists'
import { User } from '@prisma/client'
import { UsersRepository } from '@repositories/users'
import { hash } from 'bcryptjs'
import { randomUUID } from 'crypto'

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

export class UsersServiceCase{
  constructor(private repository: UsersRepository) {}

  async Register({
    name,
    email,
    password,
    address,
    complement,
    house_number,
    house_phone,
    mobile_phone,
    occupation
  }: Request): Promise<Response> {
    const password_hash = await hash(password, 6)

    const EmailsExists = await this.repository.FindByEmail(email)

    if (EmailsExists) {
      throw new EmailExistsError()
    } else {
      const User = await this.repository.CreateUser({
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
      })

      return { User }
    }
  }
}