document.addEventListener('DOMContentLoaded', () => {
	const burgerButton = document.querySelector('.burger')
	const menu = document.querySelector('.menu-wrapper')
	let isMenuVisible

	if (burgerButton && menu) {
		window.hideMenu = () => {
			menu.classList.remove('visible')
			burgerButton.classList.remove('active')
			scrollLock.enablePageScroll()
			isMenuVisible = false
		}

		window.showMenu = () => {
			menu.classList.add('visible')
			burgerButton.classList.add('active')
			scrollLock.disablePageScroll()
			isMenuVisible = true
		}

		burgerButton.addEventListener('click', () => {
			if (isMenuVisible) {
				window.hideMenu()
			} else {
				window.showMenu()
			}
		})
		function checkWidth() {
			const width = window.outerWidth

			if (width > 768 && isMenuVisible) {
				scrollLock.clearQueueScrollLocks()
				window.hideMenu()
			}
		}

		window.addEventListener('resize', checkWidth)
	}

	const navigateLinks = document.querySelectorAll('.menu__link_navigate')

	if (navigateLinks.length > 0) {
		for (let link of navigateLinks) {
			link.addEventListener('click', function (e) {
				e.preventDefault()
				const id = link.getAttribute('href')

				if (isMenuVisible) window.hideMenu()

				document.querySelector(id).scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				})
			})
		}
	}

	const rangeInput = document.querySelector('.field__input-range')
	const rangeInputValue = document.querySelector('.field__head-percent')

	if (rangeInput && rangeInputValue) {
		rangeInput.addEventListener('input', (event) => {
			const value = event.target.value
			const progress = Math.round((value / rangeInput.max) * 100)
			rangeInputValue.textContent = `${progress}%`
		})
	}

	const inputFile = document.querySelector('.field__input-file')
	const clipButton = document.querySelector('.clip-button')

	if (inputFile && clipButton) {
		clipButton.addEventListener('click', () => {
			inputFile.click()
		})
	}
})
