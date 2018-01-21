module.exports = (Model) => (req, res, next) => {

  const body = req.body

  Model.create(body)
    .then((data) => res.json(data))
    .catch((err) => {
      return res.json(err)
    })

}