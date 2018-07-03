module.exports.verifyBody = (requirements) => {

    return (req, res, next) => {
    	
        const missings = requirements.filter(requirement => !req.body[requirement]);

        return (missings.length > 0) ? res.status(400).send({success: false, msg: "Information manquante : " + missings}) : next();
    };
};