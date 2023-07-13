import React from 'react'
import {
  Container,
  Percentage,
  CardDescription,
  BackIcon,
  BackButton,
} from './styles'

export function PercentageCard() {
  return (
    <Container style={styles.boxShadow}>
      <BackButton>
        <BackIcon name="arrow-up-right" size={24} />
      </BackButton>
      <Percentage>90,86%</Percentage>
      <CardDescription>das refeições dentro da dieta</CardDescription>
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
