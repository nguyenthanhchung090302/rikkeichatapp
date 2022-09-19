import{ renderErrorMessage } from "../view/index";
import{createNewUser} from "../model/index"
// import { CreateNewUser, loginUser } from "../model/index";

export let validateLoginInfo = (email, password) => {
  // regex, regular expression
  // email regex
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("email-error-message", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("email-error-message", "Invalid email");
  } else {
    renderErrorMessage("email-error-message", "");
  }

  if (!password) {
    renderErrorMessage("password-error-message", "Please enter your password");
  } else {
    renderErrorMessage("password-error-message", "");
  }
};
export let validateregisterInfo = (FistName, LastName, email, password, ConfirmPassword) => {
    // regex, regular expression
    // email regex
    const emailRegex =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!FistName) {
      renderErrorMessage("firstName-error-message", "Please enter your name");
    } else if (!emailRegex.test(email)) {
      renderErrorMessage("firstName-error-message", "Invalid Name");
    } else {
      renderErrorMessage("firstName-error-message", "");
    }

    if (!LastName) {
        renderErrorMessage("last Name-error-message", "Please enter your name");
      } else if (!emailRegex.test(email)) {
        renderErrorMessage("last Name-error-message", "Invalid Name");
      } else {
        renderErrorMessage("last Name-error-message", "");
      }
    
    if (!email) {
        renderErrorMessage("email-error-message", "Please enter your email");
      } else if (!emailRegex.test(email)) {
        renderErrorMessage("email-error-message", "Invalid email");
      } else {
        renderErrorMessage("email-error-message", "");
      }
      
    if (!password) {
        renderErrorMessage("password-error-message", "Please enter your password");
      } else {
        renderErrorMessage("password-error-message", "");
      }

    if (!ConfirmPassword) {
        renderErrorMessage("password1-error-message", "Please enter your password");
      } else {
        renderErrorMessage("password1-error-message", "");
      }
    if (
        FistName &&
        LastName &&
        email &&
        password &&
        ConfirmPassword &&
        ConfirmPassword === password
        ){
            createNewUser(FistName, LastName, email, password, ConfirmPassword)
        }
  };



