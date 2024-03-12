// alert("hey");
function displayTime(){

	let dt = new Date();
	let hr = (dt.getHours())%12
	let mn = dt.getMinutes();
	let sc = dt.getSeconds();
	let yr = dt.getFullYear();
	let mm = dt.getMonth()+1;
	let dd = dt.getDate();
	let tm = document.getElementById("tm");
	let dy = document.getElementById("dy");


	dt=checkLen(dt);
	mn=checkLen(mn);
	sc=checkLen(sc);
	mm=checkLen(mm);
	dd=checkLen(dd);
	
	tm.innerHTML = (hr+":"+mn+":"+sc);
	dy.innerHTML = (yr+"-"+mm+"-"+dd);
	}
	function checkLen(num){
		if(num<10){
			num="0"+num;
		}
		return num;
	}

setInterval(displayTime, 1000)

// function displayTime(){

// 	let dt = new Date();
// 	let hr = (dt.getHours())%12
// 	let mn = dt.getMinutes();
// 	let sc = dt.getSeconds();

// 	let yr = dt.getFullYear();
// 	let mm = dt.getMonth()+1;
// 	let dd = dt.getDate();
// 	let tm = document.getElementById("tm");
// 	let dy = document.getElementById("dy");
	

// 	dt=checkLen(dt);
// 	mn=checkLen(mn);
// 	sc=checkLen(sc);
// 	mm=checkLen(mm);
// 	dd=checkLen(dd);

	
// 	tm.innerHTML = (hr+":"+mn+":"+sc);
// 	dy.innerHTML = (yr+"-"+mm+"-"+dd);

// }
// function checkLen(num){
// 	if(num<10){
// 		num="0"+num;
// 	}
// 	return num;
// }

// setInterval(displayTime, 1000)
