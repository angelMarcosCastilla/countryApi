import { Link } from "react-router-dom"
import { useCountries } from "../../hooks/useCountries"
import  CardCountry  from "../CardCountry"
import { ContainerCountries } from "./styled"

const Index = () => {
  const {filterCountries} = useCountries()
  return (
    <ContainerCountries>
     {
       filterCountries.map(el => <Link style = {{"textDecoration":"none"}}to = {`/details/${el.name.common}`} key = {el.name.common}><CardCountry   country = {el}/> </Link>)
    }
    </ContainerCountries>
  )
}

export default Index
