function goodNumber(str) {
	for (let i = 3; i < str.length; i++) {
		if (isNaN(str[i])) {
			return false;
		}
	}
	return true;
}

document.getElementById("trackBtn").addEventListener("click", () => {
	const id = document.getElementById("laundryID").value.trim();

	if (id === "") {
		alert("Laundry ID must be filled first!");
		return;
	}

	if (id.length !== 9 || !id.startsWith("PHA") || !goodNumber(id)) {
		alert("Invalid Laundry ID, Please try again!");
		return;
	}

	if (id === "PHA000001") {
		document.querySelector(".result").style.display = "flex";
		document.querySelector(".error").style.display = "none";
	} else {
		document.querySelector(".result").style.display = "none";
		document.querySelector(".error").style.display = "flex";
	}
});
