/*

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content


    pic - image src
    alt - the alt tag for the image
    desc - a description of the coffee
    day - the day of the week for the coffee
    color - color associated with coffee
    name - the name of the coffee

*/

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = {};

switch(myDay){

 	case 0:
    	today = "Sunday";
        coffee = {
            name:"Caramel Latte",
            pic:"caramel-latte.jpg",
            alt:"A pic of a yummy caramel latte.",
            color:"blue",
            day:"Sunday",
            desc:`I like me some Caramel Latte!`
        };
 	break;

    case 1:
    	today = "Monday";
        coffee = {
            name:"Cold Brew",
            pic:"cold-brew.jpg",
            alt:"A pic of a yummy cold brew.",
            color:"yellow",
            day:"Monday",
            desc:`I like me some Cold Brew!`
        };
 	break;
 	
    case 2:
   		today = "Tuesday";
        coffee = {
            name:"Bubble Tea",
            pic:"bubble-tea.jpg",
            alt:"A pic of a yummy bubble tea.",
            color:"pink",
            day:"Tuesday",
            desc:`I like me some Bubble Tea!`
        };
 	break;

    case 3:
    	today = "Wednesday";
        coffee = {
            name:"Drip",
            pic:"drip.jpg",
            alt:"A pic of a yummy drip.",
            color:"red",
            day:"Wednesday",
            desc:`I like me some Drip!`
        };
 	break;

    case 4:
    	today = "Thursday";
        coffee = {
            name:"Frappaccino",
            pic:"frappaccino.jpg",
            alt:"A pic of a yummy frappaccino.",
            color:"purple",
            day:"Thursday",
            desc:`I like me some Frappaccino!`
        };
 	break;

    case 5:
    	today = "Friday";
        coffee = {
            name:"Mocha",
            pic:"mocha.jpg",
            alt:"A pic of a yummy mocha.",
            color:"orange",
            day:"Friday",
            desc:`I like me some Mocha!`
        };
 	break;

    case 6:
    	today = "Saturday";
        coffee = {
            name:"Pumpkin Spice Latte",
            pic:"pumpkin-spice-latte.jpg",
            alt:"A pic of a yummy pumpkin spice latte.",
            color:"green",
            day:"Saturday",
            desc:`I like me some Pumpkin Spice Latte!`
        };
 	break;

 	default:
    	today = "Something went wrong!";

}

console.log(coffee);

//alert(coffeeTemplate(coffee));

//Adds coffee to page?
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
//change background color of HTML element
document.querySelector("html").style.backgroundColor = coffee.color;

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
        <p>
            <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee">
            <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong> ${coffee.desc}
        </p>
    `;

    return myReturn;
}

