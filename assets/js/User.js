class User {
    constructor() {
        this.authUser = localStorage.getItem("loginUser");
    }

    getAuthUser() {
        return this.authUser;
    }
}

authUser=new User();