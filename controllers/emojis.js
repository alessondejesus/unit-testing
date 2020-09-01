const emojisList = {
    happy: '😊',
    sleep: '😴',
    fury: '🤬',
    cold: '🥶'
}
const searchEmoji = (emoji) => emojis[emoji] ? emojis[emoji] : 'emoji not found 🤪'

showHomePageEmoji = (req, res) => {
    res.json({
        message: 'search 4 u emoji 🤭'
    })
}
showEmoji = (req, res) => {
    const emoji = req.params.emoji 
    const searchedEmoji = (searchEmoji(emoji))
    res.json({
        message: `Hi! ${searchedEmoji}`
    })
}

module.exports = {
    showHomePageEmoji,
    showEmoji,
    searchEmoji,
    emojisList
}