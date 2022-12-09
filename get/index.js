module.exports = {
    route: "/",
    exec: async(req, res) => {
        res.status(200).send();
    },
}