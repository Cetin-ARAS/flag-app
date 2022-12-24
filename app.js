const fetchCountry = async (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`; 
    try {
       const res = await fetch(url);
       if(!res.ok){
            renderError(`Something went wrong:${res.status}`)
            throw new Error()
        }
        const data = await res.json();
        // console.log(data[0]);
        renderCountry(data[0]);
   }    catch (error) {
        console.log(error);
   }
    
}  
   
const renderError = (err) =>{
    const countriesDiv = document.querySelector('.countries');
    countriesDiv.innerHTML =`
    <h1 class="text-danger">${err}Data can not be fetched</h1>
    <img src="./404.png" alt="" />`
}
const renderCountry = (country) => {
    console.log(country);
    const countriesDiv = document.querySelector('.countries');
    const { 
        capital,
        region,
        flag: {svg}

        name: { common}
     } = country;
    console.log(capital, common, region);
};



fetchCountry('turkey');
fetchCountry('usa');