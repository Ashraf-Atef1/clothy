import { takeLatest, call, put, all } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";
import {
  SIGN_SUCCESS,
  SIGN_FAILED
} from "./user.reducer";

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails = {}) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    const {displayName, email} = userSnapshot.data()
    yield put(SIGN_SUCCESS({id: userSnapshot.id, displayName, email}));
  } catch ({message}) {
    yield put(SIGN_FAILED(message));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch ({message}) {
    yield put(SIGN_FAILED(message));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch ({message}) {
    yield put(SIGN_FAILED(message));
  }
}

export function* isUserAuthenticated() {
  try {
    const user = yield call(getCurrentUser);
    if (!user) return;
    yield call(getSnapshotFromUserAuth, user);
  } catch ({message}) {
    yield put(SIGN_FAILED(message));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    user.displayName = displayName;
    yield call(createUserDocumentFromAuth, user);
    yield put(SIGN_SUCCESS({id: user.uid, email, displayName}));
  } catch ({message}) {
    yield put(SIGN_FAILED(message));
  }
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(SIGN_SUCCESS(null));
  } catch ({message}) {
    yield put(SIGN_FAILED(message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}


export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignOutStart),
  ]);
}
