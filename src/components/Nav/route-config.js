import EventForm from "../EventForm";
import { Home } from "../Home";


export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/addEvent',
        component: EventForm
    }
];