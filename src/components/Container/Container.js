import PropTypes from 'prop-types';
import s from './Container.module.css';

Container.propTypes = {
    children: PropTypes.node,
};

function Container({ children }) {
    return <div className={s.container}>{children}</div>;
}

export default Container;
