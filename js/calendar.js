const monthYear = document.getElementById('month-year');
const calendarDays = document.getElementById('calendar-days');
let current = new Date();

function renderCalendar() {
  const year = current.getFullYear();
  const month = current.getMonth();
  monthYear.textContent = current.toLocaleString('default', { month: 'long', year: 'numeric' });
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  calendarDays.innerHTML = '';
  for (let i = 0; i < firstDay; i++) {
    calendarDays.innerHTML += '<div></div>';
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const div = document.createElement('div');
    div.textContent = d;
    if (d === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
      div.className = 'today';
    }
    calendarDays.appendChild(div);
  }
}

document.getElementById('prev-month').addEventListener('click', () => {
  current.setMonth(current.getMonth() - 1);
  renderCalendar();
});

document.getElementById('next-month').addEventListener('click', () => {
  current.setMonth(current.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
