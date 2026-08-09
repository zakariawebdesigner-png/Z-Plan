const warningSound = new Audio("sound/alert.wav");
warningSound.preload = "auto";

document.addEventListener("click", (event) => {
    const lockedElement = event.target.closest(
        'a:has(span.lock), button:has(span.lock), div:has(span.lock), li:has(span.lock)'
    );

    if (!lockedElement) return;

    warningSound.currentTime = 0;
    warningSound.play().catch((error) => {
        console.warn("Warning sound could not play:", error);
    });

    alert(
        "These features will be soon available on the version 2.0 of this project , thanks for reading"
    );
});