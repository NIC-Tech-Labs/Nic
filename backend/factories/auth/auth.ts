import { PrismaService } from 'src/app.service'
import { AuthService } from 'src/auth/auth.service'

export function AuthFactory () {
  const Repository = new PrismaService()
  const Auth = new AuthService(Repository)

  return Auth
}