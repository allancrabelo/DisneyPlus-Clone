document.addEventListener("DOMContentLoaded", function() {
	const button = document.querySelectorAll('[data-tab-button]');

	for (let i = 0; i < button.length; i++) {
		button[i].addEventListener("click", function(botao) {
			const offset = botao.target.dataset.tabButton;
			const slides = document.querySelector(`[data-tab-list="${offset}"]`);
			const buttonTarget = botao.target;
			
			removeActiveButton();
			hideAllSlides();
			
			slides.classList.add('shows__list--is-active');
			buttonTarget.classList.add('shows__tabs__button--is-active');
		});
	}

	function removeActiveButton() {
		const buttons = document.querySelectorAll('[data-tab-button]');

		for (let i = 0; i < buttons.length; i++) {
			buttons[i].classList.remove('shows__tabs__button--is-active');
		}
	}

	function hideAllSlides() {
		const slides = document.querySelectorAll('[data-tab-list]');

		for (let i = 0; i < slides.length; i++) {
			slides[i].classList.remove('shows__list--is-active');
		}
	}
});