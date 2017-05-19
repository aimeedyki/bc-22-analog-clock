
let canvas = document.getElementById("canvas");
let canvasObj = canvas.getContext('2d');
let radius = canvas.height / 2;
canvasObj.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);


function drawClock() {
  drawFace(canvasObj, radius);
  drawNumbers(canvasObj, radius);
  drawTime(canvasObj, radius);
}

function drawFace(canvasObj, radius) {
  let grad;
  canvasObj.beginPath();
  canvasObj.arc(0, 0, radius, 0, 2*Math.PI);
  canvasObj.fillStyle = '#808080';
  canvasObj.fill();
  grad = canvasObj.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#7CFC00');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#7CFC00');
  canvasObj.strokeStyle = grad;
  canvasObj.lineWidth = radius*0.1;
  canvasObj.stroke();
  canvasObj.beginPath();
  canvasObj.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  canvasObj.fillStyle = 'white';
  canvasObj.fill();
}

function drawNumbers(canvasObj, radius) {
  let angle;
  let number;
  canvasObj.font = radius*0.15 + "px arial";
  canvasObj.textBaseline="middle";
  canvasObj.textAlign="center";
  for(number = 1; number < 13; number++){
    angle = number * Math.PI / 6;
    canvasObj.rotate(angle);
    canvasObj.translate(0, -radius*0.85);
    canvasObj.rotate(-angle);
    canvasObj.fillText(number.toString(), 0, 0);
    canvasObj.rotate(angle);
    canvasObj.translate(0, radius*0.85);
    canvasObj.rotate(-angle);
  }
}

function drawTime(canvasObj, radius){
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    
    hour = hour%12;
    hour = (hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(canvasObj, hour, radius*0.5, radius*0.07);
    
    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(canvasObj, minute, radius*0.8, radius*0.07);
    
    second = (second*Math.PI/30);
    drawHand(canvasObj, second, radius*0.9, radius*0.02);
}

function drawHand(canvasObj, pos, length, width) {
    canvasObj.beginPath();
    canvasObj.lineWidth = width;
    canvasObj.lineCap = "round";
    canvasObj.moveTo(0,0);
    canvasObj.rotate(pos);
    canvasObj.lineTo(0, -length);
    canvasObj.stroke();
    canvasObj.rotate(-pos);
}


const city = "";
const timeZone = "";
if (city === "Select") {
		alert("No city selected!! Please select city");
	}
    else if (city === "Accra" || city === "Toronto"|| city === "London" ) {
    	timeZone = "GREENWICH MEAN TIMEZONE";
    }
    else if (city === "Baghdad") {
    	
    	timeZone = "ARABIA STANDARD TIME";
    }
    else if (city === "Capetown") {
    	;
    	timeZone = "SOUTH AFRICAN STANDARD TIME";
    }else if (city === "Dubai") {
    	
    	timeZone = "GULF STANDARD TIME";
    }
    else if (city === "Dublin") {
    	
    	timeZone = "IRISH STANDARD TIME";
    }
    else if (city === "Hongkong") {
    	
    	timeZone = "HONGKONG TIMEZONE";
    }
    else if (city === "Lagos") {
    	
    	timeZone = "WEST AFRICA TIMEZONE";
    }
    else if (city === "Lisbon" || city === "London") {
    	
    	timeZone = "GREENWICH MEAN TIMEZONE";
    }
    else if () {
    	
    	timeZone = "GREENWICH MEAN TIMEZONE";
    }
    else if (city === "Paris" || city === "Rome") {
    	
    	timeZone = "CENTRAL EUROPEAN TIMEZONE";
    }
    else if (city === "Newyork") {
    	
    	timeZone = "EASTERN STANDARD TIME";
           }
    else if (city === "Saopaulo") {
    	
    	timeZone = "BRASILIA TIME";
    }
    else if (city === "Tokyo") {
    	
    	timeZone = "JAPAN STANDARD TIMEZONE";
    }
    
    
