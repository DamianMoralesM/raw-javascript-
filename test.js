/*
The images placed in the column to be displayed have ids like imagen1, imagen2 ... imagen45
When one of that images is clicked the function #render() is fired to displayed the one which was clicked
on one of the three columns place1,place2 or place3 

The logic is repited again when onother image is clicked.

The image data is the same for de column and  place1,place2 and place3
but we have two diferents ids , id for the one in placed in place1,place2 and place3
and idProxy for the one in the column

*/


class Imagen {

	constructor(id,idProxy,src,alt,style,classes,counter){
		this.idProxy=idProxy; //id de la columna
		this.id=id;
		this.src= src;
		this.alt=alt;
		this.style=style;
		this.classes=classes;
		this.counter=0;
	}

	count(){
		this.counter++;
	}
}



TodoBtn = document.getElementById("test");
var imagesList = [];

TodoBtn.addEventListener('click', function(){
	var itemText =  document.getElementById("todoText").value;
	var item = document.createElement("li");
	item.innerText = itemText;
	item.innerHTML = item.innerHTML + '<button '  +'" onclick="borrar(this)" >Delete</button>';
	var lista = document.getElementById("todoList");
	lista.appendChild(item);

});

 function borrar(boton){

 	var item = boton.parentElement;
 	var lista = document.getElementById("todoList");
	lista.removeChild(item);
	
}

function createImage(objetoImagen){

  var image = document.createElement('img');
    image.id=objetoImagen.id;
    image.src=objetoImagen.src;
    image.alt=objetoImagen.alt;
    image.setAttribute("onclick","count;");

    return image;


 }
		
/*	
fetch('data.json')

.then((response) => response.json()) // Transform the data into json
  .then(function(data) {
    // Create and append the li's to the ul
    console.log(data);

    })

  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
	
  
*/
/*  the image has to have as id pic1, pic2 and its counter counter1,counter2 . Follwing this everything will work*/
  function count(imagen){
  		var nroImg = imagen.id.charAt(3);
  		var counter = document.getElementById("counter"+nroImg);
  		var text = parseFloat(counter.innerText) + 1;
  		counter.innerText = text;

  }



  function render(imagen){
     	
  	for (var i = 0 ; i <= imagesList.length - 1; i++) {
  		
  		 if (imagesList[i].idProxy == imagen.id){
  			item = createImage(imagesList[i]);

  			 document.getElementById('place2').appendChild(item, document.getElementById('place2').firstChild); 
  		}
  		
  	} 
  }

  function inicializateElements(){
  		img1 = new Imagen ("pic1","image1","imag_1.jpg","imagen","  width: 320px; height: 120px","",0);
  		img2 = new Imagen ("pic2","image2","imag_2.jpg","imagen","  width: 320px; height: 120px","",0);
  		img3 = new Imagen ("pic3","image3","imag_3.jpg","imagen","  width: 320px; height: 120px","",0);
  		imagesList.push(img1);
  		imagesList.push(img2);
	   	imagesList.push(img3);
 }



 
 
  inicializateElements();
 