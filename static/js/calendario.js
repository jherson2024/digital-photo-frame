let currentDate = new Date();

function generateCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendarGrid = document.getElementById("calendar-grid");
    const monthYearElement = document.getElementById("month-year");

    // Actualizar encabezado del calendario
    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    monthYearElement.textContent = `${monthNames[month]} ${year}`;

    // Limpiar el grid
    calendarGrid.innerHTML = "";

    // Agregar días vacíos al principio
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("article");
        emptyCell.classList.add("empty-day");
        calendarGrid.appendChild(emptyCell);
    }

    // Agregar días del mes
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement("span");
        dayCell.classList.add("day");
        dayCell.textContent = day;

        // Resaltar el día actual
        const today = new Date();
        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            dayCell.classList.add("current");
        }

        calendarGrid.appendChild(dayCell);
    }
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate);
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate);
}
