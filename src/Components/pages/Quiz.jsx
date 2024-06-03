import Answers from "../Answers.jsx";
import ProgressBar from "../ProgressBar.jsx";
import MiniPlayer from "../MiniPlayer.jsx";


const Quiz = () => {
    return (
        <>
            <h1>Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>
            <Answers/>
            <ProgressBar/>
            <MiniPlayer/>

        </>
    );
};

export default Quiz;