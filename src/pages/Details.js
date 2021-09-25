import { Link } from "react-router-dom"
import styled from "styled-components"
import useCountriesDetails from "../hooks/useCountriesDetails"
import Main from "../layout/Main"


const Details = () => {

  const {
    borderCountries,
    languages,
    currencies,
    name,
    flag,
    capital,
    region,
    subregion,
    nativeName
  } = useCountriesDetails()

  return (
    <Main>
      <Link to = "/"><Button> Back</Button></Link>
      <Grid>
        <img src = {flag} alt = {`flag of ${name}`}/>
        <div>
          <Grid>
            <div>
              <h2>{name}</h2>
              <p><strong>Native Name: </strong>{nativeName}</p>
              <p><strong>Region: </strong>{region}</p>
              <p><strong>subRegion: </strong>{subregion}</p>
              <p><strong>Capital: </strong>{capital}</p>
            </div>
            <div>
              <p><strong>currencies: </strong>{currencies}</p>
              <p><strong>Languajes: </strong>{languages}</p>
            </div>
            </Grid>
            <p>Border countries</p>
            { borderCountries &&
              borderCountries.map( border => <Link to = {`/details/${border}`} key = {border} ><Button>{border}</Button></Link>)
            }
        </div>
      </Grid>
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
const Grid  = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;

  @media (max-width: 700px){
    grid-template-columns: 1fr;
  }
`