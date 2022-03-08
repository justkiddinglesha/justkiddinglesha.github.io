document.addEventListener('DOMContentLoaded', function () {
	const isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }

    const calcHeight = () => {
        document.querySelector('.wrapper').style.minHeight = window.innerHeight + 'px'
    }

    if(isMobile()) {
        document.body.classList.add('touch-device')
    } else {
        document.body.classList.add('hover-device')
    }

    if(document.body.classList.contains('touch-device')) {
        
        calcHeight()

        window.addEventListener('resize', () => {
            setTimeout(function () {
                calcHeight()
            }, 500)
        })

        window.addEventListener('orientationchange', () => {
            setTimeout(function () {
                calcHeight()
            }, 500)
        })
    }
})