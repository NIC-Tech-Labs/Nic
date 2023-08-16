import { defaultLetterSpacing, font, fullWidth, light } from '@theme/index'
import * as Icon from 'phosphor-react-native'
import { FC, createElement, useState } from 'react'
import { StyleSheet, TextInputProps, View } from 'react-native'
import styled from 'styled-components/native'

interface Props extends Icon.IconProps {
  placeholder?: string
  placeholderColour?: string
  colour?: string
  textFont?: string
  borderRadius: number
  borderWidth: number
  labelText: string
  iconName: keyof typeof Icon
  iconSize?: number
  iconColour?: string
  iconWeight?: Icon.IconWeight
}

export default function Input({
  colour, placeholder,
  placeholderColour, textFont,
  borderRadius, borderWidth,
  labelText, iconName, iconSize,
  iconColour, iconWeight }: Props) {
  const [inputFocused, setInputFocus] = useState(false)
  
  const InputIcon = iconName ? Icon[iconName] : null

  return (
    <View style={style.container}>
      <InputLabel>{labelText}</InputLabel>
      <InputArea>
        <StyledInput
          placeholder={placeholder ? placeholder : 'Edite a propriedade "placeholder"'}
          placeholderTextColor={placeholderColour}
          cursorColor={colour}
          keyboardType='email-address'
          onBlur={() => {
            setInputFocus(false)
          }}
          onFocus={() => {
            setInputFocus(true)
          }}
          style={{
            borderColor: inputFocused ? colour : light.borderColour.default,
            fontFamily: textFont,
            borderRadius, borderWidth,
            borderStyle: 'solid'
          }} />
        {InputIcon && createElement(InputIcon, { style: style.inputIcon, size: iconSize, color: iconColour, weight: iconWeight } )}
      </InputArea>
    </View>
  )
}

export const InputArea = styled.View`
  justify-content: center;
  width: ${fullWidth};
`

export const StyledInput: FC<TextInputProps> = styled.TextInput`
  width: ${fullWidth};
  padding-left: 36px;
  align-items: center;
  height: 42px;
  font-size: 16px;
  letter-spacing: ${defaultLetterSpacing};
`

export const InputLabel = styled.Text`
  font-size: 16px;
  font-family: ${font.bold};
  color: ${light.text.default};
`

export const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: fullWidth,
    rowGap: 6
  },
  inputIcon: {
    position: 'absolute',
    left: 8
  }
})