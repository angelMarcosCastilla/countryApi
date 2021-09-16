import  { useContext } from 'react'
import { CountryContext } from '../context/provider/CountryProvider'

export const useCountries = () => { 
  const {state, dispatch} = useContext(CountryContext)
  const {countries, filterCountries} = state
  return {countries, filterCountries, dispatch}
}
