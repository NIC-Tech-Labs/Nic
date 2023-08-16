import { defaultLetterSpacing, font, fullWidth, globalColours, light } from '@theme/index'
import { FC } from 'react'
import { StyleSheet, TouchableOpacityProps } from 'react-native'
import { TextProps } from 'react-native-svg'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  margin: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 56px;
  background-color: ${globalColours.white};
`

export const LoginForm = styled.View`
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: flex-start;
  width: ${fullWidth};
`

export const InputContainer = styled.View`
  justify-items: center;
  align-items: flex-start;
  width: ${fullWidth};
  row-gap: 6px;
`

export const ForgotPasswordArea = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  column-gap: 4px;
  width: ${fullWidth};
`

export const TouchableText: FC<TextProps> = styled.Text`
  font-family: ${font.bold};
  font-size: 16px;
  letter-spacing: ${defaultLetterSpacing};
`

export const SignUpContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: ${fullWidth};
`

export const SignUpTextContainer = styled.View`
  flex-direction: row;
  column-gap: 4px;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: ${fullWidth};
`

export const SocialLoginHeader = styled.View`
  width: ${fullWidth};
  height: fit-content;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  column-gap: 8px;
`

export const Line = styled.View`
  width: 27.5%;
  height: 1px;
  background-color: ${light.text.default};
`

export const SocialLoginContent = styled.View`
  flex-direction: row;
  column-gap: 16px;
`

export const BgCircle: FC<TouchableOpacityProps> = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  background-color: ${globalColours.white};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`

export const style = StyleSheet.create({
  inputIcon: {
    position: 'absolute',
    left: 8
  },
  shadowBg: {
    shadowOffset: { width: 0, height: 4 },
    shadowColor: '#000000',
    shadowRadius: 20,
    shadowOpacity: 0.15,
    elevation: 6
  }
})