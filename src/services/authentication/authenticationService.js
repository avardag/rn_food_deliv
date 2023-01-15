import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/config";

export function loginRequest(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function registerRequest(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
