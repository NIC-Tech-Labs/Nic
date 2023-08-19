import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'

export class CreateUserDTO {
  @ApiProperty() //* Este decorador documenta automaticamente cada propriedade para o Swagger
  @IsString()
  @IsNotEmpty({ message: 'O nome não pode estar vazio!' })
  name: string

  @ApiProperty()
  @IsEmail(undefined, { message: 'Endereço de e-mail inválido!' })
  @IsNotEmpty({ message: 'Informe um endereço de e-mail!' })
  email: string

  @ApiProperty()
  @MinLength(6, { message: 'A senha deverá ter no mínimo 6 caracteres!' })
  @IsNotEmpty({ message: 'Informe uma senha!' })
  password: string

  @ApiProperty()
  @IsNotEmpty({ message: 'Informe seu endereço residencial' })
  address: string

  @ApiProperty()
  @IsOptional()
  complement: string

  @ApiProperty()
  @IsInt()
  house_number: number

  @ApiProperty()
  @IsString({ message: 'Telefone fixo inválido!' })
  @IsNotEmpty({ message: 'Informe seu número de telefone residencial!' })
  @MinLength(13, { message: 'Insira um número de telefone residencial com DDD' })
  house_phone: string

  @ApiProperty()
  @IsString({ message: 'Telefone celular inválido!' })
  @IsNotEmpty({ message: 'Informe seu número de celular!' })
  @MinLength(14, { message: 'Preencha corretamente o número de celular' })
  mobile_phone: string

  @ApiProperty()
  @IsNotEmpty({ message: 'Informe sua profissão atual!' })
  occupation: string
}
