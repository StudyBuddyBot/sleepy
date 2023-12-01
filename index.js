let now = moment().format('HH:mm')
console.log(now)

let nowhour = moment().format('HH')
console.log(nowhour)

if (nowhour < 16){
alert('OK')
}

// let time = moment(sleepTimer).format('HH')
// console.log(time)

// let nowhour = moment().add('hour', 1.5).format('HH:mm')
// console.log(nowhour)



// console.log(moment().format("HH:mm"));
// console.log(moment().format("HH"));

let time = prompt()

if (time < '18:00' && time >= '06:00'){
	console.log('day')
}else if (time >= '18:00' && time < '23:00'){
	console.log('evening')
}else if (time > '23:00' || time >= '00:00'){
	console.log('night')
}






//------------------------------------------------------------------------------------



// let now = (moment().format('LTS'))
// console.log(now)
// console.log(moment().format('DD MMM YYYY') + ' года');

// let nowtime = moment().format('HH:mm')

// console.log(moment(nowtime, 'hour').isBefore(nowtime, 'hour')) 

// function getTimeFromMins(mins) {
//     let hours = Math.trunc(mins/60);
// 	let minutes = mins % 60;
// 	return hours + 'ч. ' + minutes + 'м.';
// };

// console.log(getTimeFromMins(60));
// console.log(getTimeFromMins(122));
// console.log(getTimeFromMins(228));
// console.log(getTimeFromMins(1337));

// let time = 2022

// console.log(moment('12').format('hh'))