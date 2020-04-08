/**************************** EVENTS HANDLING ****************************/
// IN JAvascript we do like
// $("#Button").on('click',function(){
//     console.log("event handling");
// });

// But in Node JS has a module -> events
const events = require('events');
const event = new events.EventEmitter();              // Here EventEmitter makes the list of all events for the variable event 
// here we are creating the new object of the event 
event.on('click',(a)=>{ // here instead of click we can write any event there - > called event name . // here 'a' is the parameter passed
    console.log("click event called");
});
 // Now we need to trigger / fire the event created
 event.emit('click',5); // here we put the same event name as of the written of event.on(' ' ,function())
 // Both the two event name must be same // here ' a ' is the parameter passed 
 

 // creating event inside event
  const firstevent = function(n1,n2){
      console.log(n2*n1);
  }
  const secondevent=function(){
      console.log("Hi I am doing well :P " );
      event.emit('click',3,4);
  }
  event.on('click',firstevent);
  event.on('click2',secondevent); // see name is same for the 2nde event
  event.emit('click2');  // see name is same for the 2nde event
 
  