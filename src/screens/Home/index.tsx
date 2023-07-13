import { Container } from './styles'
import { Header } from '../../components/Header'
import { PercentageCard } from '@components/PercentCard'

export default function Home() {
  return (
    <Container>
      <Header />
      <PercentageCard />
    </Container>
  )
}
