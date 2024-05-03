const adminPassword = (req, res) => {
    try {

        const password = 'admin@1234'
        res.status(200).json({ data: password });

    } catch (err) {
        console.log('Admin Error', err)
    }

}
module.exports = { adminPassword }