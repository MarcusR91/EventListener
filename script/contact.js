import { contact } from "./main.js"

export const renderContactInformation = () =>{
    contact.innerHTML = `
    <div id ="myInfo">
        <ol>
            <li>Mail:Marcus@EventListener.com</li>
            <li>Phone: 0737-1234567</li>
            <li>Adress:EventGatan 7D Skövde</li>
        </ol>
    </div>
    `;
}