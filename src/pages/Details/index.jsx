import  { Container, Links, Content } from './style';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText';

export function Details() {

  return (
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title='Excluir nota' />

          <h1>Introdução ao react</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque voluptate repellendus rerum, voluptatem veniam, voluptas nobis, nisi obcaecati ipsam nesciunt velit vitae id quas assumenda excepturi quidem quasi reprehenderit.</p>

          <Section title='Links úteis'>
            <Links>
              <li>
                <a href='#'>https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href='#'>https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title='Marcadores'>
            <Tag title='node.js'/>

            <Tag title='express'/>
          </Section>

          <Button title = "Voltar" />
        </Content>
      </main>
    </Container>
  )
}


