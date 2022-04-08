import { businessIdea } from "./main.js";


export const renderBussinesIdea =() =>{
    businessIdea.innerHTML = `
        <h1>Affärsidé</h1>
        <div id = "myPlan">
            <p>Min idé är att bygga en webbapplikation där tanken är att en arrangör ska kunna publicera ett event som sedan en lokal artist ska kunna anmäla sitt intresse till. 
            Sedan ska den arrangör som lade ut eventet på hemsidan se vilka artister som har anmält sitt intresse och kunna ta kontakt med dem om arrangören anser att det är en 
            lämplig artist för just deras event. Dock så är min idé inte bara för artister och arrangöerer. Här ska även allmänheten kunna gå in på ett event och se om det är något som verkar intressant. Då ska denna applikation 
            även erbjuda biljettköp för åskådare.</p>
        </div>
    `;
};