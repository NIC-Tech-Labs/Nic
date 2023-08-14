import { ApiProperty } from '@nestjs/swagger'
import { User } from '@prisma/client'

export class AuthLoginEntity {
  @ApiProperty()
  accessToken: string
  User: User
}