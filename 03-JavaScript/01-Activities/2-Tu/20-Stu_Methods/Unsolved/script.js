var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";
var insEl = "Canis Major";

constellations.unshift(insEl);

console.log('constellations array:', constellations);

planets.pop();

console.log('planets array:', planets);

var galaxy = constellations.concat(planets);

console.log('constellations+planets array:', galaxy);


star = star.toUpperCase();

console.log('star:',star);




var STR = star.toUpperCase();

console.log('STR:',STR);

