export class User {
    userName: string;
    email: string;
    password: string;
    role: string;

    constructor(userName: string, email: string,
                password: string,role: string) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}