function average(scores){
    var total = 0;
    scores.forEach(function(score){
        total += score;
    })
    var avg = total/scores.length
    return Math.round(avg);
}

var scores = [90, 98, 89, 100, 100, 73, 94];
console.log(average (scores));

var scores2 = [98,38, 48, 78, 99, 100, 63, 94, 28];
console.log(average (scores2));