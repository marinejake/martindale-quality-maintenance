document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false');
}));
document.getElementById('estimate-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = new FormData(this);
  const subject = encodeURIComponent('Free estimate request - ' + data.get('service'));
  const body = encodeURIComponent(
    'Name: ' + data.get('name') + '\\n' +
    'Reply contact: ' + data.get('reply') + '\\n' +
    'Project type: ' + data.get('service') + '\\n\\n' +
    'Project details:\\n' + (data.get('details') || '')
  );
  window.location.href = 'mailto:doworkmarine0321@gmail.com?subject=' + subject + '&body=' + body;
});