import { useEffect, useState} from "react"
import styled from "styled-components"
import { countryActions } from "../../context/actions/countryActions"
import { useCountries } from "../../hooks/useCountries"

const Search = styled.input`
  background-color: ${({theme}) => theme.color.secondary};
  border: none;
  box-shadow: 0 0 3px rgba(0,0,0.2);
  padding: .5rem 2rem;
  outline: none;
  margin-bottom: 2rem;
`
const Index = () => {
  const [search, setSearch] = useState("")
  const {dispatch, countries} = useCountries()

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    dispatch(
      {
        type : countryActions.FILTER_COUNTRY,
        payload : countries.filter(el => el.name.common.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      }
    )
  }, [search, dispatch, countries])
  return (
    <Search onChange = {handleChange} value = {search} type = "search"  placeholder = "search country"/>
      
  )
}

export default Index
