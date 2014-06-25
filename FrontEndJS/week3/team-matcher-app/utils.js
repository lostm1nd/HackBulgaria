function getRandomRgbColor() {
	var red = getRandomInt(0, 255),
		green = getRandomInt(0, 255),
		blue = getRandomInt(0, 255);

	return 'rgba(' + red + ',' + green + ',' + blue + ', 0.5)';
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
