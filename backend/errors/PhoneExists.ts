export class PhoneNumberExistsError extends Error {
  constructor () {
    super('Este telefone já está cadastrado em nossa plataforma!')
  }
}