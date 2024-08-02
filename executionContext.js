//execution context matlab jab v hum function chalaenge to func apna ek khudka ek imaginary container bna lega jusmen uski 3 chize hogi.
// or execution context is a container where the fucntion's code is exicuted and it's created whenever a fucntion is called.. it has 3 things
//1. variable
//2. function inside that parent function
// 3. lexical environment of that function
//ye jo container hai imaginary ise hi hum exicution context kehte h

function abcd(){     //yaha ek daba bana
    var a=22;           // iske andar ek 'a' bana
    function def(){     //ek or func bana
        var b=33;
    }
}

//lexical environment hume bta rha ki function se hum kya access kr skte h or kya nahi

//var b ko hum def k bahr use nahi kr skte qk uska parrent func def h or var inside parnet hi access ho skta h ye lexical envirnot k hisab se decide ho rha