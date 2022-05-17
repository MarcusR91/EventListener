import EventForm from "../EventForm";
import EventList from "../EventList";
import { Home } from "../Home";
import Contact from "../Contact"
import AuthForm from "../AuthForm";
import MessageToUser from "../utils/MessageToUser";


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
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/signup',
        component: AuthForm
    },
    {
        path: '/message',
        component: MessageToUser
    }
];