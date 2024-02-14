function createHeart() {
	const heart = document.createElement('div')
	heart.classList.add('heart')

	heart.style.left = Math.random() * 100 + 'vw'
	heart.style.animationDuration = Math.random() * 2 + 3 + 's'

	heart.innerText = '💗'

	document.body.appendChild(heart)

	setTimeout(() => {
		heart.remove()
	}, 5000)
}

setInterval(createHeart, 300)

function playSoundOnLoad() {
	var audio1 = new Audio('yippie.webm')
    audio1.volume = 0.2
	audio1.play()
	setTimeout(() => {
        var audio2 = new Audio('music.mp3')
        audio2.volume = 0.2
		audio2.play()
	}, 2000)
}

window.addEventListener('load', playSoundOnLoad)
