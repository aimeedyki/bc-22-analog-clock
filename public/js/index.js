
   const estimateTime2 = () => {

    let type2 = $('#type2').val();

    if (type2 === 'Select') {
        alert("No City selected! Please Select a City.");
    } else if (type2 === 'Accra') {
        offset2 = 0; 
        document.getElementById('zone2').innerHTML = "GREENWICH MEAN TIMEZONE";
    }else if (type2 === 'Baghdad') {
        offset2 = 3; 
        document.getElementById('zone2').innerHTML = "ARABIA STANDARD TIME";
    } 
    else if (type2 === 'Capetown') {
        offset2 = 2;
        document.getElementById('zone2').innerHTML = "SOUTH AFRICA TIMEZONE";
    } else if (type2 === 'Dubai') {
        offset2 = 4; 
        document.getElementById('zone2').innerHTML = "GULF STANDARD TIME";
    } else if (type2 === 'Dublin') {
        offset2 = 1;
        document.getElementById('zone2').innerHTML = "IRISH STANDARD TIME";
    } else if (type2 === 'Hongkong') {
        offset2 = 8;
        document.getElementById('zone2').innerHTML = "HONGKONG TIMEZONE";
    } else if (type2 === 'Lagos') {
        offset2 = 1; 
        document.getElementById('zone2').innerHTML = "WEST AFRICA TIMEZONE";
     }  else if (type2 === 'Lisbon') {
        offset2 = 1; 
        document.getElementById('zone2').innerHTML = "WESTERN EUROPEAN TIMEZONE"; 
    }else if (type2 === 'London') {
        offset2 = 1; 
        document.getElementById('zone2').innerHTML = "BRITISH SUMMER TIME";         
    } else if (type2 === 'Paris'|| type2 === 'Rome') {
        offset2 = 2; 
        document.getElementById('zone2').innerHTML = "CENTRAL EUROPEAN TIMEZONE";
    } else if (type2 === 'Newyork' || type2 === 'Toronto') {
        offset2 = -4;
        document.getElementById('zone2').innerHTML = "EASTERN STANDARD TIMEZONE"; 
    } else if (type2 === 'Saopaulo') {
        offset2 = -3; 
        document.getElementById('zone2').innerHTML = "BRASILIA TIME";
    } else if (type2 === 'Tokyo') {
        offset2 = 9; 
        document.getElementById('zone2').innerHTML = "JAPAN STANDARD TIME";
   }
}


const estimateTime3 = () => {

    let type3 = $('#type3').val();
  
    if (type3 === 'Select') {
        alert("No City selected! Please Select a City.");
    } else if (type3 === 'Accra') {
        offset3 = 0; 
        document.getElementById('zone3').innerHTML = "GREENWICH MEAN TIMEZONE";
    }else if (type3 === 'Baghdad') {
        offset3 = 3; 
        document.getElementById('zone3').innerHTML = "ARABIA STANDARD TIME";
    } 
    else if (type3 === 'Capetown') {
        offset3 = 2;
        document.getElementById('zone3').innerHTML = "SOUTH AFRICA TIMEZONE";
    } else if (type3 === 'Dubai') {
        offset3 = 4; 
        document.getElementById('zone3').innerHTML = "GULF STANDARD TIME";
    } else if (type3 === 'Dublin') {
        offset3 = 1;
        document.getElementById('zone3').innerHTML = "IRISH STANDARD TIME";
    } else if (type3 === 'Hongkong') {
        offset3 = 8;
        document.getElementById('zone3').innerHTML = "HONGKONG TIMEZONE";
    } else if (type3 === 'Lagos') {
        offset3 = 1; 
        document.getElementById('zone3').innerHTML = "WEST AFRICA TIMEZONE";
     }  else if (type3 === 'Lisbon') {
        offset3 = 1; 
        document.getElementById('zone3').innerHTML = "WESTERN EUROPEAN TIMEZONE"; 
    }else if (type3 === 'London') {
        offset3 = 1; 
        document.getElementById('zone3').innerHTML = "BRITISH SUMMER TIME";         
    } else if (type3 === 'Paris'|| type3 === 'Rome') {
        offset3 = 2; 
        document.getElementById('zone3').innerHTML = "CENTRAL EUROPEAN TIMEZONE";
    } else if (type3 === 'Newyork' || type3 === 'Toronto') {
        offset3 = -4;
        document.getElementById('zone3').innerHTML = "EASTERN STANDARD TIMEZONE"; 
    } else if (type3 === 'Saopaulo') {
        offset3 = -3; 
        document.getElementById('zone3').innerHTML = "BRASILIA TIME";
    } else if (type3 === 'Tokyo') {
        offset3 = 9; 
        document.getElementById('zone3').innerHTML = "JAPAN STANDARD TIME";
   }
}


const estimateTime4 = () => {

    let type4 = $('#type4').val();


    if (type4 === 'Select') {
        alert("No City selected! Please Select a City.");
    } else if (type4 === 'Accra') {
        offset4 = 0; 
        document.getElementById('zone4').innerHTML = "GREENWICH MEAN TIMEZONE";
    }else if (type4 === 'Baghdad') {
        offset4 = 3; 
        document.getElementById('zone4').innerHTML = "ARABIA STANDARD TIME";
    } 
    else if (type4 === 'Capetown') {
        offset4 = 2;
        document.getElementById('zone4').innerHTML = "SOUTH AFRICA TIMEZONE";
    } else if (type4 === 'Dubai') {
        offset4 = 4; 
        document.getElementById('zone4').innerHTML = "GULF STANDARD TIME";
    } else if (type4 === 'Dublin') {
        offset4 = 1;
        document.getElementById('zone4').innerHTML = "IRISH STANDARD TIME";
    } else if (type4 === 'Hongkong') {
        offset4 = 8;
        document.getElementById('zone4').innerHTML = "HONGKONG TIMEZONE";
    } else if (type4 === 'Lagos') {
        offset4 = 1; 
        document.getElementById('zone4').innerHTML = "WEST AFRICA TIMEZONE";
     }  else if (type4 === 'Lisbon') {
        offset4 = 1; 
        document.getElementById('zone4').innerHTML = "WESTERN EUROPEAN TIMEZONE"; 
    }else if (type4 === 'London') {
        offset4 = 1; 
        document.getElementById('zone4').innerHTML = "BRITISH SUMMER TIME";         
    } else if (type4 === 'Paris'|| type4 === 'Rome') {
        offset4 = 2; 
        document.getElementById('zone4').innerHTML = "CENTRAL EUROPEAN TIMEZONE";
    } else if (type4 === 'Newyork' || type4 === 'Toronto') {
        offset4 = -4;
        document.getElementById('zone4').innerHTML = "EASTERN STANDARD TIMEZONE"; 
    } else if (type4 === 'Saopaulo') {
        offset4 = -3; 
        document.getElementById('zone4').innerHTML = "BRASILIA TIME";
    } else if (type4 === 'Tokyo') {
        offset4 = 9; 
        document.getElementById('zone4').innerHTML = "JAPAN STANDARD TIME";
   }
}
//control for first clock
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        let radius = canvas.height / 2;
        ctx.translate(radius, radius);
        radius = radius * 0.90
        //drawClock();
        setInterval(drawClock, 1000);

        function drawClock() {
            drawFace(ctx, radius);
            drawNumbers(ctx, radius);
            drawTime(ctx, radius);
        }

        function drawFace(ctx, radius) {
            let grad;
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, 2 * Math.PI);
            ctx.fillStyle = 'white';
            ctx.fill();
            grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
            grad.addColorStop(0, '#7CFC00');
            grad.addColorStop(0.5, 'white');
            grad.addColorStop(1, '#7CFC00');
            ctx.strokeStyle = grad;
            ctx.lineWidth = radius * 0.1;
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
            ctx.fillStyle = '#333';
            ctx.fill();
        }

        function drawNumbers(ctx, radius) {
            let ang;
            let num;
            ctx.font = radius * 0.15 + "px arial";
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            for (num = 1; num < 13; num++) {
                ang = num * Math.PI / 6;
                ctx.rotate(ang);
                ctx.translate(0, -radius * 0.85);
                ctx.rotate(-ang);
                ctx.fillText(num.toString(), 0, 0);
                ctx.rotate(ang);
                ctx.translate(0, radius * 0.85);
                ctx.rotate(-ang);
            }
        }

        let offset = 1;

        function drawTime(ctx, radius) {
            let date = new Date();
            let localTime = date.getTime();
            let localOffset = date.getTimezoneOffset() * 60000;
            let utc = localTime + localOffset;
         
            let country = utc + (3600000 * offset);
            let newDate = new Date(country);
            let hour = newDate.getHours();
            let minute = newDate.getMinutes();
            let second = newDate.getSeconds();
      
            hour = hour % 12;
            hour = (hour * Math.PI / 6) +
                (minute * Math.PI / (6 * 60)) +
                (second * Math.PI / (360 * 60));
            drawHand(ctx, hour, radius * 0.5, radius * 0.07);
            //minute
            minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
            drawHand(ctx, minute, radius * 0.8, radius * 0.07);
            // second
            second = (second * Math.PI / 30);
            drawHand(ctx, second, radius * 0.9, radius * 0.02);
        }

        function drawHand(ctx, pos, length, width) {
            ctx.beginPath();
            ctx.lineWidth = width;
            ctx.lineCap = "round";
            ctx.moveTo(0, 0);
            ctx.rotate(pos);
            ctx.lineTo(0, -length);
            ctx.stroke();
            ctx.rotate(-pos);
        }


        //controls for second clock
        let canvas2 = document.getElementById("canvas2");
        let ctx2 = canvas2.getContext("2d");
        let radius2 = canvas2.height / 2;
        ctx2.translate(radius2, radius2);
        radius2 = radius2 * 0.90
        
        setInterval(drawClock2, 1000);

        function drawClock2() {
            drawFace2(ctx2, radius2);
            drawNumbers2(ctx2, radius2);
            drawTime2(ctx2, radius2);
        }

        function drawFace2(ctx2, radius2) {
            let grad2;
            ctx2.beginPath();
            ctx2.arc(0, 0, radius2, 0, 2 * Math.PI);
            ctx2.fillStyle = 'white';
            ctx2.fill();
            grad2 = ctx2.createRadialGradient(0, 0, radius2 * 0.95, 0, 0, radius2 * 1.05);
            grad2.addColorStop(0, '#7CFC00');
            grad2.addColorStop(0.5, 'white');
            grad2.addColorStop(1, '#7CFC00');
            ctx2.strokeStyle = grad2;
            ctx2.lineWidth = radius2 * 0.1;
            ctx2.stroke();
            ctx2.beginPath();
            ctx2.arc(0, 0, radius2 * 0.1, 0, 2 * Math.PI);
            ctx2.fillStyle = '#333';
            ctx2.fill();
        }

        function drawNumbers2(ctx2, radius2) {
            let ang2;
            let num2;
            ctx2.font = radius2 * 0.15 + "px arial";
            ctx2.textBaseline = "middle";
            ctx2.textAlign = "center";
            for (num2 = 1; num2 < 13; num2++) {
                ang2 = num2 * Math.PI / 6;
                ctx2.rotate(ang2);
                ctx2.translate(0, -radius2 * 0.85);
                ctx2.rotate(-ang2);
                ctx2.fillText(num2.toString(), 0, 0);
                ctx2.rotate(ang2);
                ctx2.translate(0, radius2 * 0.85);
                ctx2.rotate(-ang2);
            }
        }
        let offset2 = 4;

        function drawTime2(ctx2, radius2) {
            let date2 = new Date();
            let localTime2 = date2.getTime();
            let localOffset2 = date2.getTimezoneOffset() * 60000;
            let utc2 = localTime2 + localOffset2;
            
            let country = utc2 + (3600000 * offset2);
            
            let newDate2 = new Date(country);
            let hour2 = newDate2.getHours();
            let minute2 = newDate2.getMinutes();
            let second2 = newDate2.getSeconds();
            //hour
            hour2 = hour2 % 12;
            hour2 = (hour2 * Math.PI / 6) +
                (minute2 * Math.PI / (6 * 60)) +
                (second2 * Math.PI / (360 * 60));
            drawHand2(ctx2, hour2, radius2 * 0.5, radius2 * 0.07);
            //minute
            minute2 = (minute2 * Math.PI / 30) + (second2 * Math.PI / (30 * 60));
            drawHand2(ctx2, minute2, radius2 * 0.8, radius2 * 0.07);
            // second
            second2 = (second2 * Math.PI / 30);
            drawHand2(ctx2, second2, radius2 * 0.9, radius2 * 0.02);
        }

        function drawHand2(ctx2, pos2, length2, width2) {
            ctx2.beginPath();
            ctx2.lineWidth = width2;
            ctx2.lineCap = "round";
            ctx2.moveTo(0, 0);
            ctx2.rotate(pos2);
            ctx2.lineTo(0, -length2);
            ctx2.stroke();
            ctx2.rotate(-pos2);
        }

        //controls for third clock
        let canvas3 = document.getElementById("canvas3");
        let ctx3 = canvas3.getContext("2d");
        let radius3 = canvas3.height / 2;
        ctx3.translate(radius3, radius3);
        radius3 = radius3 * 0.90
        //drawClock3();
        setInterval(drawClock3, 1000);

        function drawClock3() {
            drawFace3(ctx3, radius3);
            drawNumbers3(ctx3, radius3);
            drawTime3(ctx3, radius3);
        }

        function drawFace3(ctx3, radius3) {
            let grad3;
            ctx3.beginPath();
            ctx3.arc(0, 0, radius3, 0, 2 * Math.PI);
            ctx3.fillStyle = 'white';
            ctx3.fill();
            grad3 = ctx3.createRadialGradient(0, 0, radius3 * 0.95, 0, 0, radius3 * 1.05);
            grad3.addColorStop(0, '#7CFC00');
            grad3.addColorStop(0.5, 'white');
            grad3.addColorStop(1, '#7CFC00');
            ctx3.strokeStyle = grad3;
            ctx3.lineWidth = radius3 * 0.1;
            ctx3.stroke();
            ctx3.beginPath();
            ctx3.arc(0, 0, radius3 * 0.1, 0, 2 * Math.PI);
            ctx3.fillStyle = '#333';
            ctx3.fill();
        }

        function drawNumbers3(ctx3, radius3) {
            let ang3;
            let num3;
            ctx3.font = radius3 * 0.15 + "px arial";
            ctx3.textBaseline = "middle";
            ctx3.textAlign = "center";
            for (num3 = 1; num3 < 13; num3++) {
                ang3 = num3 * Math.PI / 6;
                ctx3.rotate(ang3);
                ctx3.translate(0, -radius3 * 0.85);
                ctx3.rotate(-ang3);
                ctx3.fillText(num3.toString(), 0, 0);
                ctx3.rotate(ang3);
                ctx3.translate(0, radius3 * 0.85);
                ctx3.rotate(-ang3);
            }
        }

        let offset3 = -5;

        function drawTime3(ctx3, radius3) {
            let date3 = new Date();
            let localTime3 = date3.getTime();
            let localOffset3 = date3.getTimezoneOffset() * 60000;
            let utc3 = localTime3 + localOffset3;
          
            let newyork = utc3 + (3600000 * offset3);
            let newDate3 = new Date(newyork);
            let hour3 = newDate3.getHours();
            let minute3 = newDate3.getMinutes();
            let second3 = newDate3.getSeconds();
           
            hour3 = hour3 % 12;
            hour3 = (hour3 * Math.PI / 6) +
                (minute3 * Math.PI / (6 * 60)) +
                (second3 * Math.PI / (360 * 60));
            drawHand3(ctx3, hour3, radius3 * 0.5, radius3 * 0.07);
            
            minute3 = (minute3 * Math.PI / 30) + (second3 * Math.PI / (30 * 60));
            drawHand3(ctx3, minute3, radius3 * 0.8, radius3 * 0.07);
            
            second3 = (second3 * Math.PI / 30);
            drawHand3(ctx3, second3, radius3 * 0.9, radius3 * 0.02);
        }

        function drawHand3(ctx3, pos3, length3, width3) {
            ctx3.beginPath();
            ctx3.lineWidth = width3;
            ctx3.lineCap = "round";
            ctx3.moveTo(0, 0);
            ctx3.rotate(pos3);
            ctx3.lineTo(0, -length3);
            ctx3.stroke();
            ctx3.rotate(-pos3);
        }

     
        let canvas4 = document.getElementById("canvas4");
        let ctx4 = canvas4.getContext("2d");
        let radius4 = canvas4.height / 2;
        ctx4.translate(radius4, radius4);
        radius4 = radius4 * 0.90
     
        setInterval(drawClock4, 1000);

        function drawClock4() {
            drawFace4(ctx4, radius4);
            drawNumbers4(ctx4, radius4);
            drawTime4(ctx4, radius4);
        }

        function drawFace4(ctx4, radius4) {
            let grad4;
            ctx4.beginPath();
            ctx4.arc(0, 0, radius4, 0, 2 * Math.PI);
            ctx4.fillStyle = 'white';
            ctx4.fill();
            grad4 = ctx4.createRadialGradient(0, 0, radius4 * 0.95, 0, 0, radius4 * 1.05);
            grad4.addColorStop(0, '#7CFC00');
            grad4.addColorStop(0.5, 'white');
            grad4.addColorStop(1, '#7CFC00');
            ctx4.strokeStyle = grad4;
            ctx4.lineWidth = radius4 * 0.1;
            ctx4.stroke();
            ctx4.beginPath();
            ctx4.arc(0, 0, radius4 * 0.1, 0, 2 * Math.PI);
            ctx4.fillStyle = '#333';
            ctx4.fill();
        }

        function drawNumbers4(ctx4, radius4) {
            let ang4;
            let num4;
            ctx4.font = radius4 * 0.15 + "px arial";
            ctx4.textBaseline = "middle";
            ctx4.textAlign = "center";
            for (num4 = 1; num4 < 13; num4++) {
                ang4 = num4 * Math.PI / 6;
                ctx4.rotate(ang4);
                ctx4.translate(0, -radius4 * 0.85);
                ctx4.rotate(-ang4);
                ctx4.fillText(num4.toString(), 0, 0);
                ctx4.rotate(ang4);
                ctx4.translate(0, radius4 * 0.85);
                ctx4.rotate(-ang4);
            }
        }

        let offset4 = 10;

        function drawTime4(ctx4, radius4) {
            let date4 = new Date();
            let localTime4 = date4.getTime();
            let localOffset4 = date4.getTimezoneOffset() * 60000;
            let utc4 = localTime4 + localOffset4;
          
            let japan = utc4 + (3600000 * offset4);
            let newDate4 = new Date(japan);
            let hour4 = newDate4.getHours();
            let minute4 = newDate4.getMinutes();
            let second4 = newDate4.getSeconds();
           
            hour4 = hour4 % 12;
            hour4 = (hour4 * Math.PI / 6) +
                (minute4 * Math.PI / (6 * 60)) +
                (second4 * Math.PI / (360 * 60));
            drawHand4(ctx4, hour4, radius4 * 0.5, radius4 * 0.07);

            minute4 = (minute4 * Math.PI / 30) + (second4 * Math.PI / (30 * 60));
            drawHand4(ctx4, minute4, radius4 * 0.8, radius4 * 0.07);
           
            second4 = (second4 * Math.PI / 30);
            drawHand4(ctx4, second4, radius4 * 0.9, radius4 * 0.02);
        }

        function drawHand4(ctx4, pos4, length4, width4) {
            ctx4.beginPath();
            ctx4.lineWidth = width4;
            ctx4.lineCap = "round";
            ctx4.moveTo(0, 0);
            ctx4.rotate(pos4);
            ctx4.lineTo(0, -length4);
            ctx4.stroke();
            ctx4.rotate(-pos4);
        }