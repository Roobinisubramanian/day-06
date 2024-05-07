var request = new XMLHttpRequest()
request.open("GET", "https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
var res=JSON.parse(request.response);
console.log(res);
    //Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
    //Get all the countries from Asia continent /region using Filter method
    var data = res.filter((ele)=>ele.region == "Asia");
    console.log(data);
    //Get all the countries with a population of less than 2 lakhs using Filter method
    var less_population = res.filter((ele)=>ele.population < "200000");
    console.log(less_population);
    //Print the following details name, capital, flag, using forEach method
    var data1 = res.filter((ele)=>ele.country == undefined)
        data1.forEach(result);
        function result(country) {
            console.log(country.name.common);
            console.log(country.capital);
            console.log(country.flag);
        }    
        
    //Print the total population of countries using reduce method
    var total_population = res.reduce((acc,cv)=>acc+cv.population,0);
    console.log(total_population);

    //Print the country that uses US dollars as currency
    
    let u_country = res.filter((ele)=>ele.currencies !== undefined);

  let usd_country = u_country.filter((country) => {
    for (let key in country.currencies) {
      if (country.currencies[key].name === "United States dollar") {
        return country;
      }
    }
  });

  console.log(usd_country);
};