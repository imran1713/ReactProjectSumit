import Checkbox from "./Checkbox.jsx";
import classes from '../styles/Answers.module.css';

const Answers = () => {
    return (
        <div className={classes.answers}>
            <Checkbox
                className={classes.answer}
                text={'Test answer'}
            />

        </div>
    );
};

export default Answers;