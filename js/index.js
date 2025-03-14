document.addEventListener('DOMContentLoaded', () => {

    (function () {
        const switches = document.querySelectorAll('[switch]');

        if (switches.length > 0) {
            switches.forEach((item, _) => {
                item.addEventListener('click', () => {
                    const target = item.getAttribute('switch');
                    if (target) {

                        document.querySelector('.header').classList.remove('header__burger--active');

                        const y = document.getElementById(`${target}`).offsetTop;

                        window.scrollTo({
                            top: y,
                            left: 0,
                            behavior: 'smooth',
                        });

                    }
                });
            })
        }

    })();

    (function () {
        const header = document.querySelector('.header');
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 50) {
                header.classList.add('header-active');
            } else {
                if (header.classList.contains('header-active')) {
                    header.classList.remove('header-active');
                }
            }
        });
    })();

    (function () {
        const swiper = new Swiper('.welcome__swiper', {
            loop: true,
            autoplay: {
                delay: 4000,
            },
            speed: 800,
            freeMode: true,
            slidesPerView: 1,
        });
    })();

    (function () {
        const swiper = new Swiper(".project__swiper", {
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 4000,
            },
            speed: 800,
            freeMode: true,
            slidesPerView: 2,
            spaceBetween: 25,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 20,
                slideShadows: false,
            },

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },

                768: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                }

            }

        });
    })();

    (function () {
        const DELAY = 3000;
        const buttonSend = document.querySelector('.contacts__form-button');
        const allFields = document.querySelectorAll('.contacts__form-field');

        function addClassErrorField(item) {
            item.classList.add('error-field');

            setTimeout(() => {
                item.classList.remove('error-field');
            }, DELAY);
        }

        if (allFields.length > 0) {
            buttonSend.addEventListener('click', () => {
                const validate = { email: true, name: true, phone: true, message: true };

                allFields.forEach((item, _) => {
                    switch (item.name) {
                        case "email": {
                            var validationEmail =
                                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                            if (!validationEmail.test(String(item.value).toLowerCase())) {
                                validate.email = false;
                                addClassErrorField(item);
                            }
                            break;
                        }
                        case "phone": {
                            if (item.value < 10) {
                                validate.phone = false;
                                addClassErrorField(item);
                            }
                            break;
                        }
                        case "name": {
                            if (!item.value) {
                                validate.name = false;
                                addClassErrorField(item);
                            }
                            break;
                        }
                        case "message": {
                            if (item.value < 10) {
                                validate.message = false;
                                addClassErrorField(item);
                            }
                            break;
                        }
                    }
                });

                if (!Object.entries(validate).map(([_, value]) => value).includes(false)) {
                    buttonSend.setAttribute('type', 'submit');
                }

            });
        }

    })();

    (function () {
        const accordions = document.querySelectorAll('.accordion');

        if (accordions.length) {
            accordions.forEach((item, _) => {

                const header = item.children[0];
                const content = item.children[1];
                const contentSize = content.getBoundingClientRect().height;

                content.style.maxHeight = '0px';

                header.addEventListener('click', function () {

                    accordions.forEach((accordionItem) => {
                        accordionItem.classList.remove('accordion--active');
                        accordionItem.children[1].style.maxHeight = '0px';
                    });

                    if (content.getBoundingClientRect().height <= 0) {
                        content.style.maxHeight = `${contentSize}px`;
                        item.classList.add('accordion--active');
                    }

                });
            })
        }

    })();

    (function () {
        const burger = document.querySelector('.header__burger');
        burger.addEventListener('click', function () {
            this.closest('.header').classList.toggle('header__burger--active');
        });
    })();

});
