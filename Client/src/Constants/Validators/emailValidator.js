export const validateEmail = (email) => {
    const regexForEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(regexForEmail)) {
        console.log("Valid Email Address")
        return true;
    } else {
        console.log("Invalid Email Address");
        return false;
    }
}