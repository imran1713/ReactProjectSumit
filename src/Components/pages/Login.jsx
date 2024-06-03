import Illustration from "../Illustration.jsx";
import Form from "../Form.jsx";
import classes from '../../styles/Login.module.css';
import TextInput from "../TextInput.jsx";
import Button from "../Button.jsx";
import loginImage from '../../assets/images/login.svg'
const Login = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration image={loginImage}/>
                <Form className={classes.login} action={'#'}>
                    <TextInput
                        type={'email'}
                        placeholder={'Enter email'}
                        icon={'alternate_email'}
                    />
                    <TextInput
                        type={'password'}
                        placeholder={'Enter password'}
                        icon={'lock'}
                    />
                    <Button>
                        <span>Login</span>
                    </Button>
                    <div className="info">Dont have an account? <a href="signup.html">Signup</a> instead.</div>

                </Form>
            </div>

        </>
    );
};

export default Login;