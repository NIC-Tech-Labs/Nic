export class EmailExistsError extends Error {
  constructor () {
    super('Endereço de e-mail já está em uso!')
  }
}