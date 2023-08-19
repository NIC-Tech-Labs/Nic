import { CachedUserRepository } from '@repositories/tmp/users'
import { AuthServiceCase } from '@services/auth/login.service'
import { hash } from 'bcryptjs'
import { beforeEach, describe, expect, test } from 'vitest'

describe('Autenticação (UNT)', () => {
  let Repository: CachedUserRepository
  let System: AuthServiceCase

  beforeEach(() => {
    Repository = new CachedUserRepository()
    System = new AuthServiceCase(Repository)
  })

  test('Login do usuário', async () => {
    await Repository.CreateUser({
      name: 'Usuario',
      email: 'usuario@teste.com',
      password: '123456',
      address: 'Avenida ABC',
      complement: 'Perto do DEF',
      house_number: 123335,
      house_phone: '(12) 3456-7890',
      mobile_phone: '(12) 3 4567-8901',
      occupation: 'UX Designer'
    })

    const { User } = await System.AuthUser({
      email: 'usuario@teste.com',
      password: await hash('123456', 6)
    })

    expect(User.id).toEqual(expect.any(String))
  })
})