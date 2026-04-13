const counterElement = document.getElementById("counter");

function animateCounter(target) {
  let current = 0;
  const increment = Math.max(1, Math.ceil(target / 60));

  const timer = setInterval(() => {
    current += increment;

    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    counterElement.textContent = current;
  }, 25);
}

animateCounter(127);