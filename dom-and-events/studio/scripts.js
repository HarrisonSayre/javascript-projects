// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');

    let flightStatusElement = document.getElementById("flightStatus");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");

    takeoffButton.addEventListener('click', function(event){
        let answer = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if(answer){
            flightStatusElement.innerText = 'Shuttle in flight';
            document.getElementById("shuttleBackground").style.backgroundColor = 'blue';
            shuttleHeight.innerText = String((Number(shuttleHeight.innerText)+10000));
            //paragraph.innerHTML = 'Mission aborted! Space shuttle returning home';
        }
    });
    landingButton.addEventListener('click', function(event){
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatusElement.innerText = 'The shuttle has landed.';
        document.getElementById("shuttleBackground").style.backgroundColor = 'green';
        shuttleHeight.innerText = '0';
    });
    abortButton.addEventListener('click', function(event){
        let answer = window.confirm('Confirm that you want to abort the mission');
        if(answer){
            flightStatusElement.innerText = 'Mission aborted.';
            document.getElementById("shuttleBackground").style.backgroundColor = 'green';
            shuttleHeight.innerText = '0';
        }
    });
    upButton.addEventListener('click', function(event){
        //document.getElementById("rocket").height = 85;
        document.getElementById("rocket").style.bottom = String(parseInt(document.getElementById("rocket").style.bottom)+10)+"px";
    });


}

window.addEventListener("load", init);
