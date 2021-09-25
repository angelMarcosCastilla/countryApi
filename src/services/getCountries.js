const getcountries = async () => {
   try {
     const data = await fetch("https://restcountries.com/v3/all")
     const countries = await data.json()

     return countries

   } catch (error) {
     console.log("error en el peticion")
   }
}

export default  getcountries