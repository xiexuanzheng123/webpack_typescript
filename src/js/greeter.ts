function greeter(persion: string) {
    return 'Hello, ' + persion;
}
let user = 'Jane User';
document.body.innerHTML = greeter(user);