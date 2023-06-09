const dragBox = document.querySelectorAll('.drag-box');
const boxframe = document.querySelectorAll('.box-frame');
const succesDrop = document.querySelector('.succes-drop');
const drop_data =document.getElementById("drop-data");

let draggedItem = null;

for (let i = 0; i < dragBox.length; i++) {
	const item = dragBox[i];

	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
		}, 0)
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})

	for (let j = 1; j < boxframe.length; j ++) {
		const list = boxframe[j];

		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		
		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'white';
		});

		list.addEventListener('drop', function (e) {
			console.log('drop');
			this.append(draggedItem);
			succesDrop.style.display="block";
			setTimeout(function () {
				succesDrop.style.display="none";
			}, 2000);
			this.style.backgroundColor = 'white';
		});
	}
}

function resetdrop(){
	console.log("reset")
	for (let j = 1; j < boxframe.length; j++) {
		const list = boxframe[j];
		while (list.firstChild) {
		  boxframe[0].appendChild(list.firstChild);
		}
	  }
}