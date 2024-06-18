var rest_api = "https://restcountries.com/v3.1/all";

async function api() {
  var url = fetch(rest_api);
  var out = await (await url).json();
 
  var parent = document.querySelector(".row");
  for (let i of out) {
    try {
      
      var data_cont = document.createElement("div");
      data_cont.classList.add("card");

      //latlng
      var lat = i.latlng[0];
      var lng = i.latlng[1];
      data_cont.setAttribute("lat", lat);
      data_cont.setAttribute("lng", lng);

      //Name
      var country_name = document.createElement("h2");
      country_name.innerText = i.name.common;
      data_cont.append(country_name);

      //Flag
      var country_flag = document.createElement("img");
      country_flag.setAttribute("src", i.flags.png);
      data_cont.append(country_flag);

      //Capital
      var country_capital = document.createElement("p");
      country_capital.innerText = "CAPITAL : " + i.capital[0];
      data_cont.append(country_capital);
      

      //Region
      var country_region = document.createElement("p");
      country_region.innerText = "REGION : " + i.region;
      data_cont.append(country_region);

      //Country codes
      var country_code = document.createElement("p");
      country_code.innerText = "COUNTRY CODE : " + i.cca3;
      data_cont.append(country_code);

     //population
     var country_population = document.createElement("p");
     country_population.innerText = "POPULATION: " + i.population;
     data_cont.append(country_population);

    //   //Click Button
      var click_btn = document.createElement("button");
      click_btn.setAttribute("onclick", "clicking(e)");
      click_btn.innerHTML = "Weather";
      data_cont.append(click_btn);
    
    parent.append(data_cont);
    } catch (err) {
      console.log(err);
    }
  }
}
api();

