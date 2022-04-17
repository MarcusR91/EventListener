import { renderBussinesIdea } from './bussinesIdea.js';
import {renderBussinesPlan} from './bussinesPlan.js';
import { renderContactInformation } from './contact.js';

export const content = document.getElementById('content');
export const businessIdea = document.getElementById('content')
export const contact = document.getElementById('content');

content.innerHTML = `
<div class = "welcome">
    <h1 >Välkommen</h1></br>
    <p>Hej! På den här enkla sidan kan du navigera runt för att få lite information om världens bästa Webbapplikation, EventListener! </p>
</div>


`;



document.getElementById('plan').addEventListener('click', function(){
    renderBussinesPlan();
})
document.getElementById('idea').addEventListener('click', function(){
    renderBussinesIdea();
})
document.getElementById('contact').addEventListener('click', function(){
    renderContactInformation();
})
