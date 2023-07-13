import { Container } from './styles'

import { Text } from 'react-native'

export function PercentageCard() {
  return (
    <Container style={styles.boxShadow}>
      <Text>asdasd</Text>
    </Container>
  )
}

const styles = {
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
}
