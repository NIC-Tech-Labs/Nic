import { Test, TestingModule } from '@nestjs/testing'
import { PrismaService } from 'src/app.service'
import { beforeEach, describe, expect, test } from 'vitest'
import { AuthController } from '../auth.controller'
import { AuthService } from '../auth.service'

describe('Controlador de rota de autenticação', () => {
  let Controller: AuthController

  beforeEach(async () => {
    const CoreModules: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [PrismaService, AuthService]
    }).compile()

    Controller = CoreModules.get<AuthController>(AuthController)
  })

  test('Definição das rotas', () => {
    expect(Controller).toBeDefined()
  })
})