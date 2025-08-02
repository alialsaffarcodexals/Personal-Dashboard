const noteArea = document.getElementById('note-area');
const saveBtn = document.getElementById('save-note');

noteArea.value = localStorage.getItem('note') || '';

saveBtn.addEventListener('click', () => {
  localStorage.setItem('note', noteArea.value);
});
