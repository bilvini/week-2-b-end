const bcrypt = require('bcrypt');

class User {
    constructor(name, email, password) {
        this.id = Date.now().toString();
        this.name = name;
        this.email = email;
        this.password = this.hashPassword(password);
        this.borrowedBooks = [];
    }

    async hashPassword(password) {
        return await bcrypt.hash(password, 10);
    }

    async matchPassword(enteredPassword) {
        return await bcrypt.compare(enteredPassword, this.password);
    }
}

module.exports = User;