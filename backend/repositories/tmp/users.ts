import { Prisma, User } from '@prisma/client'
import { randomUUID } from 'crypto'
import { EmailExistsError } from 'errors/EmailExists'
import { UsersRepository } from 'repositories/users'

export class CachedUserRepository implements UsersRepository {
  public item: User[] = []

  async CreateUser({ name, email, password,
    address, complement, house_number, house_phone,
    mobile_phone, occupation }: Prisma.UserCreateInput) {

    const EmailExists = this.item.find(user => user.email === email)

    if (EmailExists) {
      throw new EmailExistsError()
    }

    const User = {
      id: randomUUID(),
      name,
      email,
      password,
      address,
      complement,
      house_number,
      house_phone,
      mobile_phone,
      occupation,
      creation_date: new Date()
    }

    this.item.push(User)
    return User
  }

  async FindByEmail(email: string): Promise<User | null> {
    const User = this.item.find(user => user.email === email)

    if (!User) {
      return null
    }
  }
}