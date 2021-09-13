import { countryActions } from "../actions/countryActions"

export const countryReducer = (state, action) => {
  
  switch(action.type){
    case countryActions.LOAD_COUNTRIES:
    return [...action.payload]

    default : return state 
  }

}
