import { beforeEach, describe, expect, test } from 'vitest'
import { Test, TestingModule } from '@nestjs/testing'
import { PrismaService } from 'src/app.service'
import { AuthService } from '../auth.service'

describe('Serviço de rota de autenticação', () => {
  let Service: AuthService

  beforeEach(async () => {
    const CoreModules: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, AuthService]
    }).compile()

    Service = CoreModules.get<AuthService>(AuthService)
  })

  test('Definição do serviço', () => {
    expect(Service).toBeDefined()
  })
})