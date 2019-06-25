/*
forEachExample(function () {
    callback();
});


function forEachExample(callback) {
    var counter = 0;
    var value = ["Very Unfit", "Unfit", "Moderate", "Fit", "Very Fit"];
    value.forEach(function (valOneByOne) {

        console.log(valOneByOne + "----->" + counter);
        setTimeout(function () {
            console.log("Hello");
        }, 30000);
        counter++;
        if (counter === 1) {
            console.log("Time up--------------->" + counter)
            callback();
        }


    })

}
*/
