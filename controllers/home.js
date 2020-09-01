const showHomePage =  (req, res) => {
    res.json({
        message: 'Hi! 😇',
        requests: {
            happy: '/emoji/happy',
            sleep: '/emoji/sleep',
            fury: '/emoji/fury',
            cold: '/emoji/cold'
        }
    })
}

module.exports = showHomePage