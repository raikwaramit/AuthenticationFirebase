import { AuthData } from "../../datastore/slice/AuthSlice";
import { LoginCred, firebaseSingIn } from "../firebase/FirebaseSignIn";
import firebaseSignUp, { SignUpCred } from "../firebase/FirebaseSignUp";

export function signIn(
  cred: LoginCred,
  signInHandler: (authData: AuthData) => void
) {
  firebaseSingIn(cred, signInHandler);
}

/**
 * Method to make the Firebase login
 */
export function signUp(
  cred: SignUpCred,
  signUpHandler: (authData: AuthData) => void
) {
  firebaseSignUp(cred, signUpHandler);
}
