module.exports = (Model) => (req, res, next) => {

    const query = {
        _id: req.params.id
    }

    const mod = req.body

    Model.update(query, mod)
        .then((data) => res.json(data))
        .catch((err) => {
            return res.json(err)
        })

}