import roles from '../../config/roles';

class User {
    constructor(isAuthenticated = false, role = null) {
        this._isAuthenticated = isAuthenticated;
        this._role = role;
    }

    logIn = role => {
        this._isAuthenticated = true;
        this._role = role;
    };

    logOut = () => {
        this._isAuthenticated = false;
        this._role = null;
    };

    get isAuthenticated() {
        return this._isAuthenticated;
    }

    get role() {
        return this._role;
    }

    set role(role) {
        this._role = role;
    }
}

const user = new User(true, roles.ADMIN);

export default user;
