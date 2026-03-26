const calendarDates = document.getElementById("calendarDates");
const currentMonthElement = document.getElementById("currentMonth");

// const today = new Date(); // 현재 날짜를 나타내는 Date 객체를 저장한다.
const today = new Date("2025-04-12");
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let currentDate = today.getDate();

function renderCalendar() {
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const startDayOfWeek = firstDayOfMonth.getDay();
  currentMonthElement.textContent = '20250412';

  calendarDates.innerHTML = "";

  // 빈 날짜(이전 달)
  for (let i = 0; i < startDayOfWeek; i++) {
    const emptyDate = document.createElement("div");
    emptyDate.classList.add("date", "empty");
    calendarDates.appendChild(emptyDate);
  }

  // 현재 달의 날짜
  for (let i = 1; i <= daysInMonth; i++) {
    const dateElement = document.createElement("div");
    dateElement.classList.add("date");
    dateElement.textContent = i;
    calendarDates.appendChild(dateElement);

    if(i == currentDate) {
        const todayElement = document.createElement("div");
        dateElement.classList.add("calendar-today");
        dateElement.appendChild(todayElement);
    }
  }
}

renderCalendar();
