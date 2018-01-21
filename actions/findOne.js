module.exports = (Model) => (req, res, next, populate = []) => {

    const query = {
        _id: req.params.id
    }

    let find = Model.findOne(query);

    for (let i = 0; i < populate.length; i++) {
        find.populate(populate[i]);
    }

    find.then((data) => res.json(data))
        .catch((err) => {
            return next(err)
        })

}