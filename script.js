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

	// if(hr<10)
	// {
	// 	hr="0"+hr;
	// }
	// if(mn<10)
	// {
	// 	mn="0"+mn;
	// }
	// if(sc<10)
	// {
	// 	sc="0"+sc;
	// }
	
	
	// if(length(hr) || length(mn) || length(sc) < 2){
	// if(hr.length || mn.length || sc.length < 2){

	// tm.innerHTML = ("0"+hr+":0"+mn+":0"+sc+"\r"+yr+"-"+mm+"-"+dd);
	// }else{
	// 	tm.innerHTML = (hr+":"+mn+":"+sc);
	// }
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