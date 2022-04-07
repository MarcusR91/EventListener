import { renderBussinesIdea } from './bussinesIdea.js';
import {renderBussinesPlan} from './bussinesPlan.js';

export const content = document.getElementById('content');
export const businessIdea = document.getElementById('content');

content.innerHTML = `
<h3>Välkommen</h3>
<p>Hej! På den här enkla sidan kan du navigera runt för att få lite information om världen bästa Webbapplikation, EventListener!</p>

`;

document.getElementById('plan').addEventListener('click', function(){
    renderBussinesPlan();
})
document.getElementById('idea').addEventListener('click', function(){
    renderBussinesIdea();
})