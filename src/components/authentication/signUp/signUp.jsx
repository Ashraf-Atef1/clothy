import "./signUp.scss";
import { useState } from "react";
import FormInput from "../formInput/formInput"
import Button from "../../button/button"
import {signUpWithEmailAndPassword} from "../../../config/config"

const defaultValues = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
}
const SignUpForm = () => {
const [signUpValues,setSignUpValues] = useState(Object.create(defaultValues));
const {displayName, email, password, confirmPassword} = signUpValues;
const handleSubmit = (event) => {
	event.preventDefault();
	if(password === confirmPassword) {
		try{
			signUpWithEmailAndPassword(signUpValues);
		}catch(err) {
			console.error(err);
		}
		setSignUpValues(defaultValues);
	}else {
		alert("passwords do not match");
	}
}
const handleChange = (event) =>{
	const key = event.target.name;
	const value = event.target.value;

	signUpValues[key] = value;
	setSignUpValues({...signUpValues})
}

	return (
		<div className='sign-up-container'>
		  <h2>Don't have an account?</h2>
		  <span>Sign up with your email and password</span>
		  <form onSubmit={handleSubmit}>
			<FormInput
			  label='Display Name'
			  type='text'
			  required
			  onChange={handleChange}
			  name='displayName'
			  value={displayName}
			/>
	
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
	
			<FormInput
			  label='Confirm Password'
			  type='password'
			  required
			  onChange={handleChange}
			  name='confirmPassword'
			  value={confirmPassword}
			/>
			<Button type='submit'>Sign Up</Button>
		  </form>
		</div>
	  );
	};
	
	export default SignUpForm;