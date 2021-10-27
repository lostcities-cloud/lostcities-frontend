
const unknown = {
    code: "#ed0eff",
    emoji: "❓"
}

const colors = {
    "BLUE": {
        code: "#2d6ca6",
        mapCode: "#88abdc",
        class: "card-color-blue",
        emoji: "🌊"
    },
    "RED": {
        code: "#e44218",
        mapCode: "#e16c6c",
        class: "card-color-red",
        emoji: "🏜️"
    },
    "YELLOW": {
        code: "#ffca1f",
        mapCode: "#faedbf",
        class: "card-color-yellow",
        emoji: "🌾"
    },
    "WHITE": {
        code: "#a2b492",
        mapCode: "#cccccc",
        class: "card-color-white",
        emoji: "❄️"
    },
    "GREEN": {
        code: "#50ae22",
        mapCode: "#d4e6c5",
        class: "card-color-green",
        emoji: "🌲"
    },
}

const MIN = -2;
const MAX = 2;
const RANGE = MAX - MIN;

export default class CardUtils {

    static randomCardRotation() {
        return (Math.random() * RANGE) + MIN;
    }

    static toEmojiCode(emoji) {
        return `&#x${emoji.codePointAt(0).toString(16)};`
    }

    static isValidColor(colorName) {
        return Object.prototype.hasOwnProperty.call(colors, colorName)
    }

    static getColorCode(colorName) {
        if(!CardUtils.isValidColor(colorName)) {
            return unknown.code
        }

        return colors[colorName].code
    }

    static getMapCode(colorName) {
        if(!CardUtils.isValidColor(colorName)) {
            return unknown.code
        }

        return colors[colorName].mapCode
    }

    static getColorEmoji(colorName) {
        if(!CardUtils.isValidColor(colorName)) {
            return unknown.emoji
        }

        return CardUtils.toEmojiCode(colors[colorName].emoji)
    }
}