export const checkValidData = (email,password) =>{
    const isEmailValid = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email);
    const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

    if(!isEmailValid && !isPasswordValid) return "Email and Password both are Invalid";
    if(!isEmailValid) return "Email id is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;
};