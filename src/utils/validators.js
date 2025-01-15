const validateEmail = (email) =>{
    var mailformat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    return mailformat.test(String(email).toLowerCase());
}

const validateSubject = (subject) => subject.length >8;

export {
    validateEmail,
    validateSubject,
}