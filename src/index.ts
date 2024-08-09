import type { Webflow as WebflowType } from '@finsweet/ts-utils'
import Swiper from 'swiper'
import { Navigation, Pagination, Scrollbar, Autoplay, Keyboard, Mousewheel } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
// @ts-expect-error - Jquery has no types
import $ from 'jquery'

export const Webflow = window.Webflow as WebflowType

Webflow.push(() => {
    $('.slider-main_component').each(function (this: HTMLElement) {
        const swiperElement = $(this).find('.swiper')[0] as HTMLElement
        if (swiperElement) {
            const swiperAttributes = {
                // SLIDE PER VIEW AND GAP
                SLIDE_PER_VIEW: {
                    mobile: parseInt(swiperElement.getAttribute('slidePerView-mobile') as string) || 1,
                    tablet: parseInt(swiperElement.getAttribute('slidePerView-tablet') as string) || 2,
                    desktop: parseInt(swiperElement.getAttribute('slidePerView-desktop') as string) || 3,
                },
                GAP: {
                    mobile: swiperElement.getAttribute('swiper-gap-mobile') || '5%',
                    mobileLandscape: swiperElement.getAttribute('swiper-gap-mobileLandscape') || '4%',
                    tablet: swiperElement.getAttribute('swiper-gap-tablet') || '3%',
                    desktop: swiperElement.getAttribute('swiper-gap-desktop') || '2%',
                },

                // GLOBAL PROPERTIES
                speed: parseInt(swiperElement.getAttribute('swiper-speed') as string) || 700,
                isLoop: swiperElement.getAttribute('swiper-loop') === 'true',
                isCentered: swiperElement.getAttribute('swiper-centered') === 'true',
                isSlideToClickedSlide: swiperElement.getAttribute('swiper-slideToClicked') === 'true',

                KEYBOARD: {
                    enabled: swiperElement.getAttribute('swiper-keyboard') === 'true',
                    onlyInViewport: swiperElement.getAttribute('swiper-keyboard-onlyInViewport') === 'true',
                },

                MOUSEWHEEL: {
                    enabled: swiperElement.getAttribute('swiper-mousewheel') === 'true',
                    releaseOnEdges: swiperElement.getAttribute('swiper-mousewheel-releaseOnEdges') === 'true',
                },

                AUTOPLAY: {
                    delay: parseInt(swiperElement.getAttribute('swiper-autoplay-delay') as string) || 3000,
                    disableOnInteraction:
                        swiperElement.getAttribute('swiper-autoplay-disableOnInteraction') === 'true' || true,
                    pauseOnMouseEnter: swiperElement.getAttribute('swiper-autoplay-pauseOnMouseEnter') === 'true',
                },

                // SCROLLBAR PROPERTIES
                SCROLLBAR: {
                    element: $(this).find('.swiper-drag-wrapper')[0],
                    class: 'swiper-drag',
                    isDraggable: swiperElement.getAttribute('swiper-scrollbar-draggable') === 'true',
                    isSnapOnRelease: swiperElement.getAttribute('swiper-scrollbar-snapOnRelease') === 'true',
                },

                // PAGINATION PROPERTIES
                PAGINATION: {
                    wrapper: $(this).find('.swiper-bullet-wrapper')[0],
                    class: 'swiper-bullet',
                    activeClass: 'is-active',
                    type: 'button',
                    isClickable: swiperElement.getAttribute('swiper-pagination-clickable') === 'true',
                },

                // NAVIGATION PROPERTIES
                NAVIGATION: {
                    nextEl: $(this).find('.swiper-next')[0],
                    prevEl: $(this).find('.swiper-prev')[0],
                    disabledClass: 'is--disabled',
                },

                activeClass: 'is--active',
                previousClass: 'is--previous',
                nextClass: 'is--next',
            }
            console.log(swiperAttributes)
            const swiper = new Swiper(swiperElement, {
                modules: [Navigation, Pagination, Scrollbar, Autoplay, Keyboard, Mousewheel],
                // Default configuration
                speed: swiperAttributes.speed,
                slideToClickedSlide: swiperAttributes.isSlideToClickedSlide,

                slidesPerView: swiperAttributes.SLIDE_PER_VIEW.mobile,
                spaceBetween: swiperAttributes.GAP.mobile,

                loop: swiperAttributes.isLoop,
                centeredSlides: swiperAttributes.isCentered,

                autoplay: {
                    delay: swiperAttributes.AUTOPLAY.delay,
                    disableOnInteraction: swiperAttributes.AUTOPLAY.disableOnInteraction,
                },

                breakpoints: {
                    // Mobile landscape
                    480: {
                        // How many slide per view you want on mobile landscape ?
                        slidesPerView: swiperAttributes.SLIDE_PER_VIEW.mobile,
                        spaceBetween: swiperAttributes.GAP.mobileLandscape,
                    },
                    // Tablet
                    768: {
                        slidesPerView: swiperAttributes.SLIDE_PER_VIEW.tablet,
                        spaceBetween: swiperAttributes.GAP.tablet,
                    },
                    // Desktop
                    992: {
                        slidesPerView: swiperAttributes.SLIDE_PER_VIEW.desktop,
                        spaceBetween: swiperAttributes.GAP.desktop,
                    },
                },

                keyboard: {
                    enabled: swiperAttributes.KEYBOARD.enabled,
                    onlyInViewport: swiperAttributes.KEYBOARD.onlyInViewport,
                },

                mousewheel: {
                    enabled: swiperAttributes.MOUSEWHEEL.enabled,
                    releaseOnEdges: swiperAttributes.MOUSEWHEEL.releaseOnEdges,
                },

                // Bullet configuration
                navigation: {
                    nextEl: swiperAttributes.NAVIGATION.nextEl,
                    prevEl: swiperAttributes.NAVIGATION.prevEl,
                    disabledClass: swiperAttributes.NAVIGATION.disabledClass,
                },
                scrollbar: {
                    el: swiperAttributes.SCROLLBAR.element,
                    draggable: swiperAttributes.SCROLLBAR.isDraggable,
                    dragClass: swiperAttributes.SCROLLBAR.class,
                    snapOnRelease: swiperAttributes.SCROLLBAR.isSnapOnRelease,
                },
                pagination: {
                    el: swiperAttributes.PAGINATION.wrapper,
                    bulletActiveClass: swiperAttributes.PAGINATION.activeClass,
                    bulletClass: swiperAttributes.PAGINATION.class,
                    bulletElement: swiperAttributes.PAGINATION.type,
                    clickable: swiperAttributes.PAGINATION.isClickable,
                },

                slideActiveClass: swiperAttributes.activeClass,
                slidePrevClass: swiperAttributes.previousClass,
                slideNextClass: swiperAttributes.nextClass,
            })
            console.log(swiper)
        }
    })
})
