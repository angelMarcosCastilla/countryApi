import  { useContext } from 'react'
import { CountryContext } from '../context/provider/CountryProvider'

export const useCountries = () => { 
  const state = useContext(CountryContext)
  return state
}
