Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

const DODIE_YELLOW = "#fef65b"
const DODIE_YELLOW_CHANCE = 0.1;
var shades = randomColor({hue: DODIE_YELLOW, count: 18})

shades.push(DODIE_YELLOW);

console.log(shades);

lastColour = DODIE_YELLOW;

$(document).ready(function () {
    console.log("ready");

    var app = new Vue({
        el: '#app',
        data: {
            bgc: {
                background: DODIE_YELLOW
            },
            amountCorrect: 0,
            total: 0,
            choiceMessage: null
        },
        methods: {
            isIt: function () {
                return this.bgc.background == DODIE_YELLOW;
            },
            changeColour: function () {
                var newColor = this.lastColour;
                do {
                    newColor = shades.randomElement();
                } while (newColor == this.lastColour)
                this.bgc.background = newColor;
            },
            choose: function (userThinksItIs) {
                console.log(this.bgc.background);
                const userCorrect = userThinksItIs == this.isIt();
                this.choiceMessage = userCorrect ? "Correct" : "Wrong";
                this.total++;
                this.amountCorrect += userCorrect ? 1 : 0;
                this.lastColour = this.bgc.background;
                this.changeColour();
            }
        }
    });
});