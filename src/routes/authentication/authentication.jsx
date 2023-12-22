import SignUpForm from "../../components/authentication/signUp/signUp"
import SignInForm from "../../components/authentication/signIn/signIn"
import "./authentication.scss"

const Authentication = () =>(<div className="authentication-container">
	<SignUpForm/>
	<SignInForm/>
</div>)

export default Authentication