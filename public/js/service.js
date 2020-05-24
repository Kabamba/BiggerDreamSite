(function () {
    const liens = document.querySelectorAll('.service-nav ul li a');

    const serviceNav = document.querySelector('.service-nav');
    const serviceToggle = document.querySelector('.service-toggle')
    const serviceUl = document.querySelector('.service-nav ul');

    /** Function **/
    var onscroll = e => {
        if (this.document.documentElement.scrollTop) {
            serviceNav.classList.add('fixed');

        } else {
            serviceNav.classList.remove('fixed');

        }
    }

    let serviceTgg = function (e) {
        if (serviceUl.style.width) {

            serviceUl.style.width = null;
        } else {
            serviceUl.style.width = '200px';
        }
    }


    liens.forEach(lien => {
        lien.addEventListener('click', function (e) {
            var li = this.parentNode;
            var serviceMenu = this.parentNode.parentNode.parentNode;
            var services = this.parentNode.parentNode.parentNode.parentNode.parentNode;

            const internet = services.querySelector('.internet')
            const commerce = services.querySelector('.commerce')
            const responsive = services.querySelector('.responsive')
            const referent = services.querySelector('.referent')

            if (li.classList.contains('active')) {
                return false;
            }
            serviceMenu.querySelector('ul .active').classList.remove('active');
            li.classList.add('active');

            if (e.target.id === 'internet') {
                internet.classList.add('active');
            } else {
                internet.classList.remove('active');

            }

            if (e.target.id === 'commerce') {

                commerce.classList.add('active');
            } else {
                commerce.classList.remove('active');

            }

            if (e.target.id === 'responsive') {
                responsive.classList.add('active');

            } else {
                responsive.classList.remove('active');

            }

            if (e.target.id === 'referent') {
                referent.classList.add('active');
            } else {
                referent.classList.remove('active');

            }

        })
    })

    /** Event */
    window.addEventListener('scroll', onscroll);
    serviceToggle.addEventListener('click', serviceTgg);

})()