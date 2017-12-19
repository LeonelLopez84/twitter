var database = firebase.database();

var mensajes = database.ref().child('mensajes');
var lista = document.getElementById('lista');

mensajes.on('child_added',snap=>{
	
	const li = document.createElement('li');
	var mensaje = snap.val();

	li.innerHTML="<a href=''>"+mensaje.mensaje+"</a> <span>"+mensaje.hora+"</span></li>";
	lista.appendChild(li);

});

document.getElementById("twittear").addEventListener("click",twittear);

var tweet={};
function twittear() {
	var D=new Date();
	var fecha = D.getFullYear()+"-"+(D.getMonth() +1)+"-" + D.getDate();

tweet={hora:fecha,mensaje:document.getElementById("tweet").value};

console.log(tweet)
   mensajes.child('men15').set(tweet);
}

