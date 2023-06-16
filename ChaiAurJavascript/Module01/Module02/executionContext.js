let val1 = 10;
let val2 = 5;

function addNum(num1,num2){
  let total =num1+num2;
  return total;
}
let result1 = addNum(val1,val2);

let result2 = addNum(10,5) 

/* 
    javascript execution  context

    {} --> Global execution context (inside this)
    ---> Functional execution context 
    ---> Eval execution context

    1. memory creation phase (Creation phase)
    2. Execution phase


    step 1. global execution (allocate inside the this)
    step 2. memory phase :-
                   val1 = undefined
                   val2 = undefined
                   addNum = definition
                   result1  = undefined
                   result2 = undefined
     
    step 3. Execution phase:-
                   val1 = 10
                   val2 = 5
                   result1 = another execution context --> new variable environment + execution thread 

                                                           here memory phase and execution phase for evry function for each

                                                           memory phase :- val1 = undefined
                                                                           val2 = undefined
                                                                           total = undefined
                                                           execution phase:-val1 = 10
                                                                             val2 = 5
                                                                             total = 15
                                                            return --> it will return value in global execution context.
                                                            after return this execution context will be deleted 
                  
                    result2 = another execution context --> new variable environment + execution thread 

                                                           here memory phase and execution phase for evry function for each

                                                           memory phase :- val1 = undefined
                                                                           val2 = undefined
                                                                           total = undefined
                                                           execution phase:-val1 = 10
                                                                             val2 = 5
                                                                             total = 15
                                                            return --> it will return value in global execution context.
                                                            after return this execution context will be deleted 


    Call stack ==> 

            
                              
                            Three()   ---> after execution it will delete from the stack
                            Two()   ---> after execution it will delete from the stack
                            one()   ---> after execution it will delete from the stack
                          global execution

                          it work on list in firt out who came in last inside the stack will get out from the stack first 


                          


                   
                   
*/