{
	let 
		db = firebase.firestore(),
		booksCol = db.collection("books"),
		genresCol = db.collection("genres"),

		image = document.getElementById("img"),

		title = $("#title"),
		amount = $("#amount"),
		description = $("#description"),

		writersId = $("#writers"),
		genresId = $("#genres"),

		addImageBut = $("#add-image"),
		addBookBut = $("#add-book"),

		black = $(".black").eq(0),
		loadBar = $("#load-bar"),
		$select = [];

 	$(document).ready(function() {
    	$select.push(
    		$('#writers').select2({
    			placeholder: 'Виберiть авторiв',
    			dropdownCssClass: 'select2-font-size'
    		})
    	);
    	$select.push(
    		$('#genres').select2({
    			placeholder: 'Оберiть жанри',
    			dropdownCssClass: 'select2-font-size'
    		})
    	);
    	for (var i = 0; i < $select.length; i++) {
    		$select[i].val(null).trigger('change');
    	}
	});

	addBookBut.on("click", addBook);

	addImageBut.on("change", () => {
		if (validFileType(addImageBut[0].files[0])) {
			displayCropDiv(2 / 3);
		}
	});

	function addBook() {
		loadBar.css("display", "block");

		if (title.val() && amount.val() && description.val() && 
			writersId.val() && genresId.val()) {
			if (addImageBut[0].files[0] != undefined) {
				let
					key = booksCol.doc().id,
					docRef = booksCol.doc(key);

				docRef.set({
					id: key,
					pictureUrl: "",

					title: title.val(),
					amount: parseInt(amount.val()),
					description: description.val(),

					writersId: writersId.val(),
					genresId: genresId.val(),

					dateOfAdd: new Date().getTime(),
				}).then(function() {
					let file = dataURLtoFile(image.src, 'filename.png');

					firebase.storage().ref("books-images/" + key).put(file)
					.then(function() {
						firebase.storage().ref("books-images/" + key).getDownloadURL()
						.then(function(url) {
							docRef.update({
								pictureUrl: url
							}).then(function() {
								refresh();
							});
						});
					});
				});
			} else {
				loadBar.css("display", "none");

				displayMessage("Виберiть обкладинку", 1);
			}
		} else {
			loadBar.css("display", "none");

			displayMessage("Заповнiть усi поля", 1);
		}
	}

	function refresh() {
		image.src = "/favicons/no-image.svg";

		title.val(null)	;
		amount.val(null);
		description.val(null);

		for (let i = 0; i < 2; ++i)
			$select[i].val(null).trigger('change');

		loadBar.css("display", "none");

		displayMessage("Книгу додано", 0);
	}

	function validFileType(file) {
		let fileTypes = [
			'image/jpeg',
			'image/pjpeg',
			'image/png'
		]

	  	for (let i = 0; i < fileTypes.length; i++)
	    	if (file.type === fileTypes[i])
	      		return true;

		return false;
	}
/*
	genresCol.onSnapshot(snapshot => {
		snapshot.forEach(change => {
			if (change.type == "removed") {
				console.log(change.doc.id);
				$("[value=" + change.doc.id + "]").remove();
			}
		});
	});*/
}