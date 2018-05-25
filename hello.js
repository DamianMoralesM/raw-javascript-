

/* class SayHello is the one to be tested by the class TestSayHello_TestMethod_sayHey */
class SayHello {
	constructor(){
	return this;
	}

  sayHey(){
  return 'Hello World';
  }
}


var saludador = new SayHello();

//alert(saludador.sayHey());
//console.log(saludador.sayHey());

class TestSayHello_TestMethod_sayHey {
	constructor(){
	 this.expected='Hello World';
	}

  testSaludadorExpected(saludador){
  return this.expected == saludador.sayHey();
  }



  tryBreak(saludador,stringBracker){

  	return stringBracker == saludador.sayHey();

  }


  tryBreakTests(saludador,tests){
  		var result = [];
  
  	for (var i = 0; i < tests.length; i++) {
  		result.push( [tests[i] ==  saludador.sayHey() , tests[i] ] ); 
  	}

  	return result;

  }


}

var tests = ['TeamWare', 'Agiles', 1 , 'Hello World'];

var tester = new TestSayHello_TestMethod_sayHey();



tester.testSaludadorExpected(saludador); //testing expected behaviour

tester.tryBreak(saludador,'TeamWare'); //testing anormal behaviour 

tester.tryBreakTests(saludador,tests); //testing 

//console.log(tester.testSaludadorExpected(saludador));

//console.log(tester.tryBreak(saludador,'TeamWare'));

// console.log(tester.tryBreakTests(saludador,tests));