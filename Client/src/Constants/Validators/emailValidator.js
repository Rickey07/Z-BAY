export const validateEmail = (email) => {
    const regexForEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(regexForEmail)) {
        return true;
    } else {
        return false;
    }
}