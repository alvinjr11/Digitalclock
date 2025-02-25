// digital clock program
function updateClock(){
    const now=new Date();
    let hours=now.getHours().toString().padStart(2,0);
    const meridium=hours>=12?"PM":"AM";
    const minutes=now.getMinutes().toString().padStart(2,0);;
    const seconds=now.getSeconds().toString().padStart(2,0);;
    const timeString=`${hours}:${minutes}:${seconds}:${meridium}`
    document.getElementById("clock").textContent=timeString;
}
updateClock()
setInterval(updateClock,1000)