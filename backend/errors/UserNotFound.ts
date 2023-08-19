export class UserNotFoundError extends Error {
  constructor () {
    super('Este usuário não foi encontrado!')
  }
}