export const passwordValidator = (password) => {
    const regexForPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(password.match(regexForPassword)) {
        return true;
    }  else  {
        return false;
    }
}