document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          event.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  const galleryCollections = {
    'instagram-shoots': {
      title: 'Instagram Shoots',
      intro: 'A rotating collection of bright, dynamic images crafted for social storytelling and engaging visual content.',
      images: [
        { src: './Photos for site/0DFB3948-3113-4C23-81F0-0BF73559EFFC_1_105_c.jpeg', alt: 'Instagram shoot sample' },
        { src: './insta photos/DSC06527 2.jpg', alt: 'Instagram shoot sample' },
        { src: './insta photos/DSC06571.JPG', alt: 'Instagram shoot sample' },
        { src: './insta photos/DSC06790.JPG', alt: 'Instagram shoot sample' },
        { src: './insta photos/DSC06815.JPG', alt: 'Instagram shoot sample' },
        { src: './insta photos/IMG_0254 3.jpeg', alt: 'Instagram shoot sample' },
        { src: './insta photos/IMG_0317 2.JPG', alt: 'Instagram shoot sample' },
        { src: './insta photos/IMG_1525.JPG', alt: 'Instagram shoot sample' },
        { src: './insta photos/IMG_1720 2.JPG', alt: 'Instagram shoot sample' },
        { src: './insta photos/IMG_2950.JPEG', alt: 'Instagram shoot sample' },
        { src: './insta photos/IMG_3157.JPG', alt: 'Instagram shoot sample' },
        { src: './insta photos/IMG_6376.JPG', alt: 'Instagram shoot sample' },
        { src: './insta photos/IMG_6383 2.JPG', alt: 'Instagram shoot sample' },
        { src: './insta photos/IMG_6433.JPG', alt: 'Instagram shoot sample' },
        { src: './insta photos/IMG_7681.JPG', alt: 'Instagram shoot sample' },
        { src: './insta photos/IMG_8813.JPEG', alt: 'Instagram shoot sample' },
        { src: './insta photos/IMG_8934 3.jpeg', alt: 'Instagram shoot sample' },
        { src: './insta photos/IMG_9897 2.JPG', alt: 'Instagram shoot sample' },
        { src: './insta photos/DSC06723.JPG', alt: 'Instagram shoot sample' },
      ],
    },
    'couples-engagement': {
      title: 'Couples & Engagement',
      intro: 'Romantic moments and joyful pairs captured in a gallery that moves through connection, light, and emotion.',
      images: [
        { src: './couples/IMG_1662.jpeg', alt: 'Couples engagement session' },
        { src: './couples/IMG_1664.jpeg', alt: 'Couples engagement session' },
        { src: './couples/IMG_1671.jpeg', alt: 'Couples engagement session' },
        { src: './couples/IMG_1690.jpeg', alt: 'Couples engagement session' },
        { src: './couples/IMG_1695 2.jpeg', alt: 'Couples engagement session' },
      ],
    },
    headshots: {
      title: 'Headshots',
      intro: 'Professional headshots and personal branding imagery that highlight confidence, clarity, and personality.',
      images: [
        { src: './headshots/A2130162-8EE6-448E-A94B-2FF33DB3C445_1_105_c.jpeg', alt: 'Headshot sample' },
        { src: './headshots/C448789C-B4AA-42FE-BBA2-94A82414F759_1_201_a.jpeg', alt: 'Headshot sample' },
        { src: './headshots/DSC07719.JPG', alt: 'Headshot sample' },
        { src: './headshots/DSC07821.JPG', alt: 'Headshot sample' },
        { src: './headshots/IMG_7547.jpg', alt: 'Headshot sample' },
        { src: './headshots/IMG_7702.jpg', alt: 'Headshot sample' },
        { src: './headshots/IMG_7707.jpg', alt: 'Headshot sample' },
        { src: './headshots/IMG_7705.jpg', alt: 'Headshot sample' },
        { src: './headshots/IMG_7727.jpg', alt: 'Headshot sample' },
        { src: './headshots/IMG_7732.jpg', alt: 'Headshot sample' },
        { src: './headshots/IMG_7733.jpg', alt: 'Headshot sample' },
      ],
    },
    brands: {
      title: 'Brands',
      intro: 'Commercial and brand storytelling imagery built for campaign, product, and editorial use.',
      images: [
        { src: './brand/IMG_9420.png', alt: 'Brand photography sample' },
        { src: './brand/IMG_9451.png', alt: 'Brand photography sample' },
        { src: './brand/IMG_9503 2.png', alt: 'Brand photography sample' },
      ],
    },
    kids: {
      title: 'Kids',
      intro: 'Bright, playful photography that celebrates energy, wonder, and the fun of childhood.',
      images: [
        { src: './kids photos/IMG_4218.jpeg', alt: 'Kids portrait sample' },
        { src: './kids photos/IMG_4220.jpeg', alt: 'Kids portrait sample' },
        { src: './kids photos/IMG_5349.jpeg', alt: 'Kids portrait sample' },
        { src: './kids photos/5AEAF336-98A0-4446-AC49-350B870977FC_1_105_c.jpeg', alt: 'Kids portrait sample' },
      ],
    },
    'senior-photos': {
      title: 'Senior Photos',
      intro: 'Timeless senior portraits with personality, style, and a fresh visual narrative.',
      images: [
        { src: './Senior photos/DSC06571 2.JPG', alt: 'Senior portrait sample' },
        { src: './Senior photos/DSC06790 2.JPG', alt: 'Senior portrait sample' },
        { src: './Senior photos/DSC07796.JPG', alt: 'Senior portrait sample' },
        { src: './Senior photos/IMG_1464.jpeg', alt: 'Senior portrait sample' },
        { src: './Senior photos/IMG_1898.jpg', alt: 'Senior portrait sample' },
        { src: './Senior photos/IMG_1933.jpg', alt: 'Senior portrait sample' },
        { src: './Senior photos/IMG_1989.jpg', alt: 'Senior portrait sample' },
        { src: './Senior photos/IMG_2046.jpeg', alt: 'Senior portrait sample' },
        { src: './Senior photos/IMG_2086.jpeg', alt: 'Senior portrait sample' },
        { src: './Senior photos/IMG_2181.jpeg', alt: 'Senior portrait sample' },
        { src: './Senior photos/IMG_2950.JPEG', alt: 'Senior portrait sample' },
        { src: './Senior photos/IMG_3624.jpeg', alt: 'Senior portrait sample' },
      ],
    },
    nature: {
      title: 'Nature Photography',
      intro: 'Stunning landscapes and outdoor scenes capturing the beauty of the natural world.',
      images: [
        { src: './Photos for site/DSC07719.JPG', alt: 'Nature photography sample' },
        { src: './Photos for site/IMG_1525.JPG', alt: 'Nature photography sample' },
      ],
    },
    events: {
      title: 'Event Photography',
      intro: 'Capturing the energy and moments of weddings, parties, and special occasions.',
      images: [
        { src: './Photos for site/IMG_6433.JPG', alt: 'Event photography sample' },
        { src: './Photos for site/IMG_7547.jpg', alt: 'Event photography sample' },
        { src: './Photos for site/IMG_7726.jpg', alt: 'Event photography sample' },
      ],
    },
    family: {
      title: 'Family Sessions',
      intro: 'Heartwarming family portraits that preserve memories and celebrate relationships.',
      images: [
        { src: './Photos for site/IMG_7732.jpg', alt: 'Family session photography' },
        { src: './Photos for site/IMG_7733.jpg', alt: 'Family session photography' },
        { src: './Photos for site/IMG_7727.jpg', alt: 'Family session photography' },
        { src: './Photos for site/IMG_7728.jpg', alt: 'Family session photography' },
      ],
    },
  };

  function getQueryParam(key) {
    return new URLSearchParams(window.location.search).get(key);
  }

  function populateGalleryPage() {
    const gallerySlug = getQueryParam('gallery');
    if (!gallerySlug) return;

    const gallerySection = document.querySelector('.gallery-section');
    if (!gallerySection) return;

    const config = galleryCollections[gallerySlug];
    const titleElement = gallerySection.querySelector('.section-header h2');
    const introElement = gallerySection.querySelector('.page-intro');
    const track = gallerySection.querySelector('.carousel-track');
    const indicators = gallerySection.querySelector('.carousel-indicators');
    const backButton = gallerySection.querySelector('.gallery-page-actions a');

    if (!config) {
      titleElement.textContent = 'Gallery not found';
      introElement.textContent = 'Please return to the portfolio to select a valid collection.';
      track.innerHTML = '<div class="carousel-slide current-slide"><img src="./Photos for site/IMG_5448.jpeg" alt="Gallery not found" /></div>';
      indicators.innerHTML = '<button class="carousel-indicator active" aria-label="Slide 1"></button>';
      document.title = 'Gallery not found | Sunfest Photos';
      backButton.textContent = 'Back to Portfolio';
      return;
    }

    document.title = `${config.title} | Sunfest Photos`;
    titleElement.textContent = config.title;
    introElement.textContent = config.intro;
    track.innerHTML = config.images
      .map((image, index) => `
        <div class="carousel-slide${index === 0 ? ' current-slide' : ''}">
          <img src="${image.src}" alt="${image.alt}" />
        </div>
      `)
      .join('');
    indicators.innerHTML = config.images
      .map((_, index) => `
        <button class="carousel-indicator${index === 0 ? ' active' : ''}" aria-label="Slide ${index + 1}"></button>
      `)
      .join('');
  }

  populateGalleryPage();

  const carousels = document.querySelectorAll('.carousel');

  function initCarousel(carousel) {
    const track = carousel.querySelector('.carousel-track');
    let slides = Array.from(track.children);
    const prevButton = carousel.querySelector('.carousel-button--prev');
    const nextButton = carousel.querySelector('.carousel-button--next');
    const indicators = Array.from(carousel.querySelectorAll('.carousel-indicator'));
    const slideCount = slides.length;

    if (slideCount === 0) return;

    if (slideCount > 1) {
      const firstClone = slides[0].cloneNode(true);
      const lastClone = slides[slides.length - 1].cloneNode(true);
      track.appendChild(firstClone);
      track.insertBefore(lastClone, track.firstChild);
      slides = Array.from(track.children);
    }

    let currentIndex = slideCount > 1 ? 1 : 0;

    function getRealIndex(index) {
      if (slideCount === 1) return 0;
      if (index === 0) return slideCount - 1;
      if (index === slideCount + 1) return 0;
      return index - 1;
    }

    function setActiveIndicator(index) {
      const realIndex = getRealIndex(index);
      indicators.forEach((indicator, indicatorIndex) => {
        indicator.classList.toggle('active', indicatorIndex === realIndex);
      });
    }

    function updateCarousel(index, instant = false) {
      const slideWidth = slides[0].offsetWidth;
      const trackGap = parseFloat(getComputedStyle(track).gap) || 0;
      const carouselWidth = carousel.offsetWidth;
      const centerOffset = (carouselWidth - slideWidth) / 2;
      const offset = index * (slideWidth + trackGap) - centerOffset;

      track.style.transition = instant ? 'none' : 'transform 0.4s ease';
      track.style.transform = `translateX(-${offset}px)`;

      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle('current-slide', slideIndex === index);
      });

      setActiveIndicator(index);
      currentIndex = index;

      if (instant) {
        void track.offsetHeight;
        track.style.transition = 'transform 0.4s ease';
      }
    }

    function goToNextSlide() {
      updateCarousel(currentIndex + 1);
    }

    function goToPreviousSlide() {
      updateCarousel(currentIndex - 1);
    }

    track.addEventListener('transitionend', () => {
      if (slideCount <= 1) return;
      if (currentIndex === 0) {
        updateCarousel(slideCount, true);
      } else if (currentIndex === slideCount + 1) {
        updateCarousel(1, true);
      }
    }, { once: false });

    prevButton.addEventListener('click', goToPreviousSlide);
    nextButton.addEventListener('click', goToNextSlide);

    indicators.forEach((indicator, indicatorIndex) => {
      indicator.addEventListener('click', () => updateCarousel(indicatorIndex + 1));
    });

    setInterval(goToNextSlide, 5000);
    updateCarousel(currentIndex, true);
  }

  carousels.forEach(initCarousel);
});
