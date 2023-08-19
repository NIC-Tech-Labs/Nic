import { CachedUserRepository } from '@repositories/tmp/users'
import { UsersServiceCase } from '@services/users/register.service'
import { describe, beforeEach, test, expect } from 'vitest'

describe('Cadastro de usuários (UNT)', () => {
  let Repository: CachedUserRepository
  let System: UsersServiceCase

  beforeEach(() => {
    Repository = new CachedUserRepository()
    System = new UsersServiceCase(Repository)
  })

  test('Novo usuário', async () => {
    const { User } = await System.Register({
      name: 'Luana Torquato',
      email: 'luana2@nic.com.br',
      password: '654321',
      address: 'Avenida ABC',
      house_number: 12367,
      complement: 'Próximo ao lugar DEF',
      house_phone: '(12) 3456-7890',
      mobile_phone: '(12) 3 4567-8901',
      occupation: 'UX Designer'
    })

    expect(User.id).toEqual(expect.any(String))
  })
})