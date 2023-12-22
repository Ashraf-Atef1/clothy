import { useState } from "react";
import { signInUserWithEmailAndPassword, signInWithGoogle } from "../../../config/config";
import FormInput from "../formInput/formInput";
import Button from "../button/button";
import "./signIn.scss";

const defaultValues = {
	displayName: '',
	email: '',
}
const SignInForm = () => {
	const [signInValues, setSignInValues] = useState(defaultValues);
	const { email, password } = signInValues;
  
	const handleSubmit = (event) => {
		event.preventDefault();
			try{
				signInUserWithEmailAndPassword(signInValues);
			}catch(err) {
				console.error(err);
			}
			setSignInValues(defaultValues);
	}
	const handleChange = (event) =>{
		const key = event.target.name;
		const value = event.target.value;
	
		signInValues[key] = value;
		setSignInValues({...signInValues})
	}
  
	return (
	  <div className='sign-in-container'>
		<h2>Already have an account?</h2>
		<span>Sign in with your email and password</span>
		<form onSubmit={handleSubmit}>
		  <FormInput
			label='Email'
			type='email'
			required
			onChange={handleChange}
			name='email'
			value={email}
		  />
  
		  <FormInput
			label='Password'
			type='password'
			required
			onChange={handleChange}
			name='password'
			value={password}
		  />
		  <div className='buttons-container'>
			<Button type='submit'>Sign In</Button>
			<Button buttonType='google' type='button' onClick={signInWithGoogle}>
			  Sign In With Google
			</Button>
		  </div>
		</form>
	  </div>
	);
  };
  
  export default SignInForm;