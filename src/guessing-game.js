class GuessingGame {
    constructor() {
        this.bottom;
        this.top;
    }

    setRange(min, max) {
        this.bottom = min;
        this.top = max
    }

    guess() {
        return Math.round((this.top + this.bottom) / 2)
    }

    lower() {
        const newTop = Math.round((this.top + this.bottom) / 2)
        this.top = newTop
    }

    greater() {
        const newBottom = Math.round((this.top + this.bottom) / 2)
        this.bottom = newBottom
    }
}
module.exports = GuessingGame;
