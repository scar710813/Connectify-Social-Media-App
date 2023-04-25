import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LogInForm';

function AuthPage({setUser}) {

    return (
        <div>
            <h1>Auth Page</h1>

            <SignUpForm setUser={setUser}/>

            <LoginForm setUser={setUser}/>
        </div>
    )
}


export default AuthPage;