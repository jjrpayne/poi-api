var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/poi", (req, res) => {
	res.json({longitude: 48.461387,
		latitude: -123.334523});
});

app.listen(port, () => {
	console.log("Server running on port %d", port);
});
