const AdminManager = require("../manager/Admin");

class AdminController {

    async addUser(req,res,next) {
        try{
            return AdminManager.addUser(req,res).then((data) => {
                
                res.render("add-user",{message:'Data insert'});
            });
        }catch(error){
            next(error);
        }
    }

    async getUsers(req,res,next) {
        try{
            return AdminManager.getUsers(req,res).then((data) => {
                
                res.render("admin-dashboard",{data:data});
            });
        }catch(error){
            next(error);
        }
    }

    async active(req,res,next) {
        try{
            return AdminManager.active(req.params.id).then((data) => {
                
                res.render("admin-dashboard",{data:data});
            });
        }catch(error){
            next(error);
        }
    }

    async inactive(req,res,next) {
        try{
            return AdminManager.inactive(req.params.id).then((data) => {
                
                res.render("admin-dashboard",{data:data});
            });
        }catch(error){
            next(error);
        }
    }


}

module.exports = new AdminController();