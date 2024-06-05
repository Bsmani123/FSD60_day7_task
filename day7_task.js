/**Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
    a. Get all the countries from Asia continent /region using Filter method
    b. Get all the countries with a population of less than 2 lakhs using Filter method
    c. Print the following details name, capital, flag, using forEach method
    d. Print the total population of countries using reduce method
    e. Print the country that uses US dollars as currency.*/

// Task:a
// ------
// Get all the countries from Asia continent /region using Filter method:-

const url = "https://restcountries.com/v3.1/all";

var http = new XMLHttpRequest();

http.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
         var restCountries = JSON.parse(this.responseText);
          console.log(restCountries);

          let asiaContinent = restCountries.filter((f) => {
          return f.region === "Asia";
       });
       console.log(asiaContinent);
    }
};

http.open("GET", url);

http.send();
// ---------------------------------------------------------------------------------


//   Task:b
//   ------
// Get all the countries with a population of less than 2 lakhs using Filter method

var http = new XMLHttpRequest();

    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var restCountries = JSON.parse(this.responseText);

        let populn = restCountries.filter((f) => {
          return f.population < 200000 ;
        });
        console.log(populn);

      }
    };

    http.open("GET", url);

    http.send();
// -------------------------------------------------------------------------
//

// Print the following details name, capital, flag, using forEach method

// task:c
// ------

let http =  new XMLHttpRequest();
    http.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            let restCountries = JSON.parse(this.responseText)
             console.log(restCountries);
             // using forEach
                 restCountries.forEach(element => {
                    console.log(element.name);
                    console.log(element.capital);
                    console.log(element.flag);
                 });

        }
    }
    http.open("GET", url);
    http.send();

// ---------------------------------------------------------------

// task:d.
// ------
// Print the total population of countries using reduce method:-

let http = new XMLHttpRequest();
http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let restCountries = JSON.parse(this.responseText);
        console.log(restCountries);

        let sum = restCountries.reduce((acc, curr) => {      // USING RESDUCE
            return acc + curr.population;
        }, 0);
        console.log(sum);
    }
};

http.open("GET", url);
http.send();

// --------------------------------------------------------------------

// Task:e
// ------
// e. Print the country that uses US dollars as currency.

// const url = "https://restcountries.com/v3.1/all";

let http = new XMLHttpRequest();
http.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let restCountries = JSON.parse(this.responseText);

    const countriesWithUSD = restCountries.filter((currentCountry) => {
      return currentCountry.currencies && currentCountry.currencies.USD;
    });

    if (countriesWithUSD.length > 0) {
      console.log("Countries that use US dollars as currency:");
      countriesWithUSD.forEach((country) => {
        console.log(country.name.common);
      });
    } else {
      console.log("No country uses US dollars as currency.");
    }
  } else {
    console.error("Error loading countries:", this.status);
  }
};

http.open("GET", url);
http.send();
