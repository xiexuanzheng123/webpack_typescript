class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}

interface Persion {
    firstName: string;
    lastName: string;
}
function greeterClass(persion: Persion) {
    return 'Hello, ' + persion.firstName + ' ' + persion.lastName;
}
let userClass = new Student('Jane', 'M.', 'User');

document.body.innerHTML = greeterClass(userClass);