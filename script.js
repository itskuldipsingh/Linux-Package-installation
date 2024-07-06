const copyCodeBtns = document.querySelectorAll('.copy-code-btn');

copyCodeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const code = btn.previousSibling.textContent;
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  });
});
