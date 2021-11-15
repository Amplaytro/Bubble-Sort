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

		var val = parseInt(number.value);
		arr.push(val);
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

		// Adding 'i'
		var selected_ele_label = document.createElement("label");
		selected_ele_label.classList.add("selected_ele");
		if (color == "rgb(0, 255, 0)") {
			selected_ele_label.innerHTML = "<- i";
		}

		// Appending created elements to index.html
		array_ele.appendChild(array_ele_label);
		array_ele.appendChild(array_index_label);
		array_ele.appendChild(selected_ele_label);
		container.appendChild(array_ele);

		i++;
		blocks = document.querySelectorAll(".block");
}

function BubbleStep(arr) {
	var x;
	if (blocks[0].style.backgroundColor == "rgb(143, 121, 255)") {
		x = i;
		i = 0;
		if (blocks[x-1].style.backgroundColor == "rgb(255, 0, 0)") {
			document.getElementById("array").innerHTML = "";
			for(j = 0; j < k; j++) {
				if (j == 0) {
					displayArray("array", "rgb(0, 255, 0)");
				}
				else if (j > 0 && j < x-1) {
					displayArray("array", "rgb(143, 121, 255)");
				}
				else {
					displayArray("array", "rgb(255, 0, 0)");
				}
			}
		}
		else {
			document.getElementById("array").innerHTML = "";
			for(j = 0; j < k; j++) {
				if (j == 0) {
					displayArray("array", "rgb(0, 255, 0)");
				}
				else {
					displayArray("array", "rgb(143, 121, 255)");
				}
			}
		}
		i = x;
		document.getElementById("l1").innerHTML = "Selected index i = 0";
		document.getElementById("l2").innerHTML = "Compare value at index i = 0 with value at index i + 1  = 1";
		if(arr[0] > arr[1]) {
			document.getElementById("l3").innerHTML = arr[0]+" > "+arr[1]+" exchange";
		}
		else {
			document.getElementById("l3").innerHTML = arr[0]+" < "+arr[1]+" NO exchange";
		}
		document.getElementById("l4").innerHTML = "Increment selected index by 1";
		document.getElementById("l5").innerHTML = "";
		document.getElementById("l6").innerHTML = "";
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
			document.getElementById("l1").innerHTML = "Selected index i = "+d;
			document.getElementById("l2").innerHTML = "No further comparison is possible";
			document.getElementById("l3").innerHTML = "The pass is complete and "+arr[d]+" has reached to it's final position";
			document.getElementById("l4").innerHTML = "";
			document.getElementById("l5").innerHTML = "";
			document.getElementById("l6").innerHTML = "";
			d--;
		}
		else {
			document.getElementById("l1").innerHTML = "Selected index i = "+d;
			document.getElementById("l2").innerHTML = "Compare value at index i = "+d+" with value at index i + "+d+"  = "+(d+1);
			if(arr[d] > arr[d+1]) {
				document.getElementById("l3").innerHTML = arr[d]+" > "+arr[d+1]+" exchange";
			}
			else {
				document.getElementById("l3").innerHTML = arr[d]+" < "+arr[d+1]+" NO exchange";
			}
			document.getElementById("l4").innerHTML = "Increment selected index by 1";
			document.getElementById("l5").innerHTML = "";
			document.getElementById("l6").innerHTML = "";
		}
		c++;
		d++;
	}
	else if (d == i-1 && blocks[1].style.backgroundColor != "rgb(255, 0, 0)") {
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
		document.getElementById("l1").innerHTML = "Start the next pass from the first index";
		document.getElementById("l2").innerHTML = "This time "+arr[d]+" will not be considered in comparison becausde it has already reached to it's final position";
		document.getElementById("l3").innerHTML = "";	
		document.getElementById("l4").innerHTML = "";
		document.getElementById("l5").innerHTML = "";
		document.getElementById("l6").innerHTML = "";
		d++;
	}
	else if (i > 1) {
		c = 0;
		d = 1;
		i--;
		BubbleStep(arr);
	}
	else {
		i = 0;
		document.getElementById("array").innerHTML = "";
		for(j = 0; j < k; j++) {
			displayArray("array", "rgb(255, 0, 0)");
		}
		i = 0;
		document.getElementById("l1").innerHTML = "All the passes have been completed and the array has been sorted successfully!";
		document.getElementById("l2").innerHTML = "";
		document.getElementById("l3").innerHTML = "";	
		document.getElementById("l4").innerHTML = "";
		document.getElementById("l5").innerHTML = "";
		document.getElementById("l6").innerHTML = "";
	}
	document.getElementById("btn").disabled = true;
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
	i = 0;
	document.getElementById("btn").disabled = true;
	document.getElementById("l1").innerHTML = "All the passes have been completed and the array has been sorted successfully!";
	document.getElementById("l2").innerHTML = "";
	document.getElementById("l3").innerHTML = "";	
	document.getElementById("l4").innerHTML = "";
	document.getElementById("l5").innerHTML = "";
	document.getElementById("l6").innerHTML = "";
}

function initialize() {
	document.getElementById("array").innerHTML = "";
	arr = [];
	i = 0;
	c = 0;
	d = 1;
	document.getElementById("btn").disabled = false;
	document.getElementById("l1").innerHTML = "Array to be sorted in ascending order.";
	document.getElementById("l2").innerHTML = "Start from first index and move left to right.";
	document.getElementById("l3").innerHTML = "Compare selected index (i) with next (i+1) index.";
	document.getElementById("l4").innerHTML = "If value at index (i) is greater than the value at index (i+1) then exchange and increment selected index (i) by 1";
	document.getElementById("l5").innerHTML = "If value at index (i) is less than or equal to value at index (i+1) simply increment selected index by 1";
	document.getElementById("l6").innerHTML = "Select the first index 0";
}