import { beforeEach, describe, expect, test } from 'vitest'
import { Test, TestingModule } from '@nestjs/testing'
import { PrismaService } from 'src/app.service'
import { UsersController } from '../users.controller'
import { UsersService } from '../users.service'

describe('Controlador de rota do usuário', () => {
  let Controller: UsersController

  beforeEach(async () => {
    const CoreModules: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [PrismaService, UsersService]
    }).compile()

    Controller = CoreModules.get<UsersController>(UsersController)
  })

  test('Definição das rotas', () => {
    expect(Controller).toBeDefined()
  })
})