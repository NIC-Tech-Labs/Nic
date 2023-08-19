import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { Env } from 'env'
import { PrismaModule } from './app.module'

(async () => {
  const app = await NestFactory.create(PrismaModule)

  //* Configuração do Swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Núcleo de Incentivo à Cidadania - API')
    .setDescription('Documentação de API endpoints da aplicação desktop e mobile da ONG Núcleo de Incentivo à Cidadania')
    .setVersion('1.0.0')
    .build()

  //* Rota com a documentação dos API endpoints
  const apiDocs = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('api', app, apiDocs)

  //* Pipeline global do Nest.js permite validação prévia dos dados
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    })
  )

  await app.listen(Env.SERVER_PORT,
    () => console.log(`🚀 Servidor disponível na \u001b[37m\u001b[42;1m porta ${Env.SERVER_PORT} \u001b[m`)
  )
})()