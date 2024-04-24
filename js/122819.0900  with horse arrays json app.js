window.onload = function() {
	init();
};

var public_spreadsheet_url =
	'https://docs.google.com/spreadsheets/d/189DalOgF6lkImv-TgaXlHySr0TIpXhXNWRPNkxk4DmE/pubhtml';

function init() {
	Tabletop.init({
		key: public_spreadsheet_url,
		callback: showInfo,
		simpleSheet: true
	});

	function showInfo(data, tabletop) {
		getTime();
		TweenMax.to('#timeStamp', 3, {
			rotationX: 360
		});

		//todo  122319.1717 		The New Modern Javascript Bootcamp Course (2020) c96
		//todo  122319.1718 		Array Callback methods

		const myArray = [ 5, 6, 45, 456, 3, 67, 45, 444, 0, 33 ];

		//todo  122319.1804 		using forEach   works!
		myArray.forEach(function(myArrayValue, idx) {
			cr(myArrayValue);
			cr(idx);
		});

		// function minusTwo(n) {

		// 	return n - 2

		// }

		// myArray.forEach(minusTwo); a function is anonymous when its just there for quick typing. a spontaneous function that doesnt get saved as a name. Unnamed, typed same line,with curly brackets, to get done.

		//todo  122219.1340 		create CLASS with CONSTRUCTOR (old version before Get and Set)
		// class Horse {

		// 	}
		// 	whereIs() {

		// 		c(this.name + ' is at stable ' + this.stable);
		// 		return this.name;
		// 	}
		// }

		//todo  122219.1409 		adding GET and SET to class

		class Horse {
			constructor(name, stable) {
				this._name = name;
				this._stable = stable;
			}

			set name(newName) {
				this._name = newName;
			}

			get name() {
				return this._name;
			}

			set stable(newStable) {
				this._stable = newStable;
			}

			get stable() {
				return this._stable;
			}

			//todo  122219.1531 		one way to do a Class Method
			horseStatement() {
				let statement = `${this._name} is in stable ${this._stable}.`;
				return statement;
			}

			//todo  122219.1532 		a Second way to do a class method as a GET !

			get horseStatementTwo() {
				let statement = `${this._name} is in stable ${this._stable}.`;
				return statement;
			}
		}

		let horseOne = new Horse('Mobley', 6);
		let horseTwo = new Horse('Charley', 4);
		let horseThree = new Horse('Kansas', 10);
		let horseFour = new Horse('Jennie', 12);

		cr(horseOne.horseStatementTwo);

		let horses = new Array();

		horses.push(horseOne);
		horses.push(horseTwo);
		horses.push(horseThree);
		horses.push(horseFour);

		let newHorseJson = '{"name" : "Valerie", "stable" : 7}';

		let newHorse = new Horse();
		newHorse = JSON.parse(newHorseJson);
		cr(newHorse.name);

		horses.push(newHorse);

		cr(horses.length);
		// demonstrates forEach, works!
		horses.forEach(function(horse) {
			cr(horse.name);
		});

		// demonstration for map--WORKS!  122419.1828 ---map DOES THE 'PUSH' FOR US''

		horses.forEach(function(horse) {
			cr(horse.name);
		});

		const caps = horses.map(function(t) {
			cr(t.name.toUpperCase());
			return t.name.toUpperCase();
		});

		cy(caps[2]);

		//  testing WEIRD PARTS Udemy class #9

		let avenue = 'Hello Char';
		cr(avenue);

		var shum = 'hola';

		(function(bash) {
			var shum = 'bbbb';
			console.log('hello ' + shum);
		})('billy');

		function test2() {
			var shum = 'cccc';
			console.log('hello ' + shum);
		}

		test2();
		console.log(shum);

		function greetings(whatToSay) {
			return function(name) {
				console.log(whatToSay + ' ' + name);
			};
		}

		greetings('HI ')('bill');
		//todo  122219.1341 		use CLASS METHOD from outside of class

		//todo  122219.1342 		Save OBJECTS to ARRAY

		//todo  122219.1353 		from JSON to ARRAY ITEM

		for (var i = 0; i < 5; i++) {
			// //!  120119.1040 		BEGINNING OF CELL
			// cr(data[i].title);
			// //!  120119.1040 		END OF CELL
			// };
			// 		//!  120119.0635 		END OF LOOP
		}
	}
}
window.addEventListener('DOMChorseontentLoaded', init);
// This block goes with Drum Kit 01---has error of not turning things off
// window.addEventListener('keydown',  function(event) {

// 	const audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);
// 	const key = document.querySelector(`.key[data-key = "${event.keyCode}"]`);
// 	if (!audio) return;
// 	audio.currentTime = 0;
// 	audio.play();
// 	key.classList.add('playing');
// 	console.log(key);

// });

// function removeTransition(event) {

// 	if(event.propertyName !== 'transform') return;
// 	console.log(this);
// 	this.classlist.remove('playing')

// }

// const keys = document.querySelectorAll('.key');

// keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// this block is for 30 days 02
