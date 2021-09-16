import { countryActions } from "../actions/countryActions"

export const countryReducer = (state, action) => {
  
  switch(action.type){
    case countryActions.LOAD_COUNTRIES:
      return {...state, countries:action.payload};

    case countryActions.FILTER_COUNTRY:
      return {...state, filterCountries:action.payload};

    default : return state 
  }

}
