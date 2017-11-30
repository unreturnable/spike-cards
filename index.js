const template = "<img class='card' src='{{ image_uris.normal }}' onclick='preview(\"{{ image_uris.png }}\")'/>"

let colors = {
	white: true,
	blue: true,
	black: true,
	red: true,
	green: true,
	colorless: true
}

render()

function render () {
	let html = ""
	for (let i=0; i<cards.length; i++) {
		let display = true
		let cardColor = cards[i].color_identity
		if (cardColor.length > 0) {
			for (let j=0; j<cardColor.length; j++) {
				switch(cardColor[j]) {
					case 'W':
						if (!colors.white) {
							display = false
						}
						break
					case 'U':
						if (!colors.blue) {
							display = false
						}
						break
					case 'B':
						if (!colors.black) {
							display = false
						}
						break
					case 'R':
						if (!colors.red) {
							display = false
						}
						break
					case 'G':
						if (!colors.green) {
							display = false
						}
						break
				}
			}
		} else {
			if (!colors.colorless) {
				display = false
			}
		}
		
		if (display) {
			html += Mustache.render(template, cards[i])
		}
	}

	document.getElementById("cards").innerHTML = html
}

function preview (card) {
	document.getElementById("overlay-card").src = card
	document.getElementById("overlay").style.display = "block"
}

function changeColour (color) {
	colors[color] = !colors[color]
	
	if (colors[color]) {
		document.getElementById(color).style.background = "#FFFF4C"
	} else {
		document.getElementById(color).style.background = "none"
	}

	render()
}
