import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

export function loginRequest(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
