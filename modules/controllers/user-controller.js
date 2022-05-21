const UsersManager = require("../manager/user-manager");

class UserController {


    async getUsers(req,res,next) {
        try{
            return UsersManager.getUsers().then((data) => {
                // res.status(200).json({
                //     status:200,
                //     data,
                // });
                res.render("user-dashboard",{data:data});
            })
           
        }catch(error){
            next(error);
        }
    }

    

    async userLogin(req,res,next) {
        try{
            return UsersManager.userLogin(req,res).then((data) => {
                
                res.redirect("/api/v1/users/getUsers");
                
            });
        }catch(error){
            next(error);
        }
    }

}

module.exports = new UserController();