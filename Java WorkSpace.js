// Lecture : variables
newFunction();

function newFunction() {
    // Lecture : variables
    /*
    var name = 'John';
    console.log(name);
    
    var lastName = 'Smith';
    console.log(lastName);
    
    var age = 26
    console.log(age);
    
    var fullAge = true;
    console.log(fullAge);
    */
    // Lecture : variables 2
    /*
    var name = 'John';
    var age = 26;
    
    console.log(name + age);
    console.log(age + age);
    
    var job, isMarried;
    
    console.log(job);
    job = 'teacher';
    isMarried = false;
    console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
    
    age = 'thirty six';
    job = 'driver';
    
    console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
    
    var lastName = prompt('What is your last name?');
    console.log(lastName);
    
    alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
    */
    // lecture: operators
    /*
    var now = 2017
    var birthYear = 2017 - 26
    birthYear = (now - 26) * 2;
    // 2017 - 52 = 1965
    
    console.log(birthYear);
    
    var ageJohn = 30;
    var ageMark = 30;
    
    ageJohn = ageMark =(3 + 5) * 4 - 6;
    //ageJohn = ageMark = 26
    //ageJohn = 26
    
    ageJohn++;
    ageJohn = ageJohn + 1;
    
    ageMark *= 2;
    ageMark = ageMark * 2;
    
    console.log(ageJohn);
    console.log(ageMark);
    */
    // Lecture: if/else Statements
    /*
    var name = 'john';
    var age = 26;
    var isMarried = 'yes'
    
    if (isMarried === 'yes') {
    // If(false) = 'no'
        console.log(name + ' is marred!');
    } else {
        console.log (name + ' will hopefully marry soon:)');
    }
    
    isMarried = false
    
    if(isMarried) {
        console.log('Yes');
    } else {
        console.log('No');
    }
    
    if (23 == "23") {
        console.log('Somthing to print...');
    }
    // if 23 is equal to 23 then Console log will print with == but if the if statement is === is equal to false
    if (23 === "23") {
        console.log('Somthing to print...');
    }
    */
    // Lecture: boolean logic and switch
    /*
    var age = 20;
    if (age < 20) {
        console.log('John is a teenager');
    } else if (age >= 20 && age < 30) {
        console.log('John is a young man');
    } else {
        console.log('John is a man');
    }
    
    var job = 'teacher';
    
     job = prompt('What does john do?');
    
    switch (job){
        case 'teacher':
            console.log('John teaches kids.');
            break;
        case 'driver':
            console.log('John drives a cab in Lisbon.');
            break;
        case 'cop' :
            console.log('John help fight crime.');
            break;
        default:
            console.log('john does something else.');
    }
    */
    // Coding Challenge
    /*
    var heightJohn = 180;
    var heightMike = 165;
    var ageJohn = 26;
    var ageMike = 29;
    
    var scoreJohn = heightJohn + 5 * ageJohn;
    var scoreMike = heightMike + 5 * ageMike;
    
    if (scoreJohn > scoreMike) {
        console.log('John wins the game with ' + scoreJohn + ' points!');
    } else if (scoreMike > scoreJohn) {
        console.log('Mike wins the game with ' + scoreMike + ' points!');
    } else if ( scoreJohn === scoreMike) {
        console.log('there is a draw.');
    }
    
    var heightMary = 158;
    var ageMary = 31;
    var scoreMary = heightMary + 5 * ageMary;
    
    if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
        console.log('John wins the game with ' + scoreJohn + ' points!');
    } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
        console.log('Mike wins the game with ' + scoreMike + ' points!');
    } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
        console.log('Mary wins the game with ' + scoreMary + ' points!');
    } else {
        console.log('Its\'s a draw.');
    }
    */
    /*
    //Lecture: Functions
    function calculateAge(yearOfBirth) {
        var age = 2017 - yearOfBirth;
        return age;
    }
    
    var ageJohn = calculateAge(1990);
    var ageMike = calculateAge(1969);
    var ageMary = calculateAge(1948);
    
    function yearUntillRetirement(name, year) {
        var age = calculateAge(year);
        var retirement = 65 - age;
        if (retirement >= 0) {
            console.log(name + ' retires in ' + retirement + ' years.');
        } else {
            console.log(name + 'has already retired.');
        }
    }
    
    yearUntillRetirement('John', 1990);
    yearUntillRetirement('Mike', 1969);
    yearUntillRetirement('Mary', 1948);
    */
    /*
    // Lecture: Statemants and expressions
    function someFun(par) {
        //code(statement)
    }
    
    var someFun = function(par) {
        //code(expressions)
    }
    
    //Expressions
    3+4;
    var x = 3;
    
    //statement
    if (x === 5) {
        //do something
    }
    */
    //Lecture: Arrays
    /*
    var names = ['John', 'Jane', 'Mark'];
    var years = new Array(1990, 1969, 1948);
    
    console.log(names[0]);
    names[1] = 'Ben';
    console.log(names);
    
    var john = ['John', 'Smith', 1990, 'designer', false];
    john.push('blue');
    john.unshift('Mr.')
    john.pop();
    john.shift();
    console.log(john);
    
    if (john.indexOf('teacher') === -1) {
        console.log('John is NOT a teacher');
    }
    */
    // Lecture: Objects
    /*
     var john = {
         name: 'john',
         lastName: 'Smith',
         yearOfBirth: 1990,
         job: 'teacher',
         isMarried: false
     };
     console.log(john.lastName);
     console.log(john['lastName']);
    
     var xyz = 'job';
     console.log(john[xyz])
    
     john.lastName = 'Miller';
     john['job'] = "programmer";
     console.log(john);
    
     var jane = new Object();
     jane.name = 'Jane';
     jane.lastName = 'Smith';
     jane['yearOfBirth'] = 1969;
     jane['job'] = 'retired';
     jane['isMarried'] = true;
     console.log(jane);
     */
    // Lecture: Object and Methods
    /*
    var john = {
       name: 'John',
       lastName: 'Smith',
       yearOfBirth: 1990,
       job: 'teacher',
       isMarried: false,
       family: ['Jane', 'Mark', 'Bob'],
       calculateAge: function() {
           return 2017 - this.yearOfBirth;
       }
   };
   
   console.log(john.calculateAge());
   
   var age = john.calculateAge();
   john.age = age;
   
   console.log(john);
   */
    //v2.0
    /*
    var john = {
        name: 'John',
        lastName: 'Smith',
        yearOfBirth: 1990,
        job: 'teacher',
        isMarried: false,
        family: ['Jane', 'Mark', 'Bob'],
        calculateAge: function() {
            this.age = 2017 - this.yearOfBirth;
        }
    };
    
    john.calculateAge();
    console.log(john);
    */
    // Lecture: Loops
    /*
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }

    var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
    for (var i = names.length - 1; i >= 0; i--) {
        console.log(names[i]);
    }
    */
    var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

    var i = 0;
    while(i < names.length) {
        console.log(names[i]);
        i++;
    }

    for (var i = 0; i <= 5; i++) {
        if( i === 3) {
            continue;
        }
        console.log(i)
    }
}
