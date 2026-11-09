document.getElementById('btn1').addEventListener('click', () => document.getElementById('popup1').showModal());
document.getElementById('btn2').addEventListener('click', () => document.getElementById('popup2').showModal());
document.querySelectorAll('dialog .close').forEach(b => b.addEventListener('click', () => b.closest('dialog').close()));

// Floating pads
(function () {
  const box = document.getElementById('floaters');
  const count = window.innerWidth < 600 ? 7 : 12;
  const rnd = (a, b) => a + Math.random() * (b - a);
  const vw = () => window.innerWidth, vh = () => window.innerHeight;
  for (let i = 0; i < count; i++) {
    const img = document.createElement('img');
    img.src = 'pad.svg'; img.alt = ''; img.className = 'pad';
    const w = rnd(35, 80);
    const s = img.style;
    s.setProperty('--w', w + 'px');
    s.setProperty('--dur', rnd(14, 30) + 's');
    s.setProperty('--delay', -rnd(0, 20) + 's');
    for (let k = 0; k < 3; k++) {
      s.setProperty('--x' + k, rnd(-0.05, 0.95) * vw() + 'px');
      s.setProperty('--y' + k, rnd(-0.05, 0.9) * vh() + 'px');
      s.setProperty('--r' + k, rnd(-60, 60) + 'deg');
    }
    box.appendChild(img);
  }
})();
