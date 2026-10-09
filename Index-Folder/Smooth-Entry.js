function SlideATVisible(elements) {

    function checkElements() {

        elements.forEach(element => {

            const rect = element.getBoundingClientRect();

            const enterPoint = window.innerHeight * 0.98;
            const leavePoint = window.innerHeight * 0.20;

            if (rect.top < enterPoint && rect.bottom > leavePoint) {
                element.classList.add("SlideElement");
            }

            else if (rect.top > enterPoint || rect.bottom < leavePoint) {
                element.classList.remove("SlideElement");
            }

        });

    }

    window.addEventListener("scroll", checkElements);

    checkElements();
}

export { SlideATVisible };