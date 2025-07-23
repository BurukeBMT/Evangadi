console.log("My first module");
function myMultiplier(x){
    return 2*x
}
console.log(myMultiplier(4));

const result = myMultiplier(4);
console.log(result);
// Export the function so other modules can use it
module.exports = {myMultiplier};
