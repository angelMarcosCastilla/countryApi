const getcountries = async () => {
   try {
     const data = await fetch("https://restcountries.eu/rest/v2/all")
     const countries = await data.json()

     return countries

   } catch (error) {
     console.log("error en el peticion")
   }
}

export default  getcountries