

import classes from '../styles/Illustration.module.css';

// eslint-disable-next-line react/prop-types
const Illustration = ({image}) => {
    return (
        <div className={classes.illustration}>
            <img src={image} alt="Signup"/>
        </div>
    );
};

export default Illustration;