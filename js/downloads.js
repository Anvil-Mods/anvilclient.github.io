function printLink(desiredLink, desiredText) {
	var a = document.createElement("a");
	var br = document.createElement("br");
	a.setAttribute("href", desiredLink);
	a.innerHTML = desiredText;
	document.getElementsByClassName("downloads")[0].appendChild(a);
	document.getElementsByClassName("downloads")[0].appendChild(br);
}

function getName(data) {
	return data["name"];
}

function getAssetNameAndURL(data) {
	for (var asset of data["assets"]) {
		if (asset["name"] == "anvilclient-" +  getName(data) + ".jar") {
			return [asset["name"], asset["browser_download_url"]];
		}
	}
}


fetch("https://api.github.com/repos/Anvilclient/Anvilclient/releases").then(function(response) {
	return response.json();
}).then(function(data) {
	console.log(data);
	for (var release of data) {
		var nameAndURL = getAssetNameAndURL(release);
		printLink(nameAndURL[1], nameAndURL[0]);
	}
});
