import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { PrismaModule } from 'src/app.module'
import supertest from 'supertest'
import { afterAll, beforeAll, describe, expect, test } from 'vitest'

describe('Autenticação (E2E)', () => {
  let App: INestApplication
  let userID: string

  beforeAll(async () => {
    const CoreModule = await Test.createTestingModule({
      imports: [PrismaModule]
    }).compile()

    App = CoreModule.createNestApplication()
    await App.init()

    const user = await supertest(App.getHttpServer())
      .post('/users/register')
      .send({
        name: 'Joao Eduardo',
        email: 'joao@nic.com.br',
        password: '123456',
        address: 'Avenida ABC',
        house_number: 1230,
        complement: 'Próximo ao lugar DEF',
        house_phone: '(12) 3456-7890',
        mobile_phone: '(12) 3 4567-8901',
        occupation: 'Fullstack Developer'
      })

    userID = user.body.id
  })

  afterAll(async () => {
    await supertest(App.getHttpServer())
      .delete(`/users/delete/${userID}`)
      .expect(202)

    await App.close()
  })

  test('Autenticando sessão do usuário', async () => {
    const response = await supertest(App.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'joao@nic.com.br',
        password: '123456'
      })

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({
      Token: expect.any(String)
    })
  })
})