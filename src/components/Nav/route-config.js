import EventForm from "../Events/EventForm";
import EventList from "../Events/EventList";
import { Home } from "../Pages/Home";
import Contact from "../Pages/Contact"
import AuthForm from "../Auth/AuthForm";
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