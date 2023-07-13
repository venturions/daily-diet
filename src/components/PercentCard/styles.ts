import { Feather } from '@expo/vector-icons'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(View)`
  display: flex;
  width: 327px;
  padding: 20px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`

export const BackButton = styled(TouchableOpacity)`
  position: absolute;
  right: 8px;
  top: 8px;
`

export const BackIcon = styled(Feather).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))``

export const Percentage = styled(Text)`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
export const CardDescription = styled(Text)`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`
