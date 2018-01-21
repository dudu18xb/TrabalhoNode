module.exports = (Model) => (req, res, next, query = {}) => {

  for (const prop in req.query) {
    if (req.query[prop].match(/^\d+$/)) {
      query[prop] = req.query[prop]
    } else {
      query[prop] = {
        $regex: req.query[prop],
        $options: 'i'
      }
    }
  }

  console.log(query);

  Model.find(query)
    .then((data) => res.json(data))
    .catch((err) => {
      return res.json(err)
    })

}