Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

const dodieYellow = "#fef65b"
var shades = randomColor({hue: dodieYellow, count: 18})

shades.push(dodieYellow);

console.log(shades);

lastColour = dodieYellow;

$(document).ready(function () {
    console.log("ready");

    var app = new Vue({
        el: '#app',
        data: {
            bgc: {
                background: dodieYellow
            },
            score: 0,
            choiceMessage: null
        },
        methods: {
            isIt: function () {
                return this.bgc.background == dodieYellow;
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
                this.score += userCorrect ? 1 : -1;
                this.lastColour = this.bgc.background;
                this.changeColour();
            }
        }
    });
});