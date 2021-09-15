import styled  from "styled-components"

export const CardCountry = styled.div`
  width: 100%;
  height: 400px;
  box-shadow  : 5px 0  10px rgb(0,0,0,.3) ;
  background: ${({theme}) => theme.color.secondary};
`
export const ContainerText = styled.div`
  padding: 0 1.5rem ;
  
`
export const ImgCountry = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`
export const CountryName = styled.h3`

`
export const CountryPopulation = styled.p`
`
export const CountryCapital = styled.p`
`
export const CountryRegion = styled.p`
`
