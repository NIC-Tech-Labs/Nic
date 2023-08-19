import { Module } from '@nestjs/common'
import { PrismaService } from './app.service'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
  imports: [UsersModule, AuthModule]
})

export class PrismaModule {}