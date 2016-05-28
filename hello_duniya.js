alert("namaste...duniya");
if (5<2){
var name = "Rama Shankar"
alert(name);
} else
{alert("mental hai kya?")}
//comments in JS
/*
	multi line comment in JS
*/
var x = 3
while(x < 5)
{
  alert (x);
  x = x+1
  //console.log(x);
}
for (var i=1;i<10;i++)
{
	console.log("Hello" + i);
}
// simple declaration of an array
var arr = ['Sunjeet','Ruby','Etaash','Ajooni']
//loop through and log all the elements of the array
for (var i=0;i<arr.length;i++)
{
	console.log("Hello , I am " + arr[i]);
}

var arr1 =[];
console.log(arr1);
//add element
arr1.push("sting 1");
arr1.push("string 2");
arr1.push("r245255");
console.log(arr1);
// removes the last element
arr1.pop();
console.log(arr1);
// second position
console.log(arr1[1]);

function sayNamaste()
{
	console.log("Hello 1");
	console.log(232424);	
}

// calling function by its name
sayNamaste();

//object and it's propoerties and method
var user = {

    first_name: 'Sunjeet',

    last_name: 'mountain main',

    sayBye: function() {

       console.log("Bye from an object's method")

    },

	sayHello: function() {

        console.log("Namanste from an object's method")

    }
   
}

var user_new = {

    name: "Guest",

    askName: function() {

        this.name = prompt("Your name?")

    },

    sayHi: function() {

        alert('Hi, my name is '+this.name)

    }

}


//invoke the object andit's propoerties and methods
console.log(user.first_name);
console.log(user.last_name);
user.sayHello();
//user.sayBye();

//you can add properties outside the declaration of an object
user.email = "kukkar_murga@kfc.comdhdjdj";
//you can add methods outside the declaratio of an object

// now this propoery should have been added in the object, log it and see
console.log(user);

// push a change for github  to sync




 






 


