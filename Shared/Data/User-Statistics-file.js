

let DefaultStatistics={

    TaskesCreated:0,
    DoneTasks:0,
    NotesCreated:0,
    CurrentStreek:0,
    CompletionRate:0,
    TottalTasks:0,
    lastVisit:null

}



export function IncrementTodayActivity(type) {

    const Today = new Date().toDateString();

    let Activity = JSON.parse(localStorage.getItem("DailyActivity")) || {};

    // Create today's record if it doesn't exist
    if (!Activity[Today]) {
        
        Activity[Today] = {
            tasks: 0,
            notes: 0
        };
    }

    // Increase today's task or note count
    Activity[Today][type] += 1;

    localStorage.setItem("DailyActivity", JSON.stringify(Activity));
}



export function DecrementTodayActivity(type) {

    const Today = new Date().toDateString();

    let Activity =
        JSON.parse(localStorage.getItem("DailyActivity")) || {};

    if (!Activity[Today]) return;

    Activity[Today][type] -= 1;

    if (Activity[Today][type] < 0) {
        Activity[Today][type] = 0;
    }

    localStorage.setItem(
        "DailyActivity",
        JSON.stringify(Activity)
    );
}




export{DefaultStatistics}