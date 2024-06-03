import classes from '../styles/Video.module.css';
import image from '../assets/images/3.jpg';
const Video = () => {
    return (
        <div className={classes.video}>
            <a href="quiz.html">
                <div className="video">
                    <img src={image}   alt="Video title"/>
                    <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                    <div className="qmeta">
                        <p>10 Questions</p>
                        <p>Score : Not taken yet</p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Video;