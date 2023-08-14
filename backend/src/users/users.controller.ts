import { Body, Controller, Post, Res } from '@nestjs/common'
import { EmailExistsError } from 'errors/EmailExists'
import { Response } from 'express'
import { CreateUserFactory } from 'factories/users/create'
import { CreateUserDTO } from './validations/create-user.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { UserEntity } from './entities/user.entity'

@ApiTags('register')
@Controller('register')
export class UsersController {

  @Post()
  @ApiOkResponse({ type: UserEntity })
  async CreateUser(@Body() data: CreateUserDTO, @Res() Response: Response) {
    const {
      name,
      email,
      password,
      address,
      complement,
      house_number,
      house_phone,
      mobile_phone,
      occupation,
    } = data

    try {
      const Factory = CreateUserFactory()

      const { User } = await Factory.CreateUser({
        name,
        email,
        password,
        address,
        complement,
        house_number,
        house_phone,
        mobile_phone,
        occupation
      })

      //* Escondendo dados sensíveis na resposta da requisição
      delete User.password
      delete User.address
      delete User.complement
      delete User.house_number
      delete User.house_phone
      delete User.mobile_phone
      delete User.occupation

      return Response.status(201).json(User)
    } catch (error) {
      if (error instanceof EmailExistsError) {
        Response.status(409).json({
          statusCode: Response.statusCode,
          message: 'Este e-mail já existe!'
        })
      }

      throw error
    }
  }
}