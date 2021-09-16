import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import { useCountries } from "../hooks/useCountries"
import Main from "../layout/Main"


const Details = () => {

  const {countries} = useCountries();
  const {name} = useParams();
  const [countryDetails, setcountryDetails] = useState({})

  useEffect(() => {
    const  details = countries.find( el => el.name === name)
    const  borderCountries = details.borders.map(border => countries.find(el => el.alpha3Code === border).name)
    
    const languages = details.languages.map(el => el.name).join(" , ")
    const currencies = details.currencies.map(el => el.name).join(" , ")
    const topLevelDomain = details.topLevelDomain[0];
    const data = {
      borderCountries,
      languages,
      currencies,
      topLevelDomain,
      name : details.name,
      flag : details.flag,
      capital: details.capital,
      region : details.region,
      subregion: details.subregion,
      nativeName : details.nativeName
    }
    setcountryDetails(data)
  },[countries, name])

  return (
    <Main>
      <Link to = "/"><Button> Back</Button></Link>
      <Flex>
       <img width = "45%" src = {countryDetails?.flag} alt = "of flag"/>
       <div width = "50%">
         <Info><Strong>Native Name: </Strong> {countryDetails?.nativeName} <Strong> Top level Domain: </Strong> {countryDetails?.topLevelDomain}</Info>
         <Info><Strong>Region: </Strong> {countryDetails?.region} <Strong> Curriences: </Strong> {countryDetails?.currencies}</Info>
         <Info><Strong>SubRegion: </Strong> {countryDetails?.subregion} <Strong> Languajes: </Strong> {countryDetails?.languages}</Info>
         <Info><Strong>Capital: </Strong> {countryDetails?.capital}</Info>
       
       </div>
      </Flex>
    </Main>
  )
}

export default Details

const Button = styled.button`
  background-color: ${({theme}) => theme.color.secondary};
  color : ${({theme}) => theme.text.color};
  padding: .3rem 1.5rem;
  outline: none;
  cursor: pointer;
  border: none;
  box-shadow:  0 0 3px rgba(0, 0, 0, .5);
  margin-bottom:  2rem;
`
const Flex  = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 700px){
    flex-direction: column;
  }

`

const Strong = styled.strong`

`
const Info = styled.p`

`