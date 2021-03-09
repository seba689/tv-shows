 // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDS6WheN-we415GUy0ilGW1ODS5puAn8Ps",
    authDomain: "tvshowapp-42515.firebaseapp.com",
    databaseURL: "https://tvshowapp-42515-default-rtdb.firebaseio.com",
    projectId: "tvshowapp-42515",
    storageBucket: "tvshowapp-42515.appspot.com",
    messagingSenderId: "355033215809",
    appId: "1:355033215809:web:00c874e2bb175dc22867c0"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

tvshow = firebase.database().ref('tvshowapp')

function sendData(e){
	
	let title = $("#txtTitle").val();	
	let network = $("#txtNetwork").val();
	let numberOfSeasons = $("#txtNumberOfSeasons").val();
	let isCurrent = $("#isCurrent").prop('checked');
	let genres = $("#genres").val();
	
	let nuevoTVShow = tvshow.push();
	nuevoTVShow.set({
		title : title,
		network : network,
		numberOfSeasons : numberOfSeasons,
		isCurrent : isCurrent,
		genres : genres
	});
}

firebase.database().ref('tvshowapp').once('value',function(snapshot){
	snapshot.forEach(function(childSnapshot){
		reg=childSnapshot.val()
		key=childSnapshot.key
	
		$('#tabla').append(`
		<tr>
			<th scope="row">${1}</th>
			<td>${reg.title}</td>
			<td>${reg.network}</td>
			<td>${reg.numberOfSeasons}</td>
			<td>${reg.isCurrent}</td>
			<td>${reg.genres}</td>
			<td><button type="submit" class="btn btn-outline-danger" onclick="borrar(key)">Dell</button><button type="submit" class="btn btn-outline-success mx-2"  onclick="editar('${key}','${childSnapshot.val().title}','${childSnapshot.val().network}','${childSnapshot.val().numberOfSeasons}','${childSnapshot.val().isCurrent}','${childSnapshot.val().genres}')">Edit</button></td>
		</tr>
		`);console.log(reg)
		console.log(key)
	})
})

function borrar(key) {
	firebase.database().ref('tvshowapp').child(key).remove()	
	location.reload()
}

function cerrar() {
	$('#exampleModal').modal('toggle');
}

function editar(key,nombre,plataforma,temporadas,aire,genero) {

	$('#exampleModal').modal('toggle');
	$('#h6').html(key);
	$('#nombre').val(nombre);
	$('#plataforma').val(plataforma);
	$('#aire').val(aire);
	$('#genero').val(genero);
	$('#temporada').val(temporadas);
}

function save() {
	key = $('#h6').html();
	nombre = $('#nombre').val();
	plat = $('#plataforma').val();
	aire =$('#aire').val();
	genero = $('#genero').val();
	temp =$('#temporada').val();

	console.log(key)

	tvshow.child(key).update({
	title: nombre,
	network: plat,
	numberOfSeasons : temp,
	isCurrent : aire,
	genres : genero
	})
	location.reload()
	cerrar()
}