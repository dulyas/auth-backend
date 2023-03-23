import userService from "../service/user-service.js"

class UserController {
    async registration(req, res, next) {
        try {
            const {email, password} = req.body
            const userData = await userService.registration(email, password)
            return res.json(userData)
        } catch (e) {
            console.log(e)
        }
    }

    async login(req, res, next) {
        try {

        } catch {
            
        }
    }

    
    async logout(req, res, next) {
        try {

        } catch {
            
        }
    }

    async activate(req, res, next) {
        try {

        } catch {
            
        }
    }

    async refresh(req, res, next) {
        try {

        } catch {
            
        }
    }

    async getUsers(req, res, next) {
        try {
            res.json(['123'])
        } catch {
            
        }
    }
}


export default new UserController()