import './style/Footer.css';
import propTypes from 'prop-types';

export const Footer = (props) => {
    return <footer>{props.title} &copy; {props.date} </footer>

}

Footer.propTypes = {
    title: propTypes.string,
    date: propTypes.string
}