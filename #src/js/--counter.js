function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

if (obj = document.getElementById("value-25000")) {
  animateValue(obj, 0, 25000, 2000);
}

if (obj = document.getElementById("value-500")) {
  animateValue(obj, 0, 500, 2000);
}

if (obj = document.getElementById("value-30")) {
  animateValue(obj, 0, 30, 2000);
}

if (obj = document.getElementById("value-10")) {
  animateValue(obj, 0, 10, 2000);
}