import { View, Image } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(View)`
  padding: 24px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const Logo = styled(Image)`
  width: 82px;
  height: 37px;
`

export const Avatar = styled(Image)`
  width: 40px;
  height: 40px;
`
