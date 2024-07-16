import { UserActionTypes } from "./user.types";
import { createAction } from "../../utils/actions/createAction";

export const setCurrentUser = (user) =>
  createAction(UserActionTypes.SET_CURRENT_USER, user);

export const checkUserSession = () =>
  createAction(UserActionTypes.CHECK_USER_SESSION);

export const googleSignInStart = () =>{
  console.log("start google", createAction(UserActionTypes.GOOGLE_SIGN_IN_START))
  return createAction(UserActionTypes.GOOGLE_SIGN_IN_START);
}

export const emailSignInStart = (email, password) =>
  createAction(UserActionTypes.EMAIL_SIGN_IN_START, { email, password });

export const signUpStart = (email, password, displayName) =>
  createAction(UserActionTypes.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signOutStart = () => createAction(UserActionTypes.SIGN_OUT_START);

