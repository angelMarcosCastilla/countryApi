import React from 'react'
import  {CardCountry, ContainerText, CountryCapital, CountryName, CountryPopulation, CountryRegion, ImgCountry} from "./styled" 

function Index({country}) {
  const {name, flags, region, area, capital} = country
  return (
    <CardCountry  >
      <ImgCountry src = {flags[0]} alt= "bandera peru"></ImgCountry>
     <ContainerText> 
       <CountryName> {name.common} </CountryName>
      <CountryPopulation><strong>Area: </strong> {area} </CountryPopulation>
      <CountryRegion><strong>Region: </strong> : {region}</CountryRegion>
      <CountryCapital><strong>Capital: </strong> : {capital || "-"}</CountryCapital>
      </ContainerText>
    </CardCountry>
  )
}

export default Index
