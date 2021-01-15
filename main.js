"use strict"


let box = document.querySelector('.box-two');
let body = document.querySelector('body');
let a = 0;


document.querySelector('.btn').addEventListener('click', () =>{
	a++;
	if(a == 1){
		setTimeout(()=>{		
		document.querySelector('.box').style.display = 'block';
		}, 500)
	}else{
		document.querySelector('.box').style.display = 'none';
		box.style.marginLeft =  '0px';
		a = 0;
	}

	
})


let open = document.querySelector('.open').addEventListener('click', () =>{
	box.style.marginLeft = '-100px';

});

let close = document.querySelector('.close').addEventListener('click', () =>{
	box.style.marginLeft =  '0px';

});