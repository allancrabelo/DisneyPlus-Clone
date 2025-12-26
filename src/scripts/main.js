document.addEventListener("DOMContentLoaded", function() {
	const button = document.querySelectorAll('[data-tab-button]');
	const questions = document.querySelectorAll('[data-faq-question]');

	//hero section height
	const heroSection = document.querySelector('.hero');
	const header = document.querySelector('.header');
	const heightHero = heroSection.clientHeight;

	window.addEventListener('scroll', function() {
		const currentPosition = window.scrollY;

		if (currentPosition < heightHero) {
			showHeader();
		} else {
			hiddenHeader();
		}
	});

	function hiddenHeader() {
		if (!header.classList.contains('header--is-hidden')) {
			header.classList.add('header--is-hidden');
		}
	}

	function showHeader() {
		if (header.classList.contains('header--is-hidden')) {
			header.classList.remove('header--is-hidden');
		}
	}

	//set min height to header
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

	//faq section
	for (let i = 0; i < questions.length; i++) {
		questions[i].addEventListener("click", OpenOrClose);
	}

	//set header min height
	function OpenOrClose(question) {
		const classe = 'faq__questions__item--is-open';
		const element = question.target.parentNode;

		element.classList.toggle(classe);
	}

	//functions to remove classes
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