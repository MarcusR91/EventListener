# EventListener

# Instructions

1. Clone down the repository to your computer
2. Open it up in a code editor
3. Start a terminal from the rootmap
4. Use the command "npm install" or "npm ci"
4. Open a second terminal and type the command 'npx json-server --watch public/Data/db.json --port 3000' to use my API
5. Use the command npm start on the first terminal, the terminal will tell you where the server is running.
6. Open up a browser and navigate to http://localhost:xxxx



Now you should be able to try this prototype out!

This project is using parcel for building and transpiling my code so that it works correctly in the browser. 


# Externa bibliotek

1. Axios, används för att göra http anrop mellan klient och server
2. Json-server, används för att lagra och skriva ut data från mitt api
3. pacel, används för att transpilera ph bygga min kod så att den funkar för webbläsaren.
4. react-router-dom, används för att användaren ska kunna navigerla mellan olika vyer i min applikation.
5. Sweetalert2, används för att få lite finare alerts fönster som användaren kan interagera med om hen vill ta bort ett event från eventlistan.

# tjänster 

Det Webb api som jag använder mig av är en json-server. 
I min EventForm komponent används en post request till mitt api inuti min "submitHander" för att användaren ska kunna lägga till nya event och lagra dessa i API:et. 
I komponenten EventItems så används en Get funktion för att hämta den datan som är lagrad och som sedan skrivs ut i en tabell. I samma komponent används även en Delete request som är kopplad till en onClick på min delete knapp som finns för varje event i listan. 
