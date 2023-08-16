import { font, fullWidth, globalColours, light } from '@theme/index'
import { FC } from 'react'
import { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

interface Props {
  opacity?: number | 0.5
  title: string
}

export const StyledButton: FC<TouchableOpacityProps> = styled.TouchableOpacity`
  height: 56px;
  width: ${fullWidth};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${globalColours.green};
`

export const Label = styled.Text`
  color: ${light.text.white};
  font-family: ${font.bold};
  font-size: 16px;
  text-transform: uppercase;
`

export default function Button({ opacity, title }: Props) {
  return (
    <StyledButton activeOpacity={opacity}>
      <Label>{title}</Label>
    </StyledButton>
  )
}