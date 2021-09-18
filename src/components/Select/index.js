import React from 'react'
import styled from 'styled-components'
import { countryActions } from '../../context/actions/countryActions'
import { useCountries } from '../../hooks/useCountries'

const Select = styled.select`
  background-color: ${({theme}) => theme.color.secondary};
  border: none;
  box-shadow: 0 0 3px rgba(0,0,0.2);
  padding: .5rem 2rem;
  outline: none;
  color: ${({theme}) => theme.text.color};
  margin-bottom: 2rem;
`
const Index = () => {

  const options = ["Filter by Region","Africa", "Americas", "Asia", "Europe", "Oceania"]
  const {dispatch, countries} = useCountries()

  const handleOptions = (e) => {
    const regionSelect = e.target.value;
    dispatch({
      type : countryActions.FILTER_COUNTRY,
      payload : countries.filter(el => el.region === regionSelect) 
    })
  }
  return (
    <Select  onChange = {handleOptions}>
      {options.map((option, index) => <option value ={option} key = {index} >{option}</option>)}
    </Select>
  )
}

export default Index
