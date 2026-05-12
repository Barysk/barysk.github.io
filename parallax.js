function doParallax() {
	const scrolled = window.pageYOffset;

	const speed1 = 0.6;
	const speed2 = 0.4;
	const speed3 = 0.2;

	document.body.style.backgroundPosition = `
		center ${-(scrolled * speed1)}px,
		center ${-(scrolled * speed2)}px,
		center ${-(scrolled * speed3)}px,
		center center
	`;
}

window.addEventListener('scroll', () => {
	window.requestAnimationFrame(doParallax);
});
