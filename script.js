var blocks,
	container,
	number,
	arr = [],
	i = 0,
	c = 0,
	d = 1,
	j,
	k;

function add() {

	//Extracting the value of the element to be searched
	number = document.getElementById("fname");

	generateArray(number);
}

function generateArray(number) {

		var val = number.value;
		arr.push(parseInt(val));
		k = arr.length;

	displayArray("array", "rgb(143, 121, 255)");
}

function displayArray(id, color) {
	var container = document.getElementById(id);
		var value = arr[i];

		// Creating element div
		var array_ele = document.createElement("div");

		// Adding class 'block' to div
		array_ele.classList.add("block");

		// Adding style to div
		array_ele.style.height = `${20}px`;
		array_ele.style.transform = `translate(${i * 30}px)`;
		array_ele.style.backgroundColor = color;

		// Creating array value
		var array_ele_label = document.createElement("label");
		array_ele_label.classList.add("block_id");
		array_ele_label.innerText = value;

		// Creating array index		
		var array_index_label = document.createElement("label");
		array_index_label.classList.add("block_number");
		array_index_label.innerText = i;

		// Appending created elements to index.html
		array_ele.appendChild(array_ele_label);
		array_ele.appendChild(array_index_label);
		container.appendChild(array_ele);

		i++;
		blocks = document.querySelectorAll(".block");
}

function BubbleStep(arr) {
	var x;
	if (blocks[0].style.backgroundColor == "rgb(143, 121, 255)") {
		blocks[0].style.backgroundColor = "rgb(0, 255, 0)";
	}
	else if (c < i-1) {
		if (arr[c] > arr[c+1]) {
		var shift = arr[c];
		arr[c] = arr[c+1];
		arr[c+1] = shift;
		}
		x = i;
		i = 0;
		document.getElementById("array").innerHTML = "";
		for(j = 0; j < k; j++) {
			if (j < d) {
				displayArray("array", "rgb(112, 128, 144)");
			}
			else if (j == d) {
				displayArray("array", "rgb(0, 255, 0)");
			}
			else if (j > d && j < x) {
				displayArray("array", "rgb(143, 121, 255)");
			}
			else {
				displayArray("array", "rgb(255, 0, 0)");
			}
		}
		i = x;
		if (d == i-1) {
			blocks[d].style.backgroundColor = "rgb(255, 0, 0)";
			d--;
		}
		c++;
		d++;
	}
	else if (d == i-1) {
		x = i;
		i = 0;
		document.getElementById("array").innerHTML = "";
		for(j = 0; j < k; j++) {
			if (j < d) {
				displayArray("array", "rgb(143, 121, 255)");
			}
			else if (j >= d) {
				displayArray("array", "rgb(255, 0, 0)");
			}
		}
		i = x;
		d++;
	}
	else if (i > 1) {
		c = 0;
		d = 1;
		i--;
		BubbleStep(arr);
	}
	else {
		blocks[0].style.backgroundColor = "rgb(255, 0, 0)";
	}
	number.disabled = true;
	number.readOnly = true;
}

function BubbleSort(arr) {
	for (var a = 0; a < i - 1; a++) {
		for (var b = 0; b < i - a - 1; b++) {
			if (arr[b] > arr[b+1]) {
				var swap = arr[b];
				arr[b] = arr[b+1];
				arr[b+1] = swap;
			}
		}
	}
	i = 0;
	document.getElementById("array").innerHTML = "";
	for(j = 0; j < k; j++) {
		displayArray("array", "rgb(255, 0, 0)");
	}
	number.disabled = true;
	number.readOnly = true;
}

function initialize() {
	document.getElementById("array").innerHTML = "";
	arr = [];
	i = 0;
	c = 0;
	d = 1;
	number.disabled = false;
	number.readOnly = false;
}