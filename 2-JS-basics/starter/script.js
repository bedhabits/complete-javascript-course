// var var01, var02;
// var01 = "string";
// var02 = true;

// // console.log(var01 + " " + "is not the same as :" + " " + var02);

// var01 = true;
// // console.log(var01 + " " + "is not the same as :" + " " + var02);
// // alert("Carefull... question comming... ")

// // document.querySelector(".prompt")

// var name = prompt("Whats your name ?");
// console.log(`This name : ${name} is the type of ${typeof(name)}`);


/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀
*/

// var massMark = 78; // kg
// var heightMark = 1.69; // meters

// var massJohn = 92;
// var heightJohn = 1.95;

// var BMIMark = massMark / (heightMark * heightMark)
// var BMIJohn2 = massJohn / (heightJohn * heightJohn)
// console.log(BMIMark, BMIJohn2);

// var higher = BMIMark > BMIJohn2;
// console.log(`Is Mark's BMI higher than John's? ${higher}`);


// var question = true;
// switch (question) {
//   case false:
//     console.log("false");
//     // break;
//   case true:
//     console.log("true");
    // break;
  // default:
  //   console.log("default");
// }

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games,
John's team scored 89, 120 and 103 points,
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score),
and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners.
Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points.
Like before, log the average winner to the console. HINT: you will need the
&& operator to take the decision. If you can't solve this one,
just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners,
keeping in mind there might be draws.

GOOD LUCK 😀
*/

// var teamJohn, teamMike;
// teamJohn = [120, 120, 103];
// teamMike = [116, 94, 123];
// var games = 3;

// var teamMary = [97, 134, 105];

// var averageJohn = (teamJohn[0] + teamJohn[1] + teamJohn[2]) / games;
// console.log(averageJohn);

// var averageMike = (teamMike[0] + teamMike[1] + teamMike[2]) / games;
// console.log(averageMike);

// var averageMary = (teamMary[0] + teamMary[1] + teamMary[2]) / games;
// console.log(averageMary);

// if (averageJohn > averageMike && averageJohn > averageMary) {
//   console.log(`John's average ${averageJohn} is higher than Mike's ${averageMike}`);
// } else if (averageJohn < averageMike && averageMike > averageMary) {
//   console.log(`John's average ${averageJohn} is less than Mike's ${averageMike}`);
// } else if (averageJohn = averageMike && averageJohn > averageMary) {
//   console.log(`John's and Mike's average ${averageJohn} is higher than Mary's ${averageMary}`);
// } else if (averageMary > averageJohn && averageMary > averageMike) {
//   console.log(`Mary's has the highest average !!`);
// } else {
//   console.log(`They have the same average: ${averageMike}`);
// }


// /* Functions */
// function jobCategory(job, firstName) {
//     job = job[0].toUpperCase() + job.slice(1).toLowerCase();
//     switch(job) {
//         case "Teacher":
//             return `${firstName} is ${job}`;
//         case "Doctor":
//             return `${firstName} is ${job}`;
//         default:
//             return "No jobs defined."
//   }
// }

// console.log(jobCategory("doctor", "Jaqueline"));


/*. Arrays CRUD */
// Create

// const name = ["David", "Smith", 1980];
// const name2 = new Array("Jane", "Smith", 1984);

// // Update Add to the end
// name.push("Salvador");
// // Update Add to the start
// name2.unshift("Miss");
// name[5] = "none"

// // Delete the first element
// name.shift();
// // Delete the last
// name2.pop();

// console.log(name, name2);

// // indexOf() return -1 if the element doenst exist
// console.log(name2.indexOf(1984));


/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants.
The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator
(as a function). He likes to tip 20% of the bill
when the bill is less than $50, 15% when the bill is between $50 and $200,
and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// // const restaurants = 3;
// var bills = [124, 48, 268]

// var paidAmounts = function(bill) {
//     if (bill < 50) {
//         return 1.2 * bill;
//     } else if (bill >= 50 && bill <= 200) {
//         return 1.15 * bill;
//     } else if (bill > 200) {
//         return 1.1 * bill;
//     } else {
//         return "Need to specify an amount and positive number!"
//     }
// }

// function tip(bill) {
//     if (bill < 50) {
//         return 0.2 * bill;
//     } else if (bill >= 50 && bill <= 200) {
//         return .15 * bill;
//     } else {
//         return 0.1 * bill ;
//     }
// }
// // console.log(bills[0]);
// var tipRest1 = tip(bills[0]).toFixed(2);
// var tipRest2 = tip(bills[1]).toFixed(2);
// var tipRest3 = tip(bills[2]).toFixed(2);
// // console.log(tipRest1, tipRest2, tipRest3);

// var arrayTips = [];
// arrayTips.push(tipRest1, tipRest2, tipRest3);
// console.log(arrayTips);

// var arrayPaid = [];
// arrayPaid.unshift(paidAmounts(bills[0]).toFixed(2)
//     , paidAmounts(bills[1]).toFixed(2), paidAmounts(bills[2]).toFixed(2));
// console.log(arrayPaid);

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs.
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name,
mass, and height
2. Then, add a method to each object to calculate the BMI.
Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI,
together with the full name and the respective BMI.
Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

GOOD LUCK 😀
*/
// var mark = {
//     name: "MArk",
//     mass: 50,
//     height: 1.80,
//     calcBmi: function() {
//         this.bmi = (this.mass / (this.height ** 2)).toFixed(0);
//         return this.bmi;
//     }
// }


// var john = new Object();
// john.name = "John";
// john.mass = 70;
// john.height = 1.70;
// john.calcBmi = function() {
//     this.bmi = (this.mass / (this.height ** 2)).toFixed(0) ;
//     return this.bmi;
// }

// mark.name = "Mark";
// console.log(mark, john);

// console.log(mark.calcBmi());
// console.log(john.calcBmi());



// if (mark.bmi > john.bmi) {
//     console.log(`${mark.name} has higher BMI of ${mark.bmi} > ${john.bmi}`);
// } else if (mark.bmi < john.bmi) {
//     console.log(`${john.name} has higher BMI of ${john.bmi} > ${mark.bmi}`);
// } else if (!mark.bmi || !john.bmi) {
//     console.log("Undefined not accepted")
// } else {
//     console.log(`${john.name} and ${mark.name} has the same BMI of ${john.bmi}`);
// }


// For loops

// for (var i = 0; i <= 5; i++) {
//     console.log(i);
// }

// var john = new Array("Jane", "Smith", 1984, "Michigan", false);
// var johnReverse = [];

// function countingJohn() {
//     for (var i = john.length - 1; i >= 0; i--) {
//         johnReverse.push(john[i]);
//         john[i];
//     }
// }
// countingJohn();
// console.log(john);

// // console.log(johnReverse.push(countingJohn()));
// console.log(johnReverse);

// console.log(johnReverse);
// var i = john.length - 1;
// while(i >= 0) {
//     console.log(john[i]);
//     i--;
// }

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge?
Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants.
The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15%
when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills
and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array
containing final paid amounts (bill + tip).
HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday,
going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10%
when the bill is between $100 and $300, and 25%
if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules

6. Create a function (not a method) to calculate the average of a given array of tips.
HINT: Loop over the array, and in each iteration store the current sum
in a variable (starting from 0). After you have the sum of the array,
divide it by the number of elements in it (that's how you calculate the average)

7. Calculate the average tip for each family

8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/
var johnBills = [124, 48, 268, 180, 42];
var tipsList = [];
var paidList = [];


var johnObj = {
    name: "John",
    bills: johnBills,
    tips: tipsList,
    paid: paidList,
    caclTip: function() {
        this.bills.forEach(bill => {
            if (bill < 50) {
                this.tips.push(0.20 * bill);
                this.paid.push((0.20 * bill) + bill);
            } else if (bill >= 50 && bill <= 200) {
                this.tips.push(0.15 * bill);
                this.paid.push((0.15 * bill) + bill);
            } else {
                this.tips.push(0.10 * bill);
                this.paid.push((0.10 * bill) + bill);
            }
        })
    }
}

johnObj.caclTip();


var markObj = {
    name: "Mark",
    bills: [77, 475, 110, 45],
    tips: [],
    paid: [],
    calcTip: function() {
        this.bills.forEach(bill => {
            if (bill < 100) {
                this.tips.push(0.20 * bill);
                this.paid.push((0.20 * bill) + bill);
            } else if (bill >= 100 && bill <= 300) {
                this.tips.push(0.10 * bill);
                this.paid.push((0.10 * bill) + bill);
            } else {
                this.tips.push(0.25 * bill);
                this.paid.push((0.25 * bill) + bill);
            }
        })
    }
}

markObj.calcTip();


function averageTips(tips) {
    var counter = 0;
    for (var i = 0; i < tips.length; i++) {
        counter += tips[i];
    }
    return counter / tips.length;
}

markObj.avgTips = averageTips(markObj.tips);
johnObj.avgTips = averageTips(johnObj.tips);

console.log(markObj, johnObj);

if (johnObj.avgTips > markObj.avgTips) {
    console.log(`John has higher ${johnObj.avgTips} average than Mark's ${markObj.avgTips} average.`);
} else if (johnObj.avgTips < markObj.avgTips) {
    console.log(`Mark has higher ${markObj.avgTips} average than John's ${johnObj.avgTips} average.`);
} else {
    console.log(`John and Mark has the same ${johnObj.avgTips}.`);
}








