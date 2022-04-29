import EventForm from "../EventForm";
import EventList from "../EventList";
import { Home } from "../Home";


export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/addEvent',
        component: EventForm
    },
    {
        path: '/events',
        component: EventList
    }
];