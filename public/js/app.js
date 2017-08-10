const dodieYellow = "#fef65b"

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
            choose: function (userThinksItIs) {
                const userCorrect = userThinksItIs == this.isIt();
                console.log(userCorrect);
            }
        }
    });
});