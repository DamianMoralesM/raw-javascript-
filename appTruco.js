
class Jugador {
constructor(nick, mano) {
this.nick = nick;
this.Mano = mano;

}
getMano(){
	return this.Mano ;
}
}
 

class Mano {
constructor( cards){
	this.cartas =  cards;

}

 getCartas(){
 	return this.cartas;
 }


}

/*

class Juez(){
constructor(){

}

repartirCartas(){

}

anotarPuntos( Jugador,puntos){

}



}

class Reglas(){
	constructor(){

	}

	envido(){

	}





}
*/

hand1 = new Mano([['1','Basto'],['1','Oro'],['3','Espada']]);
player1 = new Jugador('damian', hand1);

console.log((player1.getMano().getCartas())[0]);



