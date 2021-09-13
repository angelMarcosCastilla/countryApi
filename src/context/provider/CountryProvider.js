import { createContext, useReducer, useEffect} from "react"
import getcountries from "../../services/getCountries";
import { countryActions } from "../actions/countryActions";
import { countryReducer } from "../reducer/countryReducer";

const initialState = []

export const CountryContext  = createContext(initialState)

export const CountryProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(countryReducer, initialState)

  useEffect(() => {
    getcountries().then(countries => {

      dispatch({type:countryActions.LOAD_COUNTRIES, payload : countries })
    })
  }, [])

   
  const data = {state}
  return (
    <CountryContext.Provider value = {data}>
      {children}
    </CountryContext.Provider>
  )
}
