import Illustration from "../Illustration.jsx";
import Form from '../Form.jsx'
import classes from '../../styles/Signup.module.css'
import TextInput from "../TextInput.jsx";
import Checkbox from "../Checkbox.jsx";
import Button from "../Button.jsx";
import signupImage from '../../assets/images/signup.svg'
const Signup = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration image={signupImage}/>
                <Form className={classes.signup} action={'#'}>
                    <TextInput
                        type={'text'}
                        placeholder={'Enter name'}
                        icon={'person'}
                    />
                    <TextInput
                        type={'text'}
                        placeholder={'Enter email'}
                        icon={'alternate_email'}
                    />
                    <TextInput
                        type={'password'}
                        placeholder={'Enter password'}
                        icon={'lock'}
                    />
                    <TextInput
                        type={'password'}
                        placeholder={'Confirm password'}
                        icon={'lock_clock'}
                    />
                    <Checkbox text={'I agree to the term & conditions'}/>
                    <Button>
                        <span>Submit Now</span>
                    </Button>

                    <div className="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>

                </Form>

            </div>

        </>
    );
};

export default Signup;