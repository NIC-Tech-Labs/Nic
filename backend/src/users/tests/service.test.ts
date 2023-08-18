import { beforeEach, describe, expect, test } from 'vitest'
import { UsersService } from '../users.service'
import { Test, TestingModule } from '@nestjs/testing'
import { PrismaService } from 'src/app.service'

describe('Serviço de rota do usuário', () => {
  let Service: UsersService

  beforeEach(async () => {
    const CoreModules: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, UsersService]
    }).compile()

    Service = CoreModules.get<UsersService>(UsersService)
  })

  test('Definição do serviço', () => {
    expect(Service).toBeDefined()
  })
})