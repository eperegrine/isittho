Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

const dodieYellow = "#fef65b"
var shades = randomColor({hue: dodieYellow, count: 18})

shades.push(dodieYellow);

console.log(shades);

$(document).ready(function () {
    console.log("ready");

    var app = new Vue({
        el: '#app',
        data: {
            bgc: {
                background: dodieYellow
            },
            score: 0
        },
        methods: {
            isIt: function () {
                return this.bgc.background == dodieYellow;
            },
            changeColour: function () {
                this.bgc.background = shades.randomElement();
            },
            choose: function (userThinksItIs) {
                const userCorrect = userThinksItIs == this.isIt();
                this.score += userCorrect ? 1 : -1;
                this.changeColour();
            }
        }
    });
});