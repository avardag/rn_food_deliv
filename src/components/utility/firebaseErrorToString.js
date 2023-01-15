export function getMessageFromErrorCode(code) {
  switch (code) {
    case "auth/email-already-in-use":
    case "auth/email-already-exists":
      return "Email already used. Go to login page. Or choose another email";
    case "auth/invalid-password":
    case "auth/wrong-password":
      return "Wrong email/password combination.";
    case "auth/weak-password":
      return "Password must be at least 6 characters long";
    case "auth/user-not-found":
      return "No user found with this email.";
    case "auth/operation-not-allowed":
      return "Too many requests to log into this account.";
    case "auth/operation-not-allowed":
      return "Server error, please try again later.";
    case "auth/invalid-email":
      return "Email address is invalid.";
    case "auth/user-disabled":
      return "You are banned!!!";
    default:
      return "Something went wrong here. Please try again.";
  }
}
