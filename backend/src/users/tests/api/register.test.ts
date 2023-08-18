import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { PrismaModule } from 'src/app.module'
import { UsersService } from 'src/users/users.service'
import supertest from 'supertest'
import { afterAll, beforeAll, describe, expect, test } from 'vitest'

describe('Cadastro de usuários (E2E)', () => {
  let App: INestApplication
  let userID: string

  beforeAll(async () => {
    const AppModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [UsersService]
    }).compile()

    App = AppModule.createNestApplication()
    await App.init()
  })

  afterAll(async () => {
    await supertest(App.getHttpServer())
      .delete(`/users/delete/${userID}`)
      .expect(202)

    await App.close()
  })

  test('Novo usuário (E2E)', async () => {
    const response = await supertest(App.getHttpServer())
    .post('/users/register')
    .send({
      name: 'Luana Torquato',
      email: 'luanatorquato@nic.com.br',
      password: '123456',
      address: 'Avenida ABC',
      house_number: 1234,
      complement: 'Próximo ao lugar DEF',
      house_phone: '(32) 3454-7890',
      mobile_phone: '(12) 3 4387-8901',
      occupation: 'UX Designer'
    })

    expect(response.statusCode).toBe(201)
    userID = response.body.id
  })
})