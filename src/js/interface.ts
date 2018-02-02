interface Persion {
    firstName: string,
    lastName: string
}
function greeter(persion: Persion) {
    return 'Hello, ' + persion.firstName + ' ' + persion.lastName;
}
let user = {
    firstName: 'Jane',
    lastName: 'User'
};

document.body.innerHTML = greeter(user);