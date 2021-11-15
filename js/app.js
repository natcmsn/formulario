//vamos a seleccionar elementos por su clase

document.querySelector('.banner-btn').addEventListener('click', () => { //el escuchante de eventos espera a que alguien haga click para desatar un trabajo o función.
	document.querySelector('.banner').style.display = 'none';  	//Buscar lo que aparece en rojo y le dice que le cambie el estilo y la propiedad de estilo display. Dice que no se vea para poder ver el div de detrás (sucede cuando alguien hace click).
	document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible;';
	document.querySelector('.container').style.background = '#cc683c';
});


document.querySelector('.x-btn').addEventListener('click', () => {  //Que x-button se prepare si alguien hace click para que haga lo que se enumera a continuación. Al clickar x nos manda al primer div.
	document.querySelector('.banner').style.display = 'flex';
	document.querySelector('.form-container').style.cssText = 'opacity: 0; visibility: hidden;';
	document.querySelector('.container').style.cssText =
		'background: linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)), url(../img/NYCViews.jpg) center no-repeat; background-size: cover';
});