import { content } from './main.js';


export const renderBussinesPlan = () => {
    content.innerHTML = `
        <h1>Affärsplan</h1>
        <div id = "myPlan">
            <p>EventListener, en applikation för musiker/arragngörer, skapad av en musiker som vet hur svårt det kan vara att ta sig fram i brscnhen</p>
        </div>
        <h3>Syfte och bakgrund</h3>
        <div id = "myPlan">
            <p>Min idé för denna produkten grundar sig i min tid som musiker då jag spelade i band och var ute på 
            spelningar. Även om det inte var så jättesvårt att hitta ställen att spela på så tycker jag att det var väldigt 
            tidskrävande och inte alltid så lätt att komma överens med eventuella arrangörer om tid och datum som 
            passade båda parter.<br>
            Syftet med produkten är att den ska hjälpa artister och arrangörer att tillsammans samordna olika event 
            och tillställningar på ett smidigt sätt. Genom användandet av min produkt så kommer tid att sparas och ett
            gott samarbete mellan de olika parterna kommer att skapas. 
            Den här plattformen förenklar processen med att styra upp ett event. 
            Detta är även bra för den yngre generationen av artister som inte riktigt vet hur dem ska gå till väga för att
            få komma ut och spela, vilket vår plattform kommer hjälpa till med.
            </p>
        </div>
        <h3>Mål</h3>
        <div id = "myPlan">
            <ol>
                <li>Bygga och etablera en plattform som ska öka mängden spelningar en artist får per år med 20-30%.</li>
                <li>Minska tiden det tar att styra upp event med 20%.</li>
                <li>Vi ska ha 200 prenumeranter inom ett år efter lansering.</li>
            </ol>
        </div>
        <h3>Omfattning</h3>
        <div id = "myPlan">
            <p>Resultatet projektet ska producera är en digital plattform som används av musiker, arrangörer och även 
            allmänheten som vill gå och se på event. Resultatet innebär att arrangörer kan lägga ut event med biljett 
            försäljning och för artister att komma i kontakt med olika arrangörer.
        </div>
    `;
}