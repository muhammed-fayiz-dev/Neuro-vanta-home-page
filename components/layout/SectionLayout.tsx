import { ReactNode ,FC} from "react"
import Container from "./ContainerLayout" 
interface Props {
  children: ReactNode
  className?: string
}
 const Section:FC<Props>=({ children, className = "" })=> {
  return (
    <section className={`py-section ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}


export default Section