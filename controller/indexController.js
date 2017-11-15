exports.isLoggedIn = function(req, res) {
        // console.log(req.session);
        if(req.session.loginUser){

            if(req.session.loginUser.role == 0){
                 res.render('profile.ejs', {
                    user : req.user
                });
            }else if(req.session.loginUser.role == 1){
                res.render('profile_2.ejs', {
                    user : req.user
                });
            }

        }else{
            res.render('404');
        }

};
