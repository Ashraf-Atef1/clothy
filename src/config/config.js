import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import {doc,setDoc,getDoc,getFirestore} from "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyCmzoE-LG13OK-70P62_RgJuoADHIPIhvU",
	authDomain: "clothy-12526.firebaseapp.com",
	projectId: "clothy-12526",
	storageBucket: "clothy-12526.appspot.com",
	messagingSenderId: "789860648739",
	appId: "1:789860648739:web:b0caeb0518a8e678aeee96"
  };
  
const FireBaseApp = initializeApp(firebaseConfig);
const auth = getAuth(FireBaseApp);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(FireBaseApp);

export const signInWithGoogle = async ()=>{
	try{
		const {user} = await signInWithPopup(auth,googleProvider);
		AddNewUserToDB(user);
	}catch(err) {
		console.error(err);
	}
}
export const signUpWithEmailAndPassword = async ({email,password,displayName})=> {
	try{
		const {user} =await createUserWithEmailAndPassword(auth, email,password);
		AddNewUserToDB(user, {displayName});
	}catch(err) {
		console.error(err);
	}
}
export const signInUserWithEmailAndPassword = async ({email,password})=> {
	try{
		const {user} =await signInWithEmailAndPassword(auth, email,password);
	}catch(err) {
		console.error(err);
	}
}
export const AddNewUserToDB= async(userData,addData={}) =>{
	const userDocData = {createdAt:new Date(),
		displayName:userData.displayName,
		email:userData.email,
		...addData
	}
	const userDocRef = doc(db,"Users",userData.uid);
	const userSnapShot = await getDoc(userDocRef);
	console.log(userDocRef);
	if(!userSnapShot.exists()) {
		await setDoc(userDocRef,userDocData);
	}else{
		console.log("uesr is exist!");
	}
}
export const OnAuthChanged = async(callback) => {
	return onAuthStateChanged(auth,callback);
}
export const signOutUser = async() =>{
	signOut(auth);
}