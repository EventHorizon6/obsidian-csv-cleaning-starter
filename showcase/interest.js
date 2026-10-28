'use strict';
const form = document.getElementById('interest-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const status = document.getElementById('interest-status');
  const draft = document.getElementById('draft');
  draft.value = '';
  if (!form.reportValidity()) return;
  const text = document.getElementById('problem').value.trim();
  const allowed = ['Customer pilot', 'Partnership discussion', 'Startup advice'];
  const kind = document.getElementById('kind').value;
  if (!allowed.includes(kind) || text.length < 20 || text.length > 500 || /[\w.+-]+@[\w.-]+\.[a-z]{2,}|https?:\/\/|password|api[_ -]?key|credit card/i.test(text)) {
    status.textContent = 'Please describe only a non-sensitive problem (20–500 characters), without contact details, links or secrets.';
    return;
  }
  const rows = document.getElementById('rows').value;
  draft.value = `OBSIDIAN showcase inquiry\nInterest: ${kind}\nApproximate rows: ${rows || 'To confirm'}\nProblem: ${text}\nPlease confirm scope and a permitted private transfer method before payment or file sharing. No file or payment is included.`;
  status.textContent = 'Draft ready — NOT SENT. Copy it into the native seller-message option on the existing Fiverr listing if available. No notification has been sent.';
});