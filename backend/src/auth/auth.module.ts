import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { PrismaService } from '../app.service'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
  imports: [PassportModule],
  controllers: [AuthController],
  providers: [PrismaService, AuthService]
})

export class AuthModule {}