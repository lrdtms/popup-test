document.getElementById('btn1').addEventListener('click', () => document.getElementById('popup1').showModal());
document.getElementById('btn2').addEventListener('click', () => document.getElementById('popup2').showModal());
document.querySelectorAll('dialog .close').forEach(b => b.addEventListener('click', () => b.closest('dialog').close()));
