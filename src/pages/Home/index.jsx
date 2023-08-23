import { Container, Brand, Menu, Search, Content, NewNote} from './style'
import { FiPlus, FiSearch } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

export function Home(){
  return(
    <Container>
      <Brand>
        <h1>Yournotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title='Todos' isActive/></li>
        <li><ButtonText title='React'/></li>
        <li><ButtonText title='Nodejs'/></li>
      </Menu>

      <Search>
        <Input placeholder='Pesquisar pelo título.' icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note data={{
            title: 'React', 
            tags: [
              {id: '1', name: 'react'},
              {id: '2', name: 'express'}
            ]
            }}
            />
        </Section>
      </Content>

      <NewNote to='/new'>
        <FiPlus />
        Cria nota
      </NewNote>
    </Container>
  )
}