windows.onload = function (){
    displayCurrent();
    displayTime2();
    displayTime3();
}

function locationTime (offset){
    let localeDate = new Date;
    let localeTime = localeDate.getTime();
    let localeOffset = localeDate.getTimezoneOffset() * 60000;
    let utc = localOffset + localTime;
    let currentLocationTime = utc + (3600000 * offset);
    let locationDate = new Date(currentLocationTime);
    return locationDate;
}

const city = ""
let accraTime= locationTime(0);
let baghdadTime= locationTime(3);
let capetownTime= locationTime(1);
let dubaiTime= locationTime(4);
let dublinTime= locationTime(0);
let hongkongTime= locationTime(8);
let lagosTime= locationTime(1);
let lisbonTime= locationTime(0);
let londonTime= locationTime(0);
let parisTime= locationTime(1);
let newyorkTime= locationTime(-5);
let romeTime= locationTime(1);
let saopaoloTime= locationTime(-3);
let tokyoTime= locationTime(9);
let torontoTime= locationTime(-5);


function selectTime (){
let newTime = new Date;
if (city === "Select") {
        alert("No city selected!! Please select city");
    }
    else if (city === "Accra") {
       newTime = accraTime;
        }
    else if (city === "Baghdad") {
        newTime = baghdadTime;
    }
    else if (city === "Capetown") {
        newTime = capetownTime;
    }else if (city === "Dubai") {
        newTime = dubaiTime;
    }
    else if (city === "Dublin") {
        newTime = dublinTime;
    }
    else if (city === "Hongkong") {
        newTime = hongkongTime;
    }
    else if (city === "Lagos") {
        newTime = lagosTime;
    }
    else if (city === "Lisbon") {
        newTime = lisbonTime;
    }
    else if (city === "London") {
        newTime = londonTime;
    }
    else if (city === "Paris") {
        newTime = parisTime;
    }
    else if (city === "Newyork") {
       newTime = newyorkTime;
        }
    else if (city === "Rome") {
        newTime = romeTime;
    }
    else if (city === "Saopaulo") {
        newTime = saopaoloTime;
    }
    else if (city === "Tokyo") {
        newTime = tokyoTime;
    }
    else if (city === "Toronto") {
        newTime = torontoTime;
    }
    return newTime;
    }
}

function displayCurrent(){
    let canvas1 = document.getElementById("canvas1");
    let canvasObj1 = canvas1.getContext('2d');
    showClock(currentLocationTime, canvasObj1, canvas1);
}

function displayTime2() {
    let canvas2 = document.getElementById("canvas2");
    let canvasObj2 = canvas2.getContext('2d');
    showClock(selectedTime, canvasObj2, canvas2);
}
function displayTime3(){
    let canvas3 = document.getElementById("canvas3");
    let canvasObj3 = canvas3.getContext('2d');
    showClock(selectedTime, canvasObj3, canvas3);
}

function showClock(date, canvasObj, canvas){
            let angle;
            let secHandLength = 160;
            let nightHours = date.getHours();
            canvasObj.clearRect(0, 0, canvas.width, canvas.height);        

            
            outerFace();
            centerFace();
            hourMark();
            secondsMark();
            drawSeconds();
            drawMinutes();
            drawHours();


            function outerFace() {

                if ((nightHours>=0 && nightHours<=6) || (nightHours>=18 && nightHours<=23)){ 
                    canvasObj.fillStyle= "#000000";   
                } else {
                    canvasObj.fillStyle= "#ffffff";
                }
                    canvasObj.beginPath();
                    canvasObj.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 , 0, Math.PI * 2);
                    canvasObj.fill();

            }
            
            function centerFace() {
                canvasObj.beginPath();
                canvasObj.arc(canvas.width / 2, canvas.height / 2, 2, 0, Math.PI * 2);
                canvasObj.lineWidth = 3;
                if ((nightHours>=0 && nightHours<=6) || (nightHours>=18 && nightHours<=23)){ 
                    canvasObj.fillStyle = '#ffffff';
                    canvasObj.strokeStyle = '#ffffff';
                }else{
                    canvasObj.fillStyle = '#000000';
                    canvasObj.strokeStyle = '#000000';
                }
                canvasObj.stroke();
            }

            function hourMark() {

                for (let i = 0; i < 12; i++) {
                    angle = (i - 3) * (Math.PI * 2) / 12;       // THE ANGLE TO MARK.
                    canvasObj.lineWidth = 1;            // HAND WIDTH.
                    canvasObj.beginPath();

                    let x1 = (canvas.width / 2) + Math.cos(angle) * (secHandLength);
                    let y1 = (canvas.height / 2) + Math.sin(angle) * (secHandLength);
                    let x2 = (canvas.width / 2) + Math.cos(angle) * (secHandLength - (secHandLength / 7));
                    let y2 = (canvas.height / 2) + Math.sin(angle) * (secHandLength - (secHandLength / 7));

                    canvasObj.moveTo(x1, y1);
                    canvasObj.lineTo(x2, y2);

                    if ((nightHours>=0 && nightHours<=6) || (nightHours>=18 && nightHours<=23)){
                        canvasObj.strokeStyle = '#ffffff';
                    }else{
                        canvasObj.strokeStyle = '#000000';
                    }

                    canvasObj.stroke();
                }
            }

            function secondsMark() {

                for (let i = 0; i < 60; i++) {
                    angle = (i - 3) * (Math.PI * 2) / 60;       // THE ANGLE TO MARK.
                    canvasObj.lineWidth = 1;            // HAND WIDTH.
                    canvasObj.beginPath();

                    let x1 = (canvas.width / 2) + Math.cos(angle) * (secHandLength);
                    let y1 = (canvas.height / 2) + Math.sin(angle) * (secHandLength);
                    let x2 = (canvas.width / 2) + Math.cos(angle) * (secHandLength - (secHandLength / 30));
                    let y2 = (canvas.height / 2) + Math.sin(angle) * (secHandLength - (secHandLength / 30));

                    canvasObj.moveTo(x1, y1);
                    canvasObj.lineTo(x2, y2);

                    canvasObj.strokeStyle = '#C4D1D5';
                    canvasObj.stroke();
                }
            }

            function drawSeconds() {

                let sec = date.getSeconds();
                angle = ((Math.PI * 2) * (sec / 60)) - ((Math.PI * 2) / 4);
                canvasObj.lineWidth = 0.5;              
                canvasObj.beginPath();
                canvasObj.moveTo(canvas.width / 2, canvas.height / 2);   
                canvasObj.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength),
                    canvas.height / 2 + Math.sin(angle) * secHandLength);

                canvasObj.moveTo(canvas.width / 2, canvas.height / 2);    
                canvasObj.lineTo((canvas.width / 2 - Math.cos(angle) * 20),
                canvas.height / 2 - Math.sin(angle) * 20);

                canvasObj.strokeStyle = '#D33C37';
                canvasObj.stroke();
            }

            function drawMinutes() {

                let min = date.getMinutes();
                angle = ((Math.PI * 2) * (min / 60)) - ((Math.PI * 2) / 4);
                canvasObj.lineWidth = 1.5;              
                canvasObj.beginPath();
                canvasObj.moveTo(canvas.width / 2, canvas.height / 2);  
                canvasObj.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength / 1.1),      
                    canvas.height / 2 + Math.sin(angle) * secHandLength / 1.1);

                if ((nightHours>=0 && nightHours<=6) || (nightHours>=18 && nightHours<=23)){
                    canvasObj.strokeStyle = '#ffffff'; 
                }else{
                    canvasObj.strokeStyle = '#000000'; 
                }
                canvasObj.stroke();
            }

            function drawHours() {

                let hour = date.getHours();
                let min = date.getMinutes();
                angle = ((Math.PI * 2) * ((hour * 5 + (min / 60) * 5) / 60)) - ((Math.PI * 2) / 4);
                canvasObj.lineWidth = 1.5;              
                canvasObj.beginPath();
                canvasObj.moveTo(canvas.width / 2, canvas.height / 2);     
                canvasObj.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength / 1.5),      
                    canvas.height / 2 + Math.sin(angle) * secHandLength / 1.5);

                if ((nightHours>=0 && nightHours<=6) || (nightHours>=18 && nightHours<=23)){
                    canvasObj.strokeStyle = '#ffffff'; 
                }else{
                    canvasObj.strokeStyle = '#000000'; 
                }
                canvasObj.stroke();
            }
        }
