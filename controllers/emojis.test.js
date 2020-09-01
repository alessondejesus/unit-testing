const emojis = require('./emojis')

test('checking list of emojis', () => {
    expect(emojis.emojisList).not.toBeNull()
    expect(emojis.emojisList).not.toBeUndefined()
    expect(emojis.emojisList).not.toBeFalsy()
})