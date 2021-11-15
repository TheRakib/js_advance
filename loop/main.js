
// upprepning /loop / iteration 

var list = [12, 44, 45, 66 ]

function doSomething() {
    console.log("hello from wie ");
}




// startpunkt; villkor ; ökning/minskning av punkten
for(var i= 0; i<10; i++){
    console.log(list[i])

    //doSomething();
}
/* 
 list[0]
 list[1]
 list[2]
 list[3]
 list[4]
 list[5]
 list[6]
 list[7]
 list[8]
 list[9]
*/ 
/* while( vilkor/jämförelse) { kod} */
/* map , filter  : list methods . Works only with list */ 

list.map(  function (e) { console.log(e) }      )

const sortedList = list.filter( e=>  e>44 )
console.log(sortedList)

//(true)? console.log("hej"): console.log(" false"); 
/* 
== 
===
! 
<
> 
<=
>= 
*/
var a="a"
if(a =="a") {

    console.log("rad 1")
// kodbasen kommer att köras om villkoret är sant
}
else if(a=="a") {
    console.log("rad 2 ")
}
else {
    console.log("rad 3")
    // kodbasen kommer att köras om inget av ovanstådene villkoret är sant 
}

// kl. 11.00 

     askMeSomething("What's up? ")

function askMeSomething (argument) {
	/* kod som ska köras */
    console.log(argument)

}

function countSalary(basic, bonus, tax) {
 

   var getMonth = new Date('December 25, 2021 23:15:30');
    var month = getMonth.getMonth();
    console.log(" total salary for month" ,  month,  (basic +bonus) -(basic+bonus)* tax) 
    return (basic +bonus) -(basic+bonus)* tax

}


const monthlySalary_nov= countSalary(45000, 15000, .50 );

const monthlySalary_Dec = countSalary(50000, 20000, .57);


console.log("årsinkomst efterskatt", (monthlySalary_nov+ monthlySalary_Dec) )

// verb  : function 
// noun/ substantive variable

