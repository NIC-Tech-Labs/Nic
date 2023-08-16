import { defaultLetterSpacing, font } from '@theme/index'
import { FC } from 'react'
import { TextProps } from 'react-native'
import styled from 'styled-components/native'

interface Props {
  colour?: string | '#444'
  text: string
  underline?: boolean
  textFont?: string
}

export const StyledText: FC<TextProps> = styled.Text`
  font-size: 16px;
  letter-spacing: ${defaultLetterSpacing};
`

export function DefaultText ({ colour, text, underline, textFont }: Props) {
  return (
    <StyledText style={{
      color: colour,
      textDecorationLine: underline ? 'underline' : 'none',
      fontFamily: textFont ? textFont : font.regular
    }}>{text}</StyledText>
  )
}