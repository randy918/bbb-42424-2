// !  RM Basic default functions 60819.1707   

function a(toAlert) {
    alert(toAlert);
}

function c(toConsole) {
    console.log(toConsole);
}

function d(delayRequest) { // unattainable at this point
    //  TweenMax.from('#counter', 7, {scale:0.5, delay:2});

    // TweenMax.to('counter', {scale:5, delay:delayRequest});
}

function l(toConsole) {
    console.log(toConsole);
}

function r(min, max) { // 2.0, accepts single value for 1-x
    if (max === undefined) {
        max = min;
        min = 1;
    }
    const randomNumber = min - 1 + Math.ceil(Math.random() * (max + 1 - min));
    return randomNumber;
}

function t() {
    const now = new Date();
    eventTimestamp = now.getTime();
    // c(eventTimestamp);
    return (eventTimestamp);
}



// !  Start JQuery programming HERE 62819.1801   



// !  End  NODE test  HERE 62819.1801   




// !  End  NODE test  HERE 62819.1801   

// !  End  JQuery programming HERE 62819.1801   











window.onload = function () {
    init()
};

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/189DalOgF6lkImv-TgaXlHySr0TIpXhXNWRPNkxk4DmE/pubhtml';

function init() {
    Tabletop.init({
        key: public_spreadsheet_url,
        callback: showInfo,
        simpleSheet: true
    })

    function showInfo(data, tabletop) {
        //   alert('Successfully processed!')
        var spreadsheetRow;
        var prefixAndSuffix;
        var prefix;
        var suffix;
        var webSite;
        var disableWeb;
        var disableIndesign;

        // for (var i = 0; i < data.length; i++) {  
        //     spreadsheetRow = data[i].title;
        // ! GAME LOOP
        for (var i = 0; i < data.length; i++) {
        // variables for each round
            prefix = data[i].prefix.toLowerCase();
            suffix = data[i].suffix;
            webSite = data[i].webpage;
            useIndesign = data[i].indesign;
            imgTall = data[i].tall;
            prefixSuffix = prefix + "-" + suffix + "-";
            currentCell = i + 1;
            disableWeb = (`#${currentCell}-Web`);
            disableIndesign = (`#${currentCell}-Indesign`);
        // write X-Title
            document.getElementById(`${currentCell}-Title`).innerHTML = data[i].title;
        // write X-Code
            document.getElementById(`${currentCell}-Code`).innerHTML = data[i].prefix + ` ` + data[i].suffix;
        // write X-Date
            document.getElementById(`${currentCell}-Date`).innerHTML = data[i].date;
            c(prefixSuffix); c(webSite); c(imgTall);
        // show X-Image and download on click
            document.getElementById(`${currentCell}-Image`).src = "./assets/" + prefix + "-" + suffix + "-image.jpg";
            document.getElementById(`${currentCell}-ImageDownload`).href = "./assets/" + prefix + "-" + suffix + "-email.pdf";
           
        if (imgTall == "n") {
                $(`#${currentCell}-Image`).css({"width": "280", "height": "auto"});
                    }  
        // email download
            document.getElementById(`${currentCell}-Pdf`).href = "./assets/" + prefix + "-" + suffix + "-email.pdf";
        //  printer download
            document.getElementById(`${currentCell}-Print`).href = "./assets/" + prefix + "-" + suffix + "-printer.pdf";
        //  indesign download
            document.getElementById(`${currentCell}-Indesign`).href = "./assets/" + prefix + "-" + suffix + "-indesign.zip";
        //  IF no design download
        if (useIndesign == "n") {
                $(disableIndesign).css("visibility", "hidden");
                document.getElementById(`${currentCell}-Pdf`).text = ".pdf guide";
                document.getElementById(`${currentCell}-Print`).text = "printer's .zip files";
                document.getElementById(`${currentCell}-Print`).href = "./assets/" + prefix + "-" + suffix + "-indesign.zip";

                    }  
        //  website link
            document.getElementById(`${currentCell}-Web`).href = webSite;
            disableWeb = (`#${currentCell}-Web`);
        //  if website doesn't exist, kill visibility'
            if (webSite == "n") {
                $(disableWeb).css("visibility", "hidden")
                    }  
                c(i);
        }
        console.log(data);
    }
    window.addEventListener('DOMContentLoaded', init)
}

// !    JQuery programming HERE 63019.1200    

// JQUERY COMMANDS 62819.1811 
// hide gets rid of entirely--visibility leaves the space
//$('h1').hide();  
// $(disableButtonNumber).css("visibility", "hidden")
// with id
// $('h1#heading1').hide();
// $('h1.heading2').hide();
// a sub tag, the span of a p, made css red
// $('p span').css('color', 'red');
//in a bullet list, first last even
//$('ul#list li:first').css('color', 'red');
//$('ul#list li:last').css('color', 'red');
//$('ul#list li:even').css('color', 'red');
// nth-child is various ones in list, 3n is every third, there are more 
//$('ul#list li:nth-child(3n)').css('color', 'red');
// this html  <input type="button" value = "Button 1"> goes with this hide---works with "input type"
// $(':button').hide());
//choose href attribute
// $('[href]'.css('color', 'red);
// an target attribute value itself
// $('[href="http://yahoo.com"]').css('color', 'red);
// * grabs everything
// $('*').hide;

// 62819.1154 JQUERY EVENTS
// if button one clicked, bring in ALERT dialog
// $('#btn1').click(function() {
// alert('Button Clicked!');
// can also be written like this
// $(('#btn1').on('click', function() {
// alert('Button Clicked!');
//  hide and show within an Event brackets
//  $('.para1').hide();
//  $('.para1').show();
//  $('.para1').toggle(); can use toggle--Example:
// $(('#btn1').dblclick(function() {
// $('.para1').toggle();
// }
//  $('btn').dblclick(function() {
// $('.para1').toggle();
// }); 
// hover is not a real event, just convenient
//  $('btn').hover(function() {
// $('.para1').toggle();
// });
// these two combined work
// $(('#btn1').on('mousedown',function() {
// $('.para1').toggle();
// $(('#btn1').on('mouseup',function() {
// $('.para1').toggle();
// this returns the current id
// $(('#btn1').click( =  = function(e) {
// alert(e.currentTarget.id);
// returns innerhtml
// alert(e.currentTarget.innerHTML);
// returns outerhtml
// alert(e.currentTarget.outerHTML);
// returns class name
// alert(e.currentTarget.className);
//  gets x y coordinates of object or page
// $('#btn1').on('mousemove', function (e) {
//     c('Coords: Y: ' + e.clientY + " X: " + e.clientX);
// });
// $(document).on('mousemove', function (e) {
//     c('Coords: Y: ' + e.clientY + " X: " + e.clientX);
// });
// this writes coordinates into screen
// $(document).on('mousemove', function (e) {
//     $('#coords').append('Coords: Y: ' + e.clientY + " X: " + e.clientX);
// });
//  this makes a nice continuous screen update of mouse movement x y
// $('#btn1').click(function (e) {

// });
// $(document).on('mousemove', function (e) {
//     $('#coords').html('Coords: Y: ' + e.clientY + " X: " + e.clientX);
// });
// this is about a form input blank (the focus), control appearance , "this" means the one being clicked on, "blur" means everything else, to click out of area and reset things visually
// $('input').focus(function() {
    // $(this).css('background', 'pink');
// });
// $('input').focus(function() {
    // $(blur).css('background', 'pink');
// });
// this collects the input being typed in
    // $('input').keyup(function(e) {
        // c(e.target.value);
// input a name on a form and save it
// $('#form').submit(function (e)) {
//     e.preventDefault();
//     var name = $('input#name').val();
//     c(name);
// }  array makes list exist from array data in html
//  arrays= ['Brad', 'Carol', 'Tammy', 'Tim'];
// $('#users').append('<li>'+val+'<li>');
// make array from html
// var newArr = $('ul#list li').toArray();

// !    JQuery programming NOTES HERE 62819.1801  

// $('button#btnFadeOut').click(function() {
// following uses 'fast' and 'slow'' () or milliseconds can follow with a function to do something when done
//     $('#box').fadeOut('slow');
//     $('#box').fadeOut('fast');
//     $('#box').fadeOut(3000);
//     $('#box').fadeOut;

// });
// $(document).ready(function () {
// $('button#btnFadeOut').click(function() {
//     $('#box').fadeOut(5000, function() {
//         $('#box').fadeIn();
//     });
// });

// });

// IMPORTANT to jquery once document is ready
// 
//  $(document).ready(function () {
    //  }); 
    // 
// single css property change
// $('p.para1').css('color', 'red');
// multiple css properties
// $('p.para1').css({color:'red',background: 'white'});
//  adding a class to an element
// $('p.para2').addClass('myClass');
//  removing a class to an element
// $('p.para2').removeClass('myClass');
// toggle class
// $('#btn1').click(function () {
//     $('p.para2').toggleClass('myClass');
//  });
//    replace text
 // $('#myDiv').text('Hello World');
//  replace html itself
    // $('#myDiv').html('<h3>Hello World</h3>');
//  get values and use elsewhere, this alert gets text of myDiv to display
// alert($('#myDiv').text());
// adds an entire new item to a list end
// $('ul').append('<li>Append List Item<li>');
// adds an entire new item to a list beginning
// $('ul').prepend('<li>Prepend List Item<li>');
//  puts paragraph 2 before paragraph 1
// $('.para1').appendTo('.para2');
//  puts paragraph 2 after paragraph 1
// $('.para1').prependTo('.para2');
// added complete before the list
// $('ul').before('<hr>Hello</h4>')
// added complete after the list
// $('ul').after('<hr>Hello</h4>')
// empty takes inner elements out entirely
// $('ul').empty();
// detach--like ampty
// $('ul').detach();
// to get window to open in new window
// $('a').attr('target', '_blank')
// remove attributes, new page is same page (?)
// $('a').removeAttr('target');
//  wrap will wrap specific elements inside other elements
// $('p').wrap('<h1>'); {
    // wrapAll wraps within just one h1, teh above they are still separate
    // $('p').wrapAll('<h1>'); {
// add to list








//  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/189DalOgF6lkImv-TgaXlHySr0TIpXhXNWRPNkxk4DmE/pubhtml';


//todo    i is taken for 'iteration' (for(i=0;i<10;i++))

//todo    My Vocabulary from Scratch
//todo    One letter: a c i l r t
//todo    One letter: a alert
//todo    One letter: c console.log [duplicate l]
//todo    One letter: i iteration uses
//todo    One letter: l console.log [duplicate c]
//todo    One letter: r random number: int x-y, or 1-x
//todo    One letter: t milliseconds since 1970
//todo    Two letter:
//todo    Three letter:

//todo Do not use KEYWORD
//todo a abstract arguments await 
//todo b boolean break byte
//todo c case catch char class const continue
//todo d debugger default delete do double 
//todo e else enum eval export extends
//todo f false final finally float for function
//todo g goto
//todo i if implements import in instanceof int interface
//todo l let long
//todo n  native new null
//todo p package private protected public
//todo r return
//todo s short static super switch synchronized
//todo t this throw throws transient true try typeof
//todo v var void volatile
//todo w while with
//todo y yield

//todo  immediate invoked function structure
// (function () {
// 
// })();


//! Greensock Material
//  TweenMax.to('.container', 7, {scale:0.5});
// TweenMax.from('.logo', 8, {opacity:0});

// TweenMax.from('.container', 7, {scale:0.5});
// TweenMax.from('.background', 4, {opacity:0, scale:0.8, delay:1});
// TweenMax.from('h1', 12, {opacity:0, scale:6, delay:1});

// var timeline = new TimelineMax();
// timeline.from('.logo', 1.5, {scale:6});
// timeline.from('h1', 1.5, {opacity:0, scale:2});

// timeline.from('.logo', 1.5, {scale:6, ease:Bounce.easeOut});
// timeline.from('h1', .7, {opacity:0, scale:2, ease: Back.easeOut.config(1)});
// timeline.from(graph, 2.5, { ease: Back.easeOut.config(1.7), y: -500 });


// *  Generic practice starts here


// !  Initial Global Variable




// !  Initial Functions




// !  Program Beginning















//* my Javascript vocabulary 52419.1424   *//


//TODO  Immediate Invoke Expressions


//TODO  DOM
//  document.body.style.backgroundColor = 'blue';
// document.body.style.color = "yellow";
// 
// const h1 = document.getElementById('title');
// 
// h1.style.color = 'red';
// 
//TODO  GetElementById
// 
// const h1 = document.getElementById('title');
// 
// document.getElementById('btn').style.backgroundColor = `blue`;
// 
//TODO  GetElementByTagName
// 
// document.getElementsByTagName('element');
// 
// const list = document.getElementsByTagName('li');
// 
// c(list.length);
// 
// list[2].style.color = "red";
// 
//TODO  For Each
// const betterList = [...list];
// c(betterList);
// betterList.forEach(item, => c(item));
// 
//TODO  GetElementsByClassName
// 
// document.getElementsByClassName('class');
// 
// const special = document.getElementsByClassName('special');
// 
//TODO  querySelector  /  querySelectorAll
//
//  const result = document.querySelector('#result');
// result.style.backgroundColor = 'blue';
// 
// const lastClassItem = document.querySelector('li:last-child');
// const list = document.querySelectorAll('.special');
// 
// c(list)>
// 
// list.forEach(function(item) {
//     c(item);
//     item.style.color = 'yellow';
// 
//TODO  Selecting a Dom Tree
//
// const result = document.querySelector('#result'); // request info
// const allChildren = result.childNodes; // get property that has info
//  // allChildren includes the single space character " " as children too!
// c(allChildren);
// 
// const children = result.children;  // children is best!
// c(children);
//  result.firstChild  // includes whitespace
//  result.lastChild   // includes whitespace
//  resulr.previousSibling  // includes whitespace
//  resulr.nextSibling  // includes whitespace
// 
// const firstListItem = document.querySelector(".first"); 
// brings in the html entered text 
// c(firstListItem);
//
//  const secondListItem = firstListItem.nextSibling;
// c(secondListItem); // watch out gives you space "whitepace" too
// 
// const secondListItem = firstListItem.nextSibling.nextSibling;
// SKIPS whitespace! double bext sibling
// c(secondListItem);
// 
//TODO  Select Text Content--select html text lines as a whole
// 
// const htmlLineItem = document.getElementById('special');
// const valueOfItem = htmlLineItem.nodeValue;
// c(htmlLineItem);
// 
// const htmlLineItem = document.getElementById('special');
// first child needs to be accessed.
// const valueOfItem = htmlLineItem.firstChild.nodeValue;
// 
// c(htmlLineItem);
// c(valueOfItem);
// c(htmlLineItem.childNodes);
//  
//TODO textContent
// const htmlLineItem = document.getElementById('special');
// const valueOfItem = htmlLineItem.firstChild.nodeValue;
// const valueOfItem = htmlLineItem.firstChild.textContent;
//textContent is key
// c(htmlLineItem);
// c(valueOfItem);
// c(htmlLineItem.childNodes);
// 
// const bestMethod = htmlLineItem.textContent
// c(bestMethod);
// 
//TODO  getAtributes   setAttributes
// 
// const generalClassInfo = document.querySelector('.last');
// 
// showClass = generalClassInfo.getAttribute('class');
// 
// c(showClass);
// c(generalClassInfo);
// 
// const generalItemInfo = generalClassInfo.nextSibling.nextSibling;
// 
// generalItemInfo.setAttribute('class','first');
// 
//TODO  className   and    classList ---classList is best
// const firstId = document.getElementById('first');
// const secondId = document.getElementById('second');
// const thirdId = document.querySelector('#third');
// // get classname
// const className = firstId.className;
// c(className);
// secondId.className = 'colors';  // replaces class
//TODO .add   .remove   .contains
// const classes = third.classList;
// c(classes);
// thirdId.classList.add('colors'); // adds class
// thirdId.classList.add('text'); // adds class
// let result = third.classList.contains('colors');
// 
//TODO createElement     createTextNode      element.appendChild
// 
//  addTagText('#result', 'div', '2nd in the div');  // function follows
//function  addTagText (addChildWhere, kindOfTag, text) {
// const divResultInfo= document.querySelector('addChildWhere');
// const newDiv = document.createElement(kindOfTag);
// const newText = document.createTextNode(text);
// newDiv.appendChild(newText);
// document.body.appendChild(newDiv);
// return 0;
// } 
// const divResultInfo= document.querySelector('#result');
// 
// c(divResultInfo.children);
// 
// create empty element;
// const newDiv = document.createElement('div');
// 
// create text node;
// const newText = document.createTextNode('body in the div');
// 
// add text node
// 
// newDiv.appendChild(newText);
// document.body.appendChild(newDiv);
// 
// 
// function  addTagTextBefore (addChildWhere, kindOfTag, text) {
//     const divResultInfo= document.querySelector('addChildWhere');
//     const newDiv = document.createElement(kindOfTag);
//     const newText = document.createTextNode(text);
//     newDiv.appendChild(newText);
//     document.body.insertBefore(newDiv, result);
//     return 0;
// } 
// 
// addTagTextBefore('#result', 'div', '3nd in the div');
// 
//TODO InsertBefore 
// 
// function  addTagTextBefore (addChildWhere, kindOfTag, text) {
//     const divResultInfo= document.querySelector('addChildWhere');
//     const newDiv = document.createElement(kindOfTag);
//     const newText = document.createTextNode(text);
//     newDiv.appendChild(newText);
//     document.body.insertBefore(newDiv, result);
//     return 0;
// } 
// 
// addTagTextBefore('#result', 'div', '3nd in the div');
// 
// //TODO Replace div
// 
// function  replaceTagText (addChildWhere, kindOfTag, text) {
//     const divResultInfo= document.querySelector('addChildWhere');
//     const newDiv = document.createElement(kindOfTag);
//     const newText = document.createTextNode(text);
//     newDiv.appendChild(newText);
//     document.body.replaceChild(newDiv, result);
//     return 0;
// } 
// 
// replaceTagText('#result', 'div', '3nd in the div');
// 
//TODO innerHTML and textContent add
// const list = document.getElementById('first');
//
// const div = document.getElementById('second');
// 
// const item = document.querySelector('.item');
// 
// c(div.textContent);
// c(list.innerHTML);
// 
// const ul = document.createElement('ul');
// ul.innerHTML = '<li class="item">list item</li><li>list item last</li>';
// document.body.appendChild(ul);
// 
//TODO  change css
//  item.style.backgroundColor = 'red';
// item.style.color = 'white';
// item.style.fontSize = '30vh';
// item.style.display = 'none';
// item.style.display = 'block';
// item.style.backgroundColor = 'red';
// 
// or use  class definitions from css as a HTMLOptGroupElement
// item.classList.add('special');
// item.classList.remove('special');
//
//TODO Event Listeners
//  function addClass() {
//    document.getElementById('item').classList.add('special');
// }
// btn.addEventListener('click',addClass);
// itemGather.addEventListener('mouseup',function(){
//     c('mouse-upped');
// })
// itemGather.addEventListener('mousedown',function(){
//     c('mouse-downed');
// })
// 
// headingGather.addEventListener('mouseover', function() {
// heading.classList.add('special2');
//         c('mouse-overed');
// 
// })
// headingGather.addEventListener('mouseout', function() {
// heading.classList.add('special1');
//         c('mouse-outed');
// })
// 
//TODO  Dom Key Events
// 
// const nameGather = document.getElementById('name');
// // 
// nameGather.addEventListener('keypress',function(){
//    c('key was pressed')
// })
// nameGather.addEventListener('keydown',function(){
// c('key was downed')
// })
// nameGather.addEventListener('keyup',function(){
// c(nameGather.value)
// })
// 
// //TODO  Dom Event Object, Event Type, Event Target, preventDefault
// 
// document.body.addEventListener('click',function(event){
// 
//     c(event.target) // what area is being clicked on
// 
// 
// })
// 
// document.getElementById('link').addEventListener('click', function(event) {
//     event.preventDefault(); // prevents anchor from clicking to top
//         c(event.target) // what area is being clicked on
// 
// })
//
//TODO     Event Bubbling  | Event Propagation
// 
// document.getElementById('container').addEventListener('click', function() {
//     c('you clicked on container');
//   
// })
// document.getElementById('list').addEventListener('click', function() {
//     c('you clicked on unordered');
// 
// })
// document.querySelectorAll('.list-item').forEach(function (item) {
//     item.addEventListener('click', function() {
//         c('you clicked on list-item');
//     })
// 
// })
// 
//TODO Propagation
// 
// document.getElementById('container').addEventListener('click', function() {
//     c('you clicked on container');

// }, true) // adding true, made it start at top level not bottom
// 
// need to get parent of virtual elements.
// btnGather.addEventListener('click',function() {
//     const h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.textContent = `I'm sitting inside for real`;
//     containerGather.appendChild(h1);
// 
// })
// 
// containerGather.addEventListener('click', function(event){
//  if(event.target.classList.contains('heading')){
//      event.target.addEventListener('click',function() {
//          c('list item clicked')
//      })
//  }
// })
//TODO  dom local storage and session storage
// in application part of chrome debugger
// key adn value is like an array
// 
// const name = localStorage.getItem('itm')
// localStorage.setItem('itm', 'jokhn');
// localStorage.setItem('address', '123 st');
// localStorage.setItem('job', 'developer');
// 
// c(name);
// localStorage.clear();
// 
//TODO  JSON.stringify   JSON.parse
// 
// localStorage.setItem('names',JSON.stringify(names));
// 
// const values = JSON.parse(localStorage.getItem('names'));
// c(values[0]);
// 
// let fruits;
// 
// if(localStorage.getItem('fruits') === null) {
//     fruits = [];
//     }
// else {
//     fruits = JSON.parse(localStorage.getItem('fruits'));
// }
// 
// fruits.push('apple');
// localStorage.setItem('fruits', JSON.stringify(fruits));
// c(fruits);
// 








//TODO  Forms of Objects
// 
//  Object Literals
//  const person = {};
// 
//  Construction Function
//  const secondPerson = new Object{};
// 
//  Add Property
//  thirdPerson.name = 'john';
//  c(thirdPerson);
// 
//  Access Property
//  c(fourthPerson.name);
// 
//  Modify Property
//  fifthPerson.name = 'bob';
// 
//  Access Property
//  c(sixthPerson['name']);
// 
//  Assign Video
//  let lastName = seventhPerson.lastName;
// 
//  Check If Property Exists
//  let check = 'lastName' in eighthPerson
// 
//  Check if undefined
//  if(ninthPerson.lastName === undefined) {
// 
//   Delete property
//   delete person.name;
// 
//   Create Object
//   const human = {
//     name:"bob",
//     nickname: "zippy",
//     height: 7,
// education: true;
//     sign() {
//       return `Peace sign'
//      }
//     }




//TODO  Reduce Array Iterator--down to one value
// 
// const totalOfArray = numbers.reduce(function(accumulator,currentValue) {
//     accumulator = accumulator + currentValue;
// return accumulator;
// },0);
// 
// const distinctKindsArray = fruits.reduce(function(total,fruit) {
//     return total;
// },0);
// c(distinctKindsArray);



//TODO  Map--changes items in array, not number of items
//TODO  Array Iterator
//   const arrayDoubler = numbers.map(function(numberNeedsDoubling) {
//     return numberNeedsDoubling * 2;
// })
//     c(arrayDoubler);
//  xxx.map(function (name))
//
// const firstAndLast = names.map(function(thisName) {
//     return `${thisName} anderson` 
// })
//     c(firstAndLast);

//TODO  Array Iteration
//  xxxx.forEach(function (name ))  
//  

//TODO  Filter--changes number of items in array
//  let numbers = [1,2,3,4,5,6,7,8,9,10];
// let even = numbers.filter(isEven)


//TODO  Time
//  setTimeout(function() {
//  alert("hellow world")    ;
// },3000); delay start 3 seconds

//TODO  Prompt

// function addTask(arr) {
//     let answer = prompt("what is your name");
//     arr.push(answer);


//TODO  Global Date
// Date();
//  xxxx.getMonth();
//  xxxx.getDay();
//  xxxx.getSeconds();
//  xxxx.setDate(22);
//  xxxx.setMonth(4);

//TODO  Math Object
//   Math.floor(3.665875);  3 rounds down
//   Math.ceil(3.665875);  4 rounds up
//   Math.sqrt(3.665875);  square root
//   Math.PI;  square root
//   Math.min;  returns min in a list
//   Math.max;  returns max in a list
//   Math.random()*4; random = 0-1 decimal

//TODO Conditionals
//TODO
//  if (x>y) {
//  if (x>y) {
//      misc
//  }
//      else {
//  }
//
//  if (x==y) {
//  if (x!=y) {
//  if (x===y) {  //  if string or num are equivalents
//  if (<=) {
//  if >= {
//
// if (x>y) {
// }
// else if (z>y) {
// }
// else {
// }
// || equals OR
//  && equal AND
//
//  Switch
//  switch (dice)  {
//     case 1:
//     log;
//     case 2:
//     log;
//     default: 
//     log;
// }
//
//  While Loop
//
// while (var>10) {
//     var--;
// }
//
//  Do While
//  
//  do {
//    activity;
//   var++;
// } while
// 
//  Ternary
//  condition ? (runs if true) : (runs if false);
// 
// For Loop
//
// for(i=0;i<10;i++) {
//      activity;
// }





//TODO Truthy / Falsie:  "", '', ``, 0, NaN, false, null, undefined

//TODO round off 2 decimals
//  num.toFixed(2)
// console.log("$" + tipMaker(45.45, 15).toFixed(2) + " is your total. Thank you!");

//TODO Alerts
// alert("abc");

//TODO Console
// console.log("abc");
// console.log(var,var,var);

//TODO Const
// const abc = "name";

//TODO Document
// document.write("abc");

//TODO Data Types
//TODO
//TODO Array
//
//c(example[1][1]);  refer to 2d arrays
// let fruits = ['apple','banana', 45];
// friends[0] = "Bill";
// let names2 = new Array (1, 40, 60);
//
//  xxxx.unshift('suzy'); inserts in front
//  xxxx.shift(); removes first one
//  xxxx.push('suzy'); inserts as last one
//  xxxx.pop(); removes last one
// xxxx.splice(2,3); delete 2nd position, 3 items
// xxxx.sort();
//  xxxx.length; item amount
//
//TODO  Array Loops Iteration
// for (i=0;i<friends.length;i++) {
//     c(`your friend is ${friends[i]}`);
// }
// 
// function addTask(arr, item) {
//     arr.push(item);
// }
//TODO  Array Loops Iteration
// addTask(taskList, "walk Shady");
// addTask(taskList, "make coffee");
//
// function addTask(arr) {
//     let answer = prompt("what is your name");
//     let correct = answer.toLowerCase().trim();
//     if(checkForDupe(arr,correct)) {
//           arr.push(correct);
//     } else {
//         alert('Already exists');

//     }
// }

// function checkForDupe(arr, item) {
//     let exists = false;
//     let index = arr.indexOf(item);// -1 means unique
//     if (index !=-1) {
//         exists = false;
//     }
//     else {
//         exists = true; 
//     }
//     return exists;
// }

// function removeSpecificTask(list) {
//     let answer = prompt('which to remove?');
//     let correct = answer.trim().toLowerCase();

//     let index = list.indexOf(correct):
// }
//
// function removeSpecificTask(list) {
//     let answer = prompt('which to remove?');
//     let correct = answer.trim().toLowerCase();

//     let index = list.indexOf(correct);

// if(!checkForDupe(list,correct)) {
//     let removeTask = list.splice(index,1);
//     c(removeTask);
//     alert(`you removed "${removeTask}`);
// }
// else {
//     c("no such value");
// }
// }
//

// function showTasks(list) {
//     let listValues = `Your list is `;

//     for(let i = 0;i<list.length;i++) {
//         listValues += `"List item ${i+1} : ${list[i]}"`
//     }
//     alert(listValues);
// }

//TODO String
// let text = "these words";
// Strings are objects.
//
//TODO  String Object
// xxx.charAt(5);
// xxx.charCodeAt(5);
// xxx.concat; // joins strings
// xxx.endsWith("miller"); boole
// xxx.fromCharCode; unicode—>characters
//  xxx.includes("john");
//  xxx.IndexOf("john")
//  xxx.join(',')
//  xxx.lastIndexOf("john")
// xxx.localeCompare();
// xxx.length;
// xxx.match("john");
// xxx.repeat(6,"john");
//  xxx.replace();
//  xxx.search(); returns position
// xxx.startsWith("john"); boole
//  xxx.slice();
//  xxx.split();
//  xxx.startsWith
//  xxx.substr();
//  xxx.substring();
// xxx.toLowerCase();
//  xxx.toString();
//  xxx.trim(); whitespace;
// xxx.toUpperCase();
//  xxx.valueOf(): returns primitive value
//
//TODO  Template Strings
//  `Really Inclusive Quote ${name} Marks!`

//TODO Number
// let value = 123;

//TODO Boolean
// let value1 = true;
// let value2 = false;

//TODO Null
// var = null; it is an object

//TODO Undefined
// let name;




//TODO Function
// let code = function code () {
// console.log("Hello World")
// }
//
// function hello () {
//  console.log("Hello")
// }
//
// hello();
//
//function add(num1,num2) {
//  let sum = num1 + num2;
//  return sum;
//}

//TODO Objects
// let person =  {
//    name :"John",
//    lastName : "Pepper",      
// }

// let person =  {
//     name: "John",
//     last: "Wilson",
//     age: 25,
//     fullName:function () {
//         console.log(person.name + " " + person.last)
//     }
// }

// person.fullName();

//TODO Let
// let abc = "name";
// let abc = "name" + "etc";
// let abc = number;
// let sum = number + number2;
// let sub = number - number2;
// let ans = number * number2;
// let ans = number / number2;
// let ans = number % number2;  //  remainder integer
// let add = number += 10;
// let sub = number -= 10;
// let ans = number *= 10;
// let ans = number /= 10;
// let add ++; // plus 1;
// let sub --; // minus 1;




//* This is sample Read from Google Sheet notation (unsuccessful 51919.1245 )*//

// function init() {
//  Tabletop.init( { 1kMXjHMrh6xYc2_BNcGL8YP0KINsJHUEo7xN6o0Gq2Xw: ‘https://docs.google.com/spreadsheets/d/0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE/pubhtml',
//  callback: function(data, tabletop) {
//  console.log(data)
//  },
//  simpleSheet: true } )
// }
// window.addEventListener(‘DOMContentLoaded’, init)
// comment

//* This is sample Greensock notation *//
// TweenMax.from('.logo', 8, {opacity:0});
// TweenMax.from('.', 8, {scale:0.5});
// TweenMax.from('p', 4, { scale: 0.5 });
// TweenMax.from('h1', 8, { opacity: 0, scale: 0.5 });

// TweenMax.from('.background', 4, {opacity:0, scale:0.8, delay:1});
// TweenMax.from('h1', 12, {opacity:0, scale:6, delay:1});

// var timeline = new TimelineMax();
// timeline.from('img', 1.5, {scale:6});
// timeline.from('h1', 1.5, {opacity:0, scale:2});

// timeline.from('.logo', 1.5, {scale:6, ease:Bounce.easeOut});
// timeline.from('h1', .7, {opacity:0, scale:2, ease: Back.easeOut.config(1)});
// timeline.from(graph, 2.5, { ease: Back.easeOut.config(1.7), y: -500 });

//* canvas demo js 51619.1812 *//

// const demoCanvas = document.getElementById('canvas-demo').getContext('2d');

// window.onload = function() {

//     demoCanvas.beginPath(); //begin draw sequence

//     var linearGrad = demoCanvas.createLinearGradient(5,5,100,5);
//     linearGrad.addColorStop(0, "blue");
//     linearGrad.addColorStop(.5, "green");
//     linearGrad.addColorStop(1, "red");
//     demoCanvas.strokeStyle=linearGrad;
//     demoCanvas.lineWidth=50;
//     demoCanvas.moveTo(5,5);
//     demoCanvas.lineTo(100,5);
//     demoCanvas.stroke();// change strokeStyle(l10) to fillStyle(l10)
//     and stroke() to fill(). Then, change lineTo(100,5) to rect(5,5,95,50).
//     Results should be almost same.

//     demoCanvas.closePath();  //close draw sequence

// }