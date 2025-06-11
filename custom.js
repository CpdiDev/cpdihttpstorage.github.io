function applyCustomizations() {
  // 1) Rename label → Username
  document.querySelector('label[for="signInName"]')?.textContent = 'Username';

  // 2) Rename Continue → Sign in
  document.getElementById('continue')?.textContent = 'Sign in';

  // 3) Inject lock/unlock toggle
  const pwd = document.getElementById('password');
  if (pwd && !pwd.parentElement.querySelector('.btn-toggle')) {
    const wrapper = pwd.parentElement;
    wrapper.classList.add('input-group', 'mb-3');

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn-outline-secondary btn-toggle';
    btn.setAttribute('aria-label', 'Show password');
    btn.innerHTML = '<i class="bi bi-lock-fill"></i>';

    btn.addEventListener('click', () => {
      const isPw = pwd.type === 'password';
      pwd.type = isPw ? 'text' : 'password';
      btn.firstElementChild.className = isPw
        ? 'bi bi-unlock-fill'
        : 'bi bi-lock-fill';
    });

    wrapper.appendChild(btn);
  }
}

// B2C fires this when its React form is ready
window.addEventListener('api.ready', applyCustomizations);
// Fallback in case it’s too early/late
setTimeout(applyCustomizations, 1000);
