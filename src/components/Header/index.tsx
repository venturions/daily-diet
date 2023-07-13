import { Avatar, Container, Logo } from './styles'

import LogoImage from '@assets/logo.png'
import AvatarImage from '@assets/avatar.png'

export function Header() {
  return (
    <Container>
      <Logo source={LogoImage} />
      <Avatar source={AvatarImage} />
    </Container>
  )
}
