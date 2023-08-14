import { PrismaService } from 'src/app.service'
import { UsersService } from 'src/users/users.service'

export function CreateUserFactory () {
  const Repository = new PrismaService()
  const CreateUser = new UsersService(Repository)

  return CreateUser
}