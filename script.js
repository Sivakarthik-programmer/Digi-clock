let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds =  document.querySelector('.seconds');


let clock = setInterval(()=>{
	let newDate = new Date();
	let hr = newDate.getHours();
	let mn = newDate.getMinutes();
	let sc = newDate.getSeconds();

	hours.textContent = hr;
	minutes.textContent = mn;
	seconds.textContent = sc; 
},1000);

const getRealNm =(Nm) =>{
	if(Nm > 9){
		return Nm;
	}else{
		return '0' + Nm;
	}
}