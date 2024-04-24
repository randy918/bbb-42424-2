window.onload = function () {
  init();
};
const c = console.log.bind(console);
console.log("hello world");
c("hello2");

function init() {
  $(".headline").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
  });

  getTime();
  TweenMax.to("#timeStamp", 3, {
    rotationX: 360,
  });

  //todo  10920.0020 		ken burns effect attempt

  (function () {
    // we set the 'fx' class on the first image when the page loads
    document
      .getElementById("slideshow")
      .getElementsByTagName("img")[0].className = "fx";
    // this calls the kenBurns function every 4 seconds
    // you can increase or decrease this value to get different effects
    window.setInterval(kenBurns, 6000);

    // the third variable is to keep track of where we are in the loop
    // if it is set to 1 (instead of 0) it is because the first image is styled when the page loads
    var images = document
        .getElementById("slideshow")
        .getElementsByTagName("img"),
      numberOfImages = images.length,
      i = 1;

    function kenBurns() {
      if (i == numberOfImages) {
        console.log(
          "🚀 ~ file: app.js ~ line 37 ~ kenBurns ~ numberOfImages",
          numberOfImages
        );
        i = 0;
      }
      images[i].className = "fx";

      // we can't remove the class from the previous element or we'd get a bouncing effect so we clean up the one before last
      // (there must be a smarter way to do this though)
      if (i === 0) {
        images[numberOfImages - 2].className = "";
      }
      if (i === 1) {
        images[numberOfImages - 1].className = "";
      }
      if (i > 1) {
        images[i - 2].className = "";
      }
      i++;
    }
  })();

  //todo  122319.1717 		The New Modern Javascript Bootcamp Course (2020) c96
  //todo  122319.1718 		Array Callback methods

  const myArray = [5, 6, 45, 456, 3, 67, 45, 444, 0, 33];

  //todo  122319.1804 		using forEach   works!
  myArray.forEach(function (myArrayValue, idx) {
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

  //todo  11020.0742

  class LogoAnimation {}

  let s = Snap();
  cy(s);

  (function ($) {
    "use strict";

    /*==================================================================
	[ Validate ]*/
    // var name = $('.validate-input input[name="name"]');
    // var email = $('.validate-input input[name="email"]');
    // var subject = $('.validate-input input[name="subject"]');
    // var message = $('.validate-input textarea[name="message"]');

    $(".validate-form").on("submit", function () {
      var check = true;

      if ($(name).val().trim() == "") {
        showValidate(name);
        check = false;
      }

      if ($(subject).val().trim() == "") {
        showValidate(subject);
        check = false;
      }

      if (
        $(email)
          .val()
          .trim()
          .match(
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
          ) == null
      ) {
        showValidate(email);
        check = false;
      }

      if ($(message).val().trim() == "") {
        showValidate(message);
        check = false;
      }

      return check;
    });

    $(".validate-form .input1").each(function () {
      $(this).focus(function () {
        hideValidate(this);
      });
    });

    function showValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).addClass("alert-validate");
    }

    function hideValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).removeClass("alert-validate");
    }
  })(jQuery);

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

  let horseOne = new Horse("Mobley", 6);
  let horseTwo = new Horse("Charley", 4);
  let horseThree = new Horse("Kansas", 10);
  let horseFour = new Horse("Jennie", 12);

  let horses = new Array();

  horses.push(horseOne);
  horses.push(horseTwo);
  horses.push(horseThree);
  horses.push(horseFour);

  let newHorseJson = '{"name" : "Valerie", "stable" : 7}';

  let newHorse = new Horse();
  newHorse = JSON.parse(newHorseJson);

  horses.push(newHorse);

  // demonstrates forEach, works!
  horses.forEach(function (horse) {});

  // demonstration for map--WORKS!  122419.1828 ---map DOES THE 'PUSH' FOR US''

  horses.forEach(function (horse) {});

  const caps = horses.map(function (t) {
    cr(t.name.toUpperCase());
    return t.name.toUpperCase();
  });

  //  testing WEIRD PARTS Udemy class #9

  let avenue = "Hello Char";
  cr(avenue);

  var shum = "hola";

  (function (bash) {
    var shum = "bbbb";
    console.log("hello " + shum);
  })("billy");

  function test2() {
    var shum = "cccc";
    console.log("hello " + shum);
  }

  test2();

  function greetings(whatToSay) {
    return function (name) {
      console.log(whatToSay + " " + name);
    };
  }

  greetings("HI ")("bill");
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
window.addEventListener("DOMChorseontentLoaded", init);
