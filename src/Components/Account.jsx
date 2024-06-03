import classes from '../styles/Acoount.module.css';
import {NavLink} from "react-router-dom";

const Account = () => {
    return (
        <div className={classes.account}>
            <span className="material-icons-outlined" title="Account">
                account_circle
            </span>
            <a href="signup.html">Signup</a>
            {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
        </div> 
    );
};

export default Account;