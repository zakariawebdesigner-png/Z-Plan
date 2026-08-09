// Initializes the analog clock in the #analog-clock-dark div.
// Only ONE LiveClockUI instance is created — creating two on the
// same element makes them fight over the DOM and can break rendering.

const profileOf_Header=document.getElementById("Profile");
       
   profileOf_Header.style.backgroundImage=localStorage.getItem("ProfilePhoto");
const ProfilePic=document.getElementById("ProfilePic");

ProfilePic.style.backgroundImage=localStorage.getItem("ProfilePhoto");

const clock = new ClockUI.LiveClockUI("#analog-clock-dark", {
    hideSeconds: false,
    useRoman: false,
    dualTone: true,
    smoothSweep: true
});


document.addEventListener("DOMContentLoaded", function () {
 
    // --- 1. Replace this with your real data source (API, localStorage, etc.) ---
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const tasksDone = [5, 3, 7, 4, 6, 2, 1];
    const notesAdded = [3, 6, 2, 4, 1, 5, 2];
 
    // --- 2. Coefficients ---
    const DONE_COEF = 2;
    const NOTES_COEF = 1;
 
    // --- 3. Weighted score per day (available if you want to show it elsewhere) ---
    const weeklyScores = days.map((day, i) => ({
        day,
        score: tasksDone[i] * DONE_COEF + notesAdded[i] * NOTES_COEF
    }));
 
    // --- 4. Chart colors matching the existing theme ---
    const tasksColor = "#539ae6";   // same blue used in .lastDiv4 / TasksCreated card
    const notesColor = "#983cfb";   // same purple used in .lastDiv3 / NotesCreated card
    const gridColor = "rgba(255,255,255,0.08)";
    const textColor = "rgba(255,255,255,0.75)";
 
    const canvas = document.getElementById("weeklyStateChart");
    if (!canvas) return;
 
    new Chart(canvas, {
        type: "bar",
        data: {
            labels: days,
            datasets: [
                {
                    label: "Tasks done",
                    data: tasksDone,
                    backgroundColor: tasksColor,
                    borderRadius: 6,
                    maxBarThickness: 22
                },
                {
                    label: "Notes added",
                    data: notesAdded,
                    backgroundColor: notesColor,
                    borderRadius: 6,
                    maxBarThickness: 22
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: "#0b1440",
                    titleColor: "#ffffff",
                    bodyColor: "#ffffff",
                    borderColor: "rgba(130,190,255,0.4)",
                    borderWidth: 1,
                    callbacks: {
                        afterBody: function (items) {
                            const i = items[0].dataIndex;
                            const score = tasksDone[i] * DONE_COEF + notesAdded[i] * NOTES_COEF;
                            return "Weighted score: " + score;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: gridColor },
                    ticks: { color: textColor, stepSize: 1 }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: textColor }
                }
            }
        }
    });
 
    // Expose for use elsewhere on the page (e.g. an "Activity" widget)
    window.weeklyScores = weeklyScores;
});
