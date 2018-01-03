function log(msg) {
	  var pane = document.getElementById("log");
	  pane.appendChild(document.createTextNode(msg));
	  pane.appendChild(document.createElement("br"));
	}
