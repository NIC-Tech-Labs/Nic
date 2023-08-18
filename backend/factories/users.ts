import { PrismaService } from 'src/app.service'
import { UsersService } from 'src/users/users.service'

export function UserFactory () {
  const Repository = new PrismaService()
  const Factory = new UsersService(Repository)

  return Factory
}