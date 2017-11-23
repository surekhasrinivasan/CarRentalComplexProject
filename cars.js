var carRental = {
	businessname: 'Enterprise Car Rental',
	types: ['EconomyCars', 'MidsizeCars', 'FullsizeCars'],
	EconomyCars: {
		rentalprice: 50,
		carsavailable: 9
	},
	MidsizeCars: {
		rentalprice: 80,
		carsavailable: 10
	},
	FullsizeCars: {
		rentalprice: 100,
		carsavailable: 8
	}
};
var rental = {
	EconomyCars: [],
	MidsizeCars: [],
	FullsizeCars: []
};
window.onload = function() {
	document.getElementById("busiName").innerHTML = carRental.businessname;
	var dropDown = document.getElementById("cartype");
	var carList;
	for (var i = 0; i < carRental.types.length; i++) {
		//console.log(carRental.types.length);
		carList = document.createElement("OPTION");
		carList.text = carRental.types[i];
		//console.log(carList.text);
		dropDown.appendChild(carList);
	}
};

function displayCar(val) {
	document.getElementById('displayInfo').innerHTML = carRental[val].carsavailable + "  " + val + " Available" + "<br>" + "$" + carRental[val].rentalprice + "  / day";
}

function rentFunction() {
	var cartype = document.forms["carSelect"]['cartype'].value;
	console.log(cartype);
	//var cartype=document.getElementById("carType").value;
	var renter = document.forms["carSelect"]['rentername'].value;
	//console.log(renter);
	if (cartype == "none") {
		alert("Please select a car type");
		return false;
	} else if (renter == "") {
		alert("Please enter the Renter's name");
		return false;
	} else if (carRental[cartype].carsavailable <= 0) {
		alert(cartype + " not available");
		return false;
	} else {
		rental[cartype].push({
			name: renter
		});
		carRental[cartype].carsavailable--;
		document.getElementById('displayInfo').innerHTML = "Your Rental Car is ready for pick up!";
		event.preventDefault();
		return true;
	}
}