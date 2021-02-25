if (document.body.animate) {
  document.querySelector('#button').addEventListener('click', pop);
}

function pop (e) {
  if (e.clientX === 0 && e.clientY === 0) {
    const bbox = document.querySelector('#button').getBoundingClientRect();
    const x = bbox.left + bbox.width / 2;
    const y = bbox.top + bbox.height / 2;
    for (let i = 0; i < 270; i++) {
      createParticle(x, y);
    }
  } else {
    for (let i = 0; i < 270; i++) {
      createParticle(e.clientX, e.clientY);
    }
  }
}

function createParticle (x, y) {
  const particle = document.createElement('particle');
  document.body.appendChild(particle);
  
  const size = Math.floor(Math.random() * 20 + 5);
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;
  
  const destinationX = x + (Math.random() - 0.5) * 2 * 350;
  const destinationY = y + (Math.random() - 0.5) * 2 * 350;

  const animation = particle.animate([
    {
      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
      opacity: 1
    },
    {
      transform: `translate(${destinationX}px, ${destinationY}px)`,
      opacity: 0
    }
  ], {
    duration: Math.random() * 5000 + 500,
    easing: 'cubic-bezier(0, .9, .57, 1)',
    delay: Math.random() * 200
  });
  
  animation.onfinish = () => {
    particle.remove();
  };
}
document.getElementById("spinner").addEventListener("click",()=>{
  document.getElementById("spinner").className = "spin spinner_div"
  var count = 5
  window.setInterval(() => {
      if (count < 10) {
          window.open(url[getRandom()], "_blank")
      }
      else {
          window.clearInterval()
      }
  }, 500);
})
document.getElementById("button").addEventListener("click",()=>{
  var count = 5
  // const open = url[getRandom()]
  document.getElementById("spinner").className = "spin spinner_div"
  window.setInterval(() => {
      if (count < 10) {
          window.open(url[getRandom()], "_blank")
      }
      else {
          window.clearInterval()
      }
  }, 500);
})
document.getElementById("floating_winner").addEventListener("click",()=>{
  var count = 5
  // const open = url[getRandom()]
  document.getElementById("spinner").className = "spin spinner_div"
  window.setInterval(() => {
      if (count < 10) {
          window.open(url[getRandom()], "_blank")
      }
      else {
          window.clearInterval()
      }
  }, 500);
})
