import { defaultLetterSpacing, font } from '@theme/index'
import { FC } from 'react'
import { TextProps, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

interface Props {
  colour?: string | '#444'
  text: string
  textFont?: string
  opacity?: number
  underline?: boolean
}

export const StyledText: FC<TextProps> = styled.Text`
  font-family: ${font.bold};
  font-size: 16px;
  letter-spacing: ${defaultLetterSpacing};
`

export function TouchableText({ colour, text, opacity, underline, textFont }: Props) {
  return (
    <TouchableOpacity activeOpacity={opacity ? opacity : 0.5}>
      <StyledText
        style={{
          color: colour,
          textDecorationLine: underline ? 'underline' : 'none',
          fontFamily: textFont ? textFont : font.regular
        }}>{text}</StyledText>
    </TouchableOpacity>
  )
}