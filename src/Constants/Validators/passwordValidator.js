export const passwordValidator = (password) => {
    const regexForPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(password.match(regexForPassword)) {
        console.log("Password Matched")
        return true;
    }  else  {
        console.log("Not matched")
        return false;
    }
}