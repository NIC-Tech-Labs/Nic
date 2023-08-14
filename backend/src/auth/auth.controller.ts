import { InvalidCredentialsError } from '@errors/InvalidCredentials'
import { Body, Controller, Post, Res } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { AuthService } from './auth.service'
import { AuthLoginEntity } from './entities/auth.entity'
import { LoginDTO } from './validations/login.dto'
import { AuthFactory } from 'factories/auth/auth'
import { JwtService } from '@nestjs/jwt'
import { Env } from '@env/index'

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  @ApiOkResponse({ type: AuthLoginEntity })
  async LoginUser(@Body() { email, password }: LoginDTO, @Res() Response: Response) {
    try {
      const Auth = AuthFactory()
      const JWT = new JwtService()

      const { User } = await Auth.Login({ email, password })

      const Token = await JWT.signAsync(
        { id: User.id },
        {
          secret: Env.JWT_SECRET,
          expiresIn: '12h'
        })

      return Response.cookie('LoginToken', Token, {
        path: '/',
        secure: true,
        sameSite: true,
        httpOnly: false
      })
        .status(200)
        .send({ Token })

    } catch (error) {
      if (error instanceof InvalidCredentialsError) {
        Response.status(401).json({
          Código: Response.statusCode,
          Mensagem: error.message,
          Causa: error.cause
        })
      }

      throw error
    }

  }
}