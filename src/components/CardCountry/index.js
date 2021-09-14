import React from 'react'
import  {CardCountry, ContainerText, CountryCapital, CountryName, CountryPopulation, CountryRegion, ImgCountry} from "./styled" 
function Index({country}) {
  const {name, flag, population, region, capital} = country
  return (
    <CardCountry >
      <ImgCountry src = {flag} alt= "bandera peru"></ImgCountry>
     <ContainerText> 
       <CountryName> {name} </CountryName>
      <CountryPopulation><strong>Popuation</strong>: {population} </CountryPopulation>
      <CountryRegion><strong>Region</strong> : {region}</CountryRegion>
      <CountryCapital><strong>Capital</strong> : {capital}</CountryCapital>
      </ContainerText>
    </CardCountry>
  )
}

export default Index
