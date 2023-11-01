// Large Shirts: Modify the make_shirt() function so that 
//shirts are large by default with a message that
// reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function q37() {
   function make_shirt (size: string = 'large', message: string = "i love typescript"):void{
      console.log(`your ordered a ${size}, shirt with the message ${message} printed on it`)
   }
 make_shirt()
 make_shirt('midium')
 make_shirt('large',"i love javacript")  

}  
q37()