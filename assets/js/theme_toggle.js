(function() {
  var KEY = 'nsp-appearance';
  var body = document.body;
  var btn = document.getElementById('theme-toggle');

  var stored = localStorage.getItem(KEY);
  if (stored) body.setAttribute('a', stored);

  function isDark() {
    var a = body.getAttribute('a');
    if (a === 'dark') return true;
    if (a === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function updateLabel() {
    btn.title = isDark() ? 'Switch to light mode' : 'Switch to dark mode';
  }

  btn.addEventListener('click', function() {
    var next = isDark() ? 'light' : 'dark';
    body.setAttribute('a', next);
    localStorage.setItem(KEY, next);
    updateLabel();
  });

  updateLabel();
})();
