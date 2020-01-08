const handleProfileGet = (req, res, db) => {
	const { id } = req.params;
	db.select('*').from('users')
		.where({
		id: id
		})
		.then(user => {
			console.log(user)
				res.json(user[0])
		})
		.catch(err => res.status(400).json('error getting user'))
}

module.exports = {
	handleProfileGet: handleProfileGet
}