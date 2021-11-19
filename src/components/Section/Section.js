import PropTypes from 'prop-types';
import s from './Section.module.css';

Section.propTypes = {
    children: PropTypes.node,
};

function Section({ children }) {
    return <section className={s.section}>{children}</section>;
}

export default Section;
