import { View } from 'react-native'
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
