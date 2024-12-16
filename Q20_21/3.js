function validateEmail(email){
    let at = /@/;
    let dot = /\./;
    result = at.test(email) && dot.test(email);
    console.log(result)
}

validateEmail("example@example.com");
validateEmail("example.com");