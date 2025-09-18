const root = document.documentElement;
const btn = document.getElementById('theme-toggle');

function apply(theme) {
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    btn.textContent = 'Dark mode';
  } else {
    root.removeAttribute('data-theme');
    btn.textContent = 'Light mode';
  }
}
const saved = localStorage.getItem('theme') || 'light';
apply(saved);

btn?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  apply(next);
});
