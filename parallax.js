function doParallax() {
	const scrolled = window.pageYOffset;

	const speed1 = 0.6;
	const speed2 = 0.4;
	const speed3 = 0.2;
	const speed_petals = 0.5;

	document.body.style.backgroundPosition = `
		center ${-(scrolled * speed1)}px,
		center ${-(scrolled * speed2)}px,
		center ${-(scrolled * speed3)}px,
		center ${-(scrolled * speed_petals)}px,
		center center
	`;
}

window.addEventListener('scroll', () => {
	window.requestAnimationFrame(doParallax);
});
