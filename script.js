function whileLoop() {
    var i = 99;
    while (i>=0) {
        console.log(i+" Bottles of Root Beer on the Wall, "+i+" bottles of root beer...take one down, pass it around ");
        i--;
    }
    
}

function idRetriever(id){
	console.log(document.getElementById(id).innerHTML);
}

function changeContent(){
	var temp = document.getElementById("id").value;
    document.getElementById(temp).innerHTML = "changed";
}

function eventTest(){
	document.getElementById("event").onclick=function(){alert("You clicked me!!!");};
}

document.getElementById("header").onclick=function(){alert(document.getElementById("header").innerText);};


function validate(){
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;

	var userValid= new RegExp("\\d");

	if(!userValid.test(username))
		alert("Invalid Username, must have atleast 1 digit");
	else if(password!== "12345678")
		alert("Invalid Password");
	else
		document.getElementById("valid").innerText="Welcome "+username+" , you are valid";
	return false;

}
