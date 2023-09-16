var setBanner = function(message)
{
    d3.select("#bannerTitle")
    .text(message)
    .attr("style", "font-size:60px")
}
var consoleFilms = [];
var filmPromise =
d3.json("https://swapi.dev/api/films/")

filmPromise.then(
function(films)
{   
    consoleFilms = films.results; // DO NOT USE FOR CODING; Works for console
    console.log(consoleFilms);
    setBanner("STAR WARS APi");
    getFilmList(films.results);// Passes the actual array to the rest of the "films" in the program
    console.log("films", films)
    lightCSS("https://joshwest22.github.io/Web-API-Project/css/light.css")
    darkCSS("https://joshwest22.github.io/Web-API-Project/css/dark.css")
    //CHARACTER URLS BEGIN
    var charUrls0 = films.results[0].characters;
    console.log("charUrls0",charUrls0);
    
    var charUrls1 = films.results[1].characters;
    console.log("charUrls1",charUrls1);
    
    var charUrls2 = films.results[2].characters;
    console.log("charUrls2",charUrls2);
    
    var charUrls3 = films.results[3].characters;
    console.log("charUrls3",charUrls3);
    
    var charUrls4 = films.results[4].characters;
    console.log("charUrls4",charUrls4);
    
    var charUrls5 = films.results[5].characters;
    console.log("charUrls5",charUrls5);
    
    var charUrls6 = films.results[6].characters;
    console.log("charUrls6",charUrls6);
    //SHIP URLS BEGIN
    var shipUrls0 = films.results[0].starships;
    console.log("shipUrls0",shipUrls0);
    
    var shipUrls1 = films.results[1].starships;
    console.log("shipUrls1",shipUrls1);
    
    var shipUrls2 = films.results[2].starships;
    console.log("shipUrls2",shipUrls2);
    
    var shipUrls3 = films.results[3].starships;
    console.log("shipUrls3",shipUrls3);
    
    var shipUrls4 = films.results[4].starships;
    console.log("shipUrls4",shipUrls4);
    
    var shipUrls5 = films.results[5].starships;
    console.log("shipUrls5",shipUrls5);
    
    var shipUrls6 = films.results[6].starships;
    console.log("shipUrls6",shipUrls6);
    //SHIP PROMISES BEGIN
    var shipPromises = shipUrls0.map(function(shipUrls0) //maps the ship data for the specified movie to a json format that can be used by our program
    {
        console.log("shipPromises",shipPromises); 
        return d3.json(shipUrls0);
    })
    
    var shipPromises1 = shipUrls1.map(function(shipUrls1) //maps the ship data for the specified movie to a json format that can be used by our program
    {
        console.log("shipPromises1",shipPromises1); 
        return d3.json(shipUrls1);
    }) 

    var shipPromises2 = shipUrls2.map(function(shipUrls2) //maps the ship data for the specified movie to a json format that can be used by our program
    {
        console.log("shipPromises2",shipPromises2); 
        return d3.json(shipUrls2);
    }) 
    
    var shipPromises3 = shipUrls3.map(function(shipUrls3) //maps the ship data for the specified movie to a json format that can be used by our program
    {
        console.log("shipPromises3",shipPromises3); 
        return d3.json(shipUrls3);
    }) 
    
    var shipPromises4 = shipUrls4.map(function(shipUrls4) //maps the ship data for the specified movie to a json format that can be used by our program
    {
        console.log("shipPromises4",shipPromises4); 
        return d3.json(shipUrls4);
    })
    
    var shipPromises5 = shipUrls5.map(function(shipUrls5) //maps the ship data for the specified movie to a json format that can be used by our program
    {
        console.log("shipPromises5",shipPromises5); 
        return d3.json(shipUrls5);
    })
    
    var shipPromises6 = shipUrls6.map(function(shipUrls6) //maps the ship data for the specified movie to a json format that can be used by our program
    {
        console.log("shipPromises6",shipPromises6); 
        return d3.json(shipUrls6);
    }) 
    //CHARACTER PROMISES BEGIN
    var charPromises = charUrls0.map(function(charUrls0)
    {
        console.log("charPromises", charPromises);
        return d3.json(charUrls0);   
        
    })
    
     var charPromises1 = charUrls1.map(function(charUrls1)
    {
        console.log("charPromises1", charPromises1);
        return d3.json(charUrls1);       
    })
     
     var charPromises2 = charUrls2.map(function(charUrls2)
    {
        console.log("charPromises2", charPromises2);
        return d3.json(charUrls2);       
    })
     
     var charPromises3 = charUrls3.map(function(charUrls3)
    {
        console.log("charPromises3", charPromises3);
        return d3.json(charUrls3);       
    })
     
     var charPromises4 = charUrls4.map(function(charUrls4)
    {
        console.log("charPromises4", charPromises4);
        return d3.json(charUrls4);       
    })
     
     var charPromises5 = charUrls5.map(function(charUrls5)
    {
        console.log("charPromises5", charPromises5);
        return d3.json(charUrls5);       
    })
     
     var charPromises6 = charUrls6.map(function(charUrls6)
    {
        console.log("charPromises6", charPromises6);
        return d3.json(charUrls6);       
    })
    //SHIP BIG PROMISES BEGIN 
   /* Promise.all(shipPromises).then(function(values)
    {
        console.log("values",values);//gets the array of starships
        d3.select("#filmList")
        .on("click", function(d)
        {
        clearInfo("#shipName") //clears the starship name from previous films
        d3.select("#starshipList")
        .selectAll("li")
        .data(values)
        .enter()
        .append("span")
        .attr("id", "starships")
        .append("ul")
        .append("li")
        .attr("id", "shipName")
        .text(function(starship)
        {
            return starship.name
        })
        .append("ul")
        .append("li")
        .attr("id","shipModel")
        .text(function(starship)
        {
            return starship.model    
        })
        .append("li")
        .attr("id","shipCrew")
        .text(function(starship)
        {
            return starship.crew    
        })
        })
        d3.select("#characterTitle")
        .selectAll("li")
        .data(values)
        .enter()
        .on("click", function(characterArray)
        {
            console.log("clicked")
            console.log("character array",characterArray)
            characterArray.name.sort(function(a,b)
            {
                return a.name - b.name;
                //if ((a.name) == (b.name))
                //{return 0}
                //if ((a.name) < (b.name))
               //{return -1}
                //if ((a.name) > (b.name))
                //{return 1}
            })
        })
    })
    
    Promise.all(shipPromises1).then(function(values)
    {
        console.log("values",values);//gets the array of characters
        d3.select("#filmList")
        .on("click", function(d){
        clearInfo("#shipName") //clears the character name from previous films
        d3.select("#starshipList")
        .selectAll("li")
        .data(values)
        .enter()
        .append("span")
        .attr("id", "starships")
        .append("ul")
        .append("li")
        .attr("id", "shipName")
        .text(function(starship)
        {
            return starship.name
        })
        })
        
    })*/
    //CHARACTER BIG PROMISES BEGIN 
    Promise.all(charPromises).then(function(values)
    {
        console.log("values",values);//gets the array of characters
        d3.select("#filmList")
        .on("click", function(d) //when a film title in the film list is clicked do the following
        {
        clearInfo("#charName") //clears the character name from previous films
        d3.select("#characterList")
        .selectAll("li")
        .data(values)
        .enter()
        .append("span")
        .attr("id", "characters")
        .append("ul")
        .append("li")
        .attr("id", "charName")
        .text(function(movie)
        {
            return movie.name
        })
        })
        d3.select("#characterTitle")
        .selectAll("li")
        .data(values)
        .enter()
        .on("click", function(characterArray)
        {
            console.log("clicked")
            console.log("character array",characterArray)
            characterArray.name.sort(function(a,b)
            {
                return a.name - b.name;
                //if ((a.name) == (b.name))
                //{return 0}
                //if ((a.name) < (b.name))
               //{return -1}
                //if ((a.name) > (b.name))
                //{return 1}
            })
        })
    })
    
    Promise.all(charPromises1).then(function(values)
    {
        console.log("values",values);//gets the array of characters
        d3.select("#filmList")
        .on("click", function(d){
        clearInfo("#charName") //clears the character name from previous films
        d3.select("#characterList")
        .selectAll("li")
        .data(values)
        .enter()
        .append("span")
        .attr("id", "characters")
        .append("ul")
        .append("li")
        .attr("id", "charName")
        .text(function(movie)
        {
            return movie.name
        })
        })
        
    }) 
    
    Promise.all(charPromises2).then(function(values)
    {
        console.log("values",values);//gets the array of characters
        d3.select("#filmList")
        .on("click", function(d)
        {
        clearInfo("#charName") //clears the character name from previous films
        d3.select("#characterList")
        .selectAll("li")
        .data(values)
        .enter()
        .append("span")
        .attr("id", "characters")
        .append("ul")
        .append("li")
        .attr("id", "charName")
        .text(function(movie)
        {
            return movie.name
        })
        })
        
    })
    
    Promise.all(charPromises3).then(function(values)
    {
        console.log("values",values);//gets the array of characters
        d3.select("#filmList")
        .on("click", function(d)
        {
        clearInfo("#charName") //clears the character name from previous films
        d3.select("#characterList")
        .selectAll("li")
        .data(values)
        .enter()
        .append("span")
        .attr("id", "characters")
        .append("ul")
        .append("li")
        .attr("id", "charName")
        .text(function(movie)
        {
            return movie.name
        })
        })
        
    })
    
    Promise.all(charPromises4).then(function(values)
    {
        console.log("values",values);//gets the array of characters
        d3.select("#filmList")
        .on("click", function(d)
        {
        clearInfo("#charName") //clears the character name from previous films
        d3.select("#characterList")
        .selectAll("li")
        .data(values)
        .enter()
        .append("span")
        .attr("id", "characters")
        .append("ul")
        .append("li")
        .attr("id", "charName")
        .text(function(movie)
        {
            return movie.name
        })
        })
        
    })
    
    Promise.all(charPromises5).then(function(values)
    {
        console.log("values",values);//gets the array of characters
        d3.select("#filmList")
        .on("click", function(d)
        {
        clearInfo("#charName") //clears the character name from previous films
        d3.select("#characterList")
        .selectAll("li")
        .data(values)
        .enter()
        .append("span")
        .attr("id", "characters")
        .append("ul")
        .append("li")
        .attr("id", "charName")
        .text(function(movie)
        {
            return movie.name
        })
        })
        
    })
    
    Promise.all(charPromises6).then(function(values)
    {
        console.log("values",values);//gets the array of characters
        d3.select("#filmList")
        .on("click", function(d)
        {
        clearInfo("#charName") //clears the character name from previous films
        d3.select("#characterList")
        .selectAll("li")
        .data(values)
        .enter()
        .append("span")
        .attr("id", "characters")
        .append("ul")
        .append("li")
        .attr("id", "charName")
        .text(function(movie)
        {
            return movie.name
        })
        })
        
    })
},
function(err)
{
    setBanner("The balance between light and dark has been broken! No films found")
    console.log("ERROR", err)
})
var lightCSS = function(sheet){
    d3.select("#light")
    .on("click", function(d)
    {
        d3.select("#pageStyleSheet")
        .attr("href",sheet)
    })
}

var darkCSS = function(sheet){
    d3.select("#dark")
    .on("click", function(d)
    {
        d3.select("#pageStyleSheet")
        .attr("href",sheet)
    })
}
var getFilmList = function(films)
{
   d3.select("#filmList")
    .selectAll("div")
    .data(films)
    .enter()
    .append("div")
    .text(function(film){return film.title})
    .attr("class", function(d) {return d.episode_id})
    .attr("id", "filmTitle")//gives each film a unique class tag
    //.on("click", function(){alert("WORKS")}) 
    .on("click", function(film){
       console.log("clicked");
       if(film.episode_id == "4"){
            clearInfo("#infoList *");
            console.log("first movie in the list");
            getInfoList(films[0]);
            console.log(films);
            }
        else if(film.episode_id == "2"){
            clearInfo("#infoList *");
            console.log("second movie in the list");
            getInfoList(films[1]);
            console.log(films[1])} //this correctly displays the second opening_crawl
       else if(film.episode_id == "1"){
           clearInfo("#infoList *");
           getInfoList(films[2]);
           console.log("third movie in the list")}
       else if(film.episode_id == "3"){
           clearInfo("#infoList *");
           getInfoList(films[3]);
           console.log("fourth movie in the list")}
       else if(film.episode_id == "6"){
           clearInfo("#infoList *");
           getInfoList(films[4]);
           console.log("fifth movie in the list")}
       else if(film.episode_id == "5"){
           clearInfo("#infoList *");
           getInfoList(films[5]);
           console.log("sixth movie in the list")}
       else if(film.episode_id == "7"){
           clearInfo("#infoList *");
           getInfoList(films[6]);
           console.log("seventh movie in the list")}
   })
    
}

var getInfoList = function(film)
{
    console.log("line 76");
    console.log(film);
    var crawl = film.opening_crawl;
    d3.select("#infoList")
    .append("h1")
    .text(film.title)
    .attr("style", "font-size: 40px; text-decoration: none;")
    .append("p")
    .attr("style", "font-size: 25px; text-decoration: none;")
    .attr("id", "releaseDate")
    .text(" (" + film.release_date + ")")

    d3.select("#infoList")
    .attr("style", "border: solid #ffe81f 5px")
    .append("span")
    .text("Opening crawl")
    .attr("id", "opening_crawl_title")
    .on("click", function(d)
        {
            clearInfo(".openingCrawl")
        
            d3.select("#opening_crawl_title")//subject to change
            .append("p")
            .text('"' + crawl + '"')
            .attr("class", "openingCrawl")
            
            
        }
       )
    d3.select("#infoList")
    .append("p")
    .text("Director: " + film.director)
    .append("p")
    .text("Producer: " + film.producer)
    
}


var clearInfo = function(selector)
{
    d3.selectAll(selector)
    .remove()
}



/*var changeCSS = function(allegiance) // do this when light or dark is clicked
{
    d3.select(link)
    .on("click", function(
    {
        if (click == #light)
        {
            
        }
    }))
    .attr("href", function(alegiance)
         {
            if (allegiance = light) // make sure to attach a new allegiance attr when light clicked
            {
                return "light.css"
            }
            else if (allegiance = dark) // make sure to attach a new allegiance attr when dark clicked
            {
                return "dark.css"
            }
    })
}*/
