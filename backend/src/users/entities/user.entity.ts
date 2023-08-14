import { ApiProperty } from '@nestjs/swagger'

export class UserEntity {
  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiProperty()
  email: string

  @ApiProperty()
  creation_date: Date
}