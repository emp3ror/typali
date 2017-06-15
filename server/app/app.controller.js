var express = require("express");
var router = express.Router();


router.use('/', function (req, res, next) {

	/*if (req.path !== '/login' && !req.session.token) {
		return res.redirect('/login');
	}
*/

    
    next();
});

/*static defined*/
// res.sendfile('./public/index.html');

// router.use("/", express.static('./public/')); //public folder run by gulp

// router.use("/", express.static('./client/')); //client folder also taken as static 

// router.use("/img/", express.static('./client/assets/img/'));

// router.use('*', express.static('./public/index.html'))
/*router.get('*', function(req, res) {
    res.sendfile('./public/index.html');
    });
*/
module.exports = router;