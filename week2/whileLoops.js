//All numbers btw -10 and 19
var a = -10;
while(a < 20){
	console.log(a);
	a++;
}


//All even btw 10 and 40
var a = 10;
while(a <= 40){
	console.log(a);
	a+=2;
}
// while(a <= 40){
// 	if(a%2 === 0){
// 		console.log(a);
// 	}
// 	a+=1;
// }


//All odd btw 300 and 333
var a = 300;
while(a <= 333){
	if(a%2 !== 0){
		console.log(a);
	}
	a+=1;
}



//All numbers divisible by 5 and 3 btw 5 and 50
var a = 5;
while(a <= 350){
	if(a%5 === 0 && a%3 ===0){
		console.log(a);
	}
	a+=1;
}
