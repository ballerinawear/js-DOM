/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/

document.getElementById('name1').innerHTML = "TayTay";


/*2. Replace the n/a with the following: 

Project Manager*/

document.getElementById('position2').innerHTML = "Project Manager";

/*3. Replace the n/a with the following:

Concatenation*/

document.getElementById('alias3').innerHTML = "Concatenation";

/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/

var quote = document.getElementsByClassName('profile');
var snoopQuote = quote[0];
snoopQuote.innerHTML = "Lorizzle dawg dolizzle dawg amizzle, consectetuer adipiscing fo shizzle my nizzle. Nullam cool velizzle, fo shizzle volutpizzle, suscipit dang, owned vizzle, away. Pellentesque egizzle gangsta. Nizzle erizzle. Nizzle funky fresh dolor dapibizzle turpis tempizzle tempor. Maurizzle shizzle my nizzle crocodizzle izzle et turpizzle. Boom shackalack izzle tortizzle. Pellentesque for sure rhoncizzle nisi. Check out this hac habitasse platea dictumst. Check it out shit. Curabitizzle tellus brizzle, pretizzle eu, away ac, eleifend vitae, nunc. Go to hizzle suscipit. Integizzle semper daahng dawg check it out fizzle";

/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/

var samsQuote = quote[2];
samsQuote.innerHTML = "Lorem ipsum dolor sit amet";


/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/
var box = document.getElementById('nameBox');
var chucky = document.createElement("div");
chucky.id = "name7";
box.appendChild(chucky);


/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/




//Final Boss
/*8. Create your own profile.*/