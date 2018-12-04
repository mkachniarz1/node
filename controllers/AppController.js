exports.store = (req, res) => {
    res.json({
        'name' : req.body.name,
        'last name' : req.body.lastName,
        'email' : req.body.email
    });
};