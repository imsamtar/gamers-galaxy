<script>
  import { onMount } from "svelte";

  let swiper_1;
  let swiper_2;
  let swiper_3;
  let interval;
  let mounted;

  onMount(() => (mounted = true));

  $: if (mounted) {
    interval = setInterval(() => {
      if (typeof Swiper !== "undefined") {
        // Hero Swiper
        swiper_1 = new Swiper(".hero_slider", {
          slidesPerView: 5,
          loop: true,
          spaceBetween: 25,
          speed: 1000,

          navigation: {
            nextEl: ".hero-next",
            prevEl: ".hero-prev",
          },
          breakpoints: {
            460: {
              slidesPerView: 1,
              spaceBetween: 35,
            },
            574: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          },
        });

        //
        swiper_2 = new Swiper(".live_slider", {
          slidesPerView: 2,
          loop: true,
          spaceBetween: 25,
          speed: 1000,
          // autoplay: {
          //     delay: 4000,
          //     disableOnInteraction: false,
          // },
          navigation: {
            nextEl: ".live_slider_next",
            prevEl: ".live_slider_prev",
          },
          // Responsive breakpoints
          breakpoints: {
            767: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          },
        });

        swiper_3 = new Swiper(".match-slider", {
          spaceBetween: 1,
          slidesPerView: 4,
          centeredSlides: true,
          roundLengths: true,
          loop: true,
          loopAdditionalSlides: 10,
          // Responsive breakpoints
          breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
              centeredSlides: false,
            },

            575: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          },
        });

        //
        clearInterval(interval);
      }
    }, 50);
  }
</script>
