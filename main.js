const tl = gsap.timeline({ repeat: 3, yoyo: true })

tl.from('.anime', { duration: 1, opacity: 0, scale: 0.3, ease: 'bounce' })

tl.to(
  '.box',
  {
    duration: 2,
    rotation: 360,
    x: 100,
    stagger: 0.3,
  },
  '+=1'
)

// tween.pause()

// document
//   .querySelector('.pause-btn')
//   .addEventListener('click', () => tween.pause())

// document
//   .querySelector('.play-btn')
//   .addEventListener('click', () => tween.play())

// document
//   .querySelector('.seek-btn')
//   .addEventListener('click', () => tween.seek(2))

// document
//   .querySelector('.progress-btn')
//   .addEventListener('click', () => tween.progress(0.5))
