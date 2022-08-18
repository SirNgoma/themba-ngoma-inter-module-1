/**
 * Roll a dice and help predict which category 
 * will win the MTN Business App of the Year in the year 2022.
 */
 
 function myPredicta(cats){
    
   
  var r = cats[Math.floor(Math.random()*cats.length)];

    console.log("The winner will be from " + r);
    
   
}

var cats = ["Best Consumer Solution",
"Best Enterprise Solution",
"Most Innovative Solution",
"Best Gaming Solution",
"Best Health Solution",
"Best Agricultural Solution",
"Best Educational Solution",
"Best Financial Solution",
"Best Hackathon Solution",
"Best South African Solution",
"Best Campus Cup Solution",
"Best African Solution",
];
myPredicta(cats);