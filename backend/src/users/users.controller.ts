import { UserNotFoundError } from '@errors/UserNotFound'
import { Body, Controller, Delete, Param, Post, Res } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { EmailExistsError } from 'errors/EmailExists'
import { Response } from 'express'
import { UserFactory } from 'factories/users'
import { UserEntity } from './entities/user.entity'
import { UsersService } from './users.service'
import { CreateUserDTO } from './validations/create-user.dto'

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor (private readonly Service: UsersService) {}

  @Post('register')
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
      const Factory = UserFactory()

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
          Código: Response.statusCode,
          Mensagem: 'Este e-mail já existe!'
        })
      }

      throw error
    }
  }

  @Delete('delete/:id')
  async DeleteUser(@Param('id') userID: string, @Res() Response: Response) {
    try {
      const Factory = UserFactory()

      const { User } = await Factory.DeleteUser(userID)

      return Response.status(202).json({
        User,
        Código: Response.statusCode,
        Mensagem: 'Usuário excluído do banco de dados!'
      })
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        Response.status(404).json({
          Mensagem: 'Usuário não encontrado!'
        })
      }

      throw error
    }
  }
}