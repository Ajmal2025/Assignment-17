"use strict";
// 17.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// change program Task16.ts 
//  expand this 
let friend_ne = ["Asif", "Adeel", "Zulfiqar", "Jamshaidizwan"];
//  add start index first 
// friend_ne.splice(0,0,"nazir")
// friend_ne.splice(2,0,"rizwan")
// friend_ne.push("imran")
let show_new = true;
// var index = friend_ne.indexOf('tahun');
// console.log(index)
let index = friend_ne.length;
console.log(index);
console.log("I can invite only two people for dinner");
for (let i = 0; i < friend_ne.length; i++) {
    if (index > 2) {
        console.log(` I am sorry I can’t invite you to dinner tonight. ${friend_ne[0]}`);
        friend_ne.splice(0, 1);
    }
}
console.log(` Hi, you are invited to dinner tonigt. ${friend_ne}`);
friend_ne.pop();
friend_ne.pop();
console.log(friend_ne);
//console.log("Biger Dinner Table total people "+friend_ne.length)
