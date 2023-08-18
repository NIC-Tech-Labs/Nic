import 'dotenv/config'
import {z as Zod} from 'zod'

const EnvSchema = Zod.object({
  NODE_ENV: Zod.enum(['dev', 'test', 'prod']).default('dev'),
  SERVER_PORT: Zod.coerce.number().default(3333),
  JWT_SECRET: Zod.string()
})

const _Env = EnvSchema.safeParse(process.env)

if (_Env.success === false) {
  console.error('🚨 Variáveis de ambiente inválidas!', _Env.error.format())

  throw new Error('🚨 Variáveis de ambiente inválidas!')
}

export const Env = _Env.data