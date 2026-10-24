const startBtn = document.getElementById("start-btn");
        startBtn.addEventListener("click", () => { window.electronAPI.loadPage("quiz.html"); })