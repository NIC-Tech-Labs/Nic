import { FacebookIcon } from '@assets/icons/facebook'
import { GoogleIcon } from '@assets/icons/google'
import { Logo } from '@assets/logo'
import Button from '@components/Button'
import { DefaultText } from '@components/DefaultText'
import Input from '@components/Input'
import { TouchableText } from '@components/TouchableText'
import { font, globalColours, light } from '@theme/index'
import * as React from 'react'
import { BgCircle, Container, ForgotPasswordArea, InputContainer, Line, LoginForm, SignUpContainer, SignUpTextContainer, SocialLoginContent, SocialLoginHeader, style } from './styles'

export function Login() {
  return (
    <Container>
      <Logo />
      <LoginForm>
        <InputContainer>
          <Input
            colour={globalColours.green}
            labelText='Email'
            placeholder='Insira seu e-mail'
            iconName='Envelope'
            iconColour={light.text.gray}
            iconSize={24}
            borderWidth={1.5}
            borderRadius={10}
            textFont={font.regular} />
        </InputContainer>
        <InputContainer>
          <Input
            labelText='Senha'
            colour={globalColours.green}
            placeholder='Digite sua senha'
            borderWidth={1.5}
            borderRadius={10}
            iconName='Key'
            iconColour={light.text.gray}
            textFont={font.regular}
          />
        </InputContainer>
        <Button opacity={0.75} title='Iniciar sessão' />
        <ForgotPasswordArea>
          <DefaultText
            text={'Esqueceu sua senha?'}
            textFont={font.bold}
          />
          <TouchableText
            text='Toque aqui'
            textFont={font.bold}
            colour={globalColours.green}
          />
        </ForgotPasswordArea>
      </LoginForm>
      <SignUpContainer>
        <SignUpTextContainer>
          <DefaultText
            text='Ainda não possui conta?'
            textFont={font.bold}
          />
          <TouchableText
            text='Crie uma agora'
            textFont={font.bold}
            underline
            colour={globalColours.green}
          />
        </SignUpTextContainer>
        <SocialLoginHeader>
          <Line />
          <DefaultText text='Ou use redes sociais' />
          <Line />
        </SocialLoginHeader>
        <SocialLoginContent>
          <BgCircle activeOpacity={0.75} style={style.shadowBg}>
            <GoogleIcon />
          </BgCircle>
          <BgCircle activeOpacity={0.75} style={style.shadowBg}>
            <FacebookIcon />
          </BgCircle>
        </SocialLoginContent>
      </SignUpContainer>
    </Container>
  )
}