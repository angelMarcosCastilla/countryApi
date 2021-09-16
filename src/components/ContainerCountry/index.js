import { useCountries } from "../../hooks/useCountries"
import  CardCountry  from "../CardCountry"
import { ContainerCountries } from "./styled"

const Index = () => {
  const {filterCountries} = useCountries()
  return (
    <ContainerCountries>
     {
     filterCountries.map(el => <CardCountry  key = {el.name} country = {el}/>)
     }
    </ContainerCountries>
  )
}

export default Index
