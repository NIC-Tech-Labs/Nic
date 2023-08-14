import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'

export class LoginDTO {
  @IsEmail()
  @IsNotEmpty({ message: 'Insira seu endereço de e-mail para iniciar uma sessão!'})
  @ApiProperty()
  email: string

  @IsString()
  @IsNotEmpty({ message: 'Insira sua senha para iniciar uma sessão!' })
  @MinLength(6)
  @ApiProperty()
  password: string
}