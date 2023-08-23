import { FiPlus, FiX  } from 'react-icons/fi'

import { Container } from './style'

export function NoteItem({isNew, value, onClick, ...rest}){
  return(
    <Container isNew={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew} //readOnly - somente leitura.
        {...rest}
      />

      <button 
        onClick={onClick}
        type='button'
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}

      </button>
    </Container>
  )
}