console.log("JS Start");
console.log(document.readyState);


const check_status = setInterval( () => {
    clear_flag=document.readyState;
    console.log(clear_flag);

    if (clear_flag === "complete"){
        clearInterval(check_status);
        document.getElementById("last_console_message").innerText =  "Load Complete";

        //Call async main1 function
        console.log("Page loaded, about to request Promise for main1");
        main1()
        console.log("Got main1 Promise, Primary check_status timer exiting");
   }
}, 10);


const main1 = () => {
    var pyret ="---from py: Hii"
    return Promise.resolve().then(() => {
        console.log("Withing Promise main1");
        let x11=document.getElementById("btn1");
        if(x11){
            x11.addEventListener('click', () => {
                Promise.resolve().then(()=>{ 
                    myBody=""
                    const userAction = async () => {
                    const response = await fetch('https://dapper-chaja-395309.netlify.app/ttt1');
                    const myJson = await response.json(); //extract JSON from the http response
                    // do something with myJson
                    console.log(myJson);
                    pyret="Got JSON"
                    }
                    console.log("Microtask1 State:")
                    console.log(userAction());
                    console.log("Microtask1 End")
                })
                console.log("Listener 1 and another microtask added");
            });


            x11.addEventListener('click', () => {
                Promise.resolve().then(()=>{ console.log("Microtask2",llll)})
                console.log("Listener 2 and another microtask added");
                });

            x11.addEventListener('click', () => {
                const loop1 = () => {
                    ttt=new Date()

                    document.getElementById("last_console_message").innerText =  ttt.toLocaleString()+pyret;
                    console.log("1");
                    setTimeout(loop1,999);
                    }
                loop1();
                });

        };
        //let are_you_done = await main_job();
        //x11.click();
        are_you_done = main_job();
        //console.log("#########################");
        console.log("Many Promise-s returned. Promise main1 fulfilled");
        let llll = 100;
    });
}


const main_job = () => {
    console.log("Stuff to do before main_job Promise return");
    return Promise.resolve().then(() => {
        console.log("Entered main_job Promise");
        //adv_js_cn();
        //async_js_cn();

        //10037, 780029, 7800017, 78000017, 780000017 and 780000017+2 are primes
        //1000001801 and 1000001801+2 are primes
        //999999999091, 1000000000061, 1000000000061+2, 1000000000331 and 1000000000333 are primes
        s=536346624;
        s=7919;
        s=198;
        //s=999999999091;
        //s=536346624;
        //s=268435456;
        primes_below_n_way_rope_traverse3(s);
        //primes_chk_block_arrange1(s);
        console.log("#########################");
        console.log("We reached the end of main_job Promise");
    });
}


/////////////////////////////////////////////////
//////////////////SKIP BELOW/////////////////////
/////////////////////////////////////////////////
const primes_below_n_way_rope_traverse3 = () => {
    console.log("#########################");
    var tm1=Date.now(s);
    //s=536346624;
    //s=536346624;
    //s=268435456;

    if(s <= 536346624 ){
        var final_primes=[];
        final_primes.push(2)
        sqrt11=Math.sqrt(s)
        let ml_map_np1 = new Uint32Array(s).fill(1);

        //For ml_map_np1, ml_map_np1[0] points to 0 on the number line
        //and ml_map_np1[1] point to 1 on the number line and so on
        //'0 aka False' represent composite, here we mark 1 (aka ml_map_np1[1]) as composite
        //Also even numbers are never touched and '2' is manually added to the final result
        ml_map_np1[1]=0;
        //mod traversal for primes>2
        //let cp11;
        console.log("Start map state:",ml_map_np1)
        for(let cp=1; cp<sqrt11; cp += 2 ){
            if(ml_map_np1[cp]){
                console.log("Next cp1:",cp);
                final_primes.push(cp);
                
                //cp11=cp;
                for(let i=cp*cp ; i<s; i += 2*cp){
                    console.log("For cp:",cp," at iter step:",i);
                    ml_map_np1[i]=0;
                }
                console.log("For cp:",cp," Current map state:",ml_map_np1)
            }  
        }
        let bk_fp=[...final_primes];
        //console.log("Pass1 Primes below",s,"are:",bk_fp);
        console.log("T:",final_primes.length-1)
        console.log("TT:",final_primes[final_primes.length-1])
        console.log("TTT:",final_primes[final_primes.length-1]+2)
        
        //console.log("TT:",cp11)
        for(let i=final_primes[final_primes.length-1]+2; i<s; i += 2){
            if(ml_map_np1[i]){
                final_primes.push(i);
            }
        }
        console.log("Time to compute in milliseconds:",Date.now()-tm1);
        console.log("Pass1 Primes below",s,"are:",bk_fp);
        console.log("Pass1+2 Primes below",s,"are:",final_primes);
        //console.log("My RPT3 Primes below",s,"are:",final_primes);
        return final_primes;
    } else {
        console.log("Above s limit of 268435456");
    }
    
    
}

const primes_chk_block_arrange1 = (s) => {
    console.log("#########################");
    var tm1=Date.now();

    //s = 7912;
    if(s <= 536346624 ){
        //Check Here

        s=9999999990912345678n;
        let chkb=1;
        let sqrt_s=Math.floor(Math.sqrt(s));
        console.log("sqrt is:",sqrt_s)
        for(let i=2 ; i<sqrt_s; i += 1){
            let mod1=s%i;
            try{
                chkb=chkb*(mod1/mod1);
            }
            catch(err){
                console.log("Composite, hence err:",err)
                chkb=0;
            }
            
        }

        console.log("For:",s,", chkb is:",chkb)
        console.log("Time to compute in milliseconds:",Date.now()-tm1);
    } else {
        console.log("Above s limit of 268435456");
    }
    
    
}


/////////////////////////////////////////////////
//////////////////WORKING HERE///////////////////
/////////////////////////////////////////////////
const adv_js_cn = () => {
    console.log("######################### fn:adv_js_cn");
    console.log("######Nested Function Scope:");
    let a=10;
    const outer1 = () => {
        let b=20;
        const inner1 = () => {
            let c=30;
            console.log("a, b, c:",a, b, c)
        }
        inner1();
    }
    outer1();

    console.log("######Closure:");
    //In JS when we return a function from another function
    //we are effectively returning a combination of 
    //the function definition along with the function's scope
    //This would let the function definition have an associated
    //persistent memory which could hold on to
    //live data between executions. That combination 
    //of the function and its scope chain 
    //is called closure in JS  
    const outer2 = () => {
        let cnt = 0;
        const inner2 = () => {
            cnt++;
            console.log("cnt:",cnt);
        }
        return inner2;
    }
    const a_fn1= outer2();
    outer2()();
    outer2()();
    a_fn1();
    a_fn1();
    outer2()();

    console.log("######Function Currying:");
    //Currying is a process in functional programming
    //in which we transform a function with multiple
    //arguments into a sequence of nesting functions
    //that take one argument at a time.
    // func(a,b,c) is transformed into f(a)(b)(c)
    //Currying does not call a function
    //it simply transforms it
    const sum = (a, b, c) => {
        return a+b+c;
    }
    function fn_curry1(z){
        return function(a){
            return function(b){
                return function(c){
                    return z(a,b,c);
                }
            }
        }
    }
    //Remember JS can have Anonymous Functions
    //An anonymous function is not accessible after 
    //its initial creation, it can only be accessed 
    //by a variable it is 
    //stored in as a function as a value. 
    //An anonymous function can also have 
    //multiple arguments, but only one expression.
    const fn_curry2 = (z) => {
        return (a) => {
            return (b) => {
                return (c) => {
                    return z(a,b,c);
                }
            }
        }
    }
    const fn_curry3 = (z) => (a) => (b) => (c) => z(a,b,c);
    console.log("Curried_sum(2)(5)(11):",fn_curry3(sum)(2)(5)(11));
    const curried_sum = fn_curry3(sum);
    const add2 = curried_sum(2);
    const add5 = add2(5);
    const add11 = add5(11);
    console.log("Curried_sum 1_at_a_time:",add11);
    
    console.log("######Now 'this'😄:");
    //The JS 'this' keyword, which is used in a function
    //refers to THE object it belongs to. 
    //It makes functions reusable 
    //by letting us decide the object value
    //This object value is determined entirely
    //by how a function is invoked
    //Now there are four ways to invoke 
    //a function in JS and determine the
    //value of 'this'
    //// iMplicit  Binding(generally the value of 'this')
    //// eXplicit  Binding
    //// New       Binding
    //// Default   Binding
    //Implicit Binding:When a function is invoked with
    //the "." aka dot notation, the object
    //to the left of the dot is
    //what the 'this' keyword is referencing.
    const person = {
        firstName: "Oba",
        lastName: "Joba",
        //Arrow notation not working
        sayMyName: function () {
            console.log(`1First Name: ${this.firstName}`);
            console.log("1Last  Name:",this.lastName);
        }
    }
    person.sayMyName();
    //Explicit Binding:In this scenario we have to 
    //explicitly specify the context with 
    //which the function is called. To do so we
    //use the 'call' method that is 
    //builtin every JS function, which allows us to
    //specify the context with which a function is invoked
    //Arrow notation not working
    function sayMyName(){
        console.log(`2First Name: ${this.firstName}`);
        console.log("2Last  Name:",this.lastName);
    }
    sayMyName.call(person)
    //New Binding: Here the function is invoked 
    //with 'this' keyword referencing an empty object
    //When a function is invoked with the 'new' keyword
    //within the function 'this' keyword will always
    //reference a new empty object
    function aPerson (name){
        //this={}
        this.name = name;
    }
    const p1 = new aPerson("Ra");
    const p2 = new aPerson("Surya");
    console.log("p1 & p2 this:",p1.name,"&",p2.name)
    //Default Binding: Is the fallback binding if none of the
    //other three rules are matched
    sayMyName();
    //So if none of the rules are satisfied, JS 
    //defaults to the global scope  and set 'this' 
    //to the global object. In the global scope JS will
    //try to find a variable called 'name' and as there is
    //no 'name' defined in global scope, the return value is 'undefined'
    //We can set global's 'this' labels with globalThis
    globalThis.firstName="Chand"
    globalThis.lastName="Ra"
    //Binding Precedence: New > Explicit > Implicit > Default
    
    console.log("######Prototype & Prototypal Inheritance:");
    //Prototype
    function Person(fName, lName){
        this.firstName= fName;
        this.lastName= lName;
    }
    const pr1 =new Person("Zeus","Pater");
    const pr2 =new Person("Dyaus","Pittar");
    //JS allows us to attach new properties 
    //to an object at any given time
    pr1.getFullName=function () {
        return this.firstName +" "+ this.lastName;
    }
    console.log("pr1:",pr1.getFullName());
    //Here 'getFullName" is specific to pr1
    //IN JS every function has a property called
    //prototype tha points to an object
    //We can use this prototype object to 
    //determine all out shareable properties
    //So now 'getFullName' is available on every 
    //instance of the 'Person' function
    Person.prototype.getFullName=function () {
        return this.firstName +" "+ this.lastName;
    }
    console.log("pr2:",pr2.getFullName())
    //Side note: The function that is used with
    //the new keyword is called the constructor function
    //Now one use prototype is to share properties
    //and methods across instances
    //The other use which is pretty significant
    //as well is "Inheritance". In JS inheritance is
    //supported through the concept of prototypes
    //and is referred to as Prototypal Inheritance
    
    //Here Superhero inherits the properties
    //and methods of Person. So Superhero has
    //firstName, lastName and getFullName
    //inherited from Person
    function SuperHero(fName, lName){
        Person.call(this, fName, lName);
        this.isSuperHero=true;
    }
    SuperHero.prototype.fightCrime =function(){
        console.log("Fighting Crime")
    }
    //TO inherit the 'getFullName' method
    //from Person, we are going to use 
    //'Object.Create' which is a method that will
    //delegate to another object on failed lookups
    //What this does is, when we try to access 
    //'zeus.getFullName' JS checks the prototype
    // object of 'SuperHero' and becomes a failed lookup
    //without 'Object.Create'.However using 
    //'Object.Create' we chain 'SuperHero' 
    //prototype to 'Person' prototype and hence
    //the lookup for getFullName succeeds
    //So 'zeus' inherits getFullName from Person
    SuperHero.prototype = Object.create(Person.prototype);
    const Zeus = new SuperHero("Zeus","Pater");
    //We need to convey to JS that SuperHero
    //is created from SuperHero. Otherwise JS thinks
    //that a 'SuperHero' is created from 'Person"
    SuperHero.prototype.constructor= SuperHero;
    console.log("Indra is:",Zeus.getFullName());

    console.log("######Class Keyword:");
    //The class syntax does not introduce a new
    //object oriented inheritance model. In JS
    //classes are primarily  syntactical sugar
    //over the existing prototypal inheritance
    //Rewriting Person as a class
    class ClPerson{
        constructor(fName, lName){
            this.firstName= fName;
            this.lastName= lName;
        }
        getFullName () {
            return this.firstName +" "+ this.lastName;
        }
    }
    const classP1= new ClPerson("Adam","Son")
    console.log("Class Person:",classP1.getFullName());
    class ClSuperHero extends ClPerson{
        constructor(fName, lName){
            super(fName, lName);
            this.SuperHero=true
        }
        fightCrime(){
            console.log("Fighting Crime")
        }
    }
    const clZeus =  new ClSuperHero("Zeus","Pater")
    console.log("Class SuperHero:",clZeus.getFullName());

    console.log("######Iterables & Iterators:");
    const str1 = "RaJa"
    for(const char1 of str1){
        console.log(char1)
    }
    //What exactly is an iterable:
    //An object which implements the iterable 
    //protocol is an iterable. For an object to be
    //iterable, it must implement
    //at key [Symbol.iterator]. That method should 
    //not accept any argument and should return
    //an object which conforms to the iterator protocol.
    //The iterator protocol decodes whether an object
    //is an iterator.An object is an iterator when it 
    //satisfies the following rule: The object must have
    //a 'next' method that returns an object with 
    //two properties:'value' which gives the current 
    //element and done which is a boolean value
    //indicating whether or not there are any
    //more elements that could be iterated upon
    const obj1 = {
        [Symbol.iterator]: function(){
            let step1 =0;
            const iterator1 ={
                next: function(){
                    step1++;
                    if (step1 === 1){
                        return {value:'Hello',done: false}
                    } else if ( step1 === 2){
                        return {value:'World',done: false}
                    }
                    return {value: undefined, done: true}
                },
            }
            return iterator1;
        },
    }
    for (const word1 of obj1){
        console.log(word1)
    }
    //This is implemented internally for 
    //strings, arrays, maps and sets and we can iterate
    //over them with for..of loop

    console.log("######Generators:");
    //Although it is not difficult to 
    //make an iterator ourselves, it is however
    //a verbose implementation. Generators can
    //create an iterator for us. Generators
    //are a special class of functions that
    //simplify the task of writing iterators.
    //Generators can do a lot, here we see than in 
    //context of iterators.
    //Generator functions can pause execution
    //basis the 'yield' keyword
    function* genFunc1(){
        yield 'Hello'
        yield 'World'
    }
    const genObj1 = genFunc1()
    for(const word1 of genObj1){
        console.log(word1)
    }
}

/////////////////////////////////////////////////
//////////////////WORKING HERE///////////////////
/////////////////////////////////////////////////
const async_js_cn = () => {
    console.log("######################### fn:async_js_cn");
    console.log("######setTimeout and setInterval:");
    const task_b_api1 = () => {
        console.log("Hello, This is a task @ Browser API");
    }
    //Runs code once after a set period of time
    //Browser API
    //setTimeout(task_b_api1,700)
    const stm1= setTimeout(task_b_api1,2000);
    clearTimeout(stm1);
    //setInterval(task_b_api1,1000);
    const stn1= setTimeout(task_b_api1,2000);
    clearInterval(stn1);
    //Two implementations of setInterval:
    ///Time interval is irrespective of run1's runtime
    //setTimeout(function run1(){
    //    console.log("Hello1@Reg_Interval using setTimeout");
    //    setTimeout(run1, 1000);
    //},1000);
    ///Time interval is inclusive of run1's runtime
    //setInterval(function run(){
    //    console.log("Hello2@ setInterval only");
    //}, 1000);

    console.log("######Callbacks:");
    //In JS, functions are first class objects
    //A function can be passed as arguments 
    //and can be returned as functions
    function greet1(name){
        console.log("Hello", name)
    }
    function greet_Ra(greeter){
        const Ra = "PurboRa"
        greeter(Ra);
    }
    greet_Ra(greet1)
    //Any function that is passed
    //as an argument to another function
    //is called a callback function
    //The function which accepts a function 
    //as an argument or returns a function
    //is called a higher order function
    //Synchronous callbacks: A callback 
    //that is executed immediately
    console.log("Synchronous callbacks e.g.:'greet1', some.map(n => n*2)")
    //Asynchronous callbacks: A callback that
    //is often used to continue or resume 
    //code execution after an asynchronous
    //operation has completed.
    //Callbacks are used to delay the execution
    //of a function until a particular
    //time or event has occurred
    console.log("Asynchronous callbacks e.g.:func callbacks for setTimeout, setInterval")
    //e.g.:event handlers for click,...
    //PROBLEM: nesting of callbacks 
    //f1("",(r) => {
    //    f2("",(r) =>{
    //        f3("",(r) =>{
    //            f4("",(r) =>{
    //                //some output
    //            })
    //        })
    //    })
    //})            //Callback Hell

    console.log("######Promises resolves Callback Hells:");



}


console.log("JS End");
