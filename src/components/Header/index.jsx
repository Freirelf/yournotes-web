import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from 'react-icons/ri'

import { useAuth } from "../../hooks/auth";

export function Header(){
  const { signOut } = useAuth();

  return(
    <Container>
      <Profile to='/profile'>
        <img 
          src="https://github.com/Freirelf.png" 
          alt="Imagem do usuário" 
        />

        <div>
          <span>Bem-vindo!</span>
          <strong>Lucas Freire</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine onClick={signOut}/>
      </Logout>

    </Container>
  )
}