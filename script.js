function hello(){
  // var response=prompt("What is your name?");
  // alert("hello, "+response);
  // document.getElementById("demo").innerHTML = "Completed";
  console.log("java")
}
function password(){
  let pwd = "123abc";
  let user = prompt("Enter the password. You have 5 guesses");
  for ( let i=0; i<4; i++){
    user = prompt("Wrong. Enter the password:");
  }
}



