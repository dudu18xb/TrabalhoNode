module.exports = (Model) => (req, res, next) => {

    const query = {
        _id: req.params.id
    }

    Model.remove(query)
        .then((data) => res.json(data))
        .catch((err) => {
            return res.json(err)
        })

}