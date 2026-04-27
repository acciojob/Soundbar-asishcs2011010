
const elem = document.querySelector("#buttons");

elem.addEventListener('click', (e) => {
  
    if (!e.target.classList.contains("btn") && !e.target.classList.contains("stop")) 
        {
        return;
        }
  const btnElem = e.target;
  const text = btnElem.innerText.trim().toLowerCase();

  const audioTrack = document.querySelector(`#${text}`);
  
    document.querySelectorAll(".audio").forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
    })
    if (text !== "stop" && audioTrack) {
      audioTrack.play();
   }
})