import decode from 'jwt-decode'

const localStorageKey = 'jaguar_games'

class Auth {
    getToken() {
        return localStorage.getItem(localStorageKey)
    }

    getLoggedInUser(){
        return this.getToken() && decode(this.getToken())?.data || false
    }
    
    loggedIn() {
        const token = this.getToken()
        if (token && !this.isTokenExpired(token)) {
            const decodedToken = decode(token)
            return decodedToken
        }
        return false
    }

    isTokenExpired(token) {
        const decoded = decode(token)
        if (decoded.exp < Date.now() / 1000){
            localStorage.removeItem(localStorageKey)
            return true
        }
        return false
    }

    login(token) {
        localStorage.setItem(localStorageKey, token)
        window.location.assign('/')
    }

    logout() {
        localStorage.removeItem(localStorageKey)
        window.location.assign('/login')
    }
}

export default new Auth()