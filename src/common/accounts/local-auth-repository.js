const AUTH_VALUE = 'auth'

export default class LocalAuthRepository {
    isAuthenticated() {
        return this.get() && this.get().token
    }

    get() {
        let auth = localStorage.getItem(AUTH_VALUE)

        if(!auth) {
            return {}
        } 

        return JSON.parse(auth);
    }
 
    store(auth) {
        if(!auth) {
            return
        }

        localStorage.setItem(AUTH_VALUE, JSON.stringify(auth));
    }

    clear() {
        localStorage.removeItem(AUTH_VALUE)
    }
}