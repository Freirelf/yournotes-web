import { Container } from "./style";

export function Input({icon: Icon, ...rest}) {
  return(
    <Container>
      {Icon && <Icon size={30} />}
      <input {...rest} />
    </Container>
  )
}