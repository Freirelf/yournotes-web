import { Container } from "./style";

export function Input({icon: Icon, ...rest}) {
  return(
    <Container>
      {Icon && <Icon size={40} />}
      <input {...rest} />

      <input></input>
    </Container>
  )
}