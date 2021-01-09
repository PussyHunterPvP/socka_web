const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text', {y: '0%', duration: 0.5, stagger: 0.5}, '+=1');
tl.to('.slider', {y: '-100%', duration: 1.7}, '+=3');
tl.to('.intro', {y: '-100%', duration:1 }, '-=1');
