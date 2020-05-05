var timeSlots = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
var militaryTime= ["9", "10", "11", "12", "13", "14", "15", "16", "17"]



$(document).ready(function() {
    function currentTime() {
        var todaysDate = moment().format("LLLL");
        console.log(todaysDate);
        $("#currentDay").append("Today is  " + todaysDate); 
      }
      currentTime();
      console.log(currentTime);


      $('button').on("click", function saveIt() {
        var userInput = $(this).parent().attr("id");
        var textContent = $(this).siblings('input').val();
        
        localStorage.setItem(userInput, textContent);
        //console.log(userInput, textContent);
        
        });

        updateTime()

        function updateTime() {
            var timeNow = moment().format('H');
            for(var i = 0; i < timeSlots.length; i++) {
                console.log('time now: ', timeNow)
                console.log('timeSlots: ', timeSlots[i])
              if (militaryTime[i] > timeNow) {
                $("#" + timeSlots[i]).attr("style", "background-color: #77dd77");
              } else if (militaryTime[i] < timeNow) {
                $("#" + timeSlots[i]).attr("style", "background-color: #d3d3d3");
              } else if (militaryTime[i] == timeNow) {
                $("#" + timeSlots[i]).attr("style", "background-color: #ff6961");
                //console.log(("#" + timeSlots[i]).attr("style", "background-color: #fc665e"))
              }
            }
          };

        
       
        $("#nine").val(localStorage.getItem("9am"))
          console.log(nine)
        $("#ten").val(localStorage.getItem("10am"))
          console.log(ten)
        $("#eleven").val(localStorage.getItem("11am"))
          console.log(eleven)
        $("#twelve").val(localStorage.getItem("12pm"))
          console.log(twelve)
        $("#one").val(localStorage.getItem("1pm"))
          console.log(one)
        $("#two").val(localStorage.getItem("2pm"))
          console.log(two)
        $("#three").val(localStorage.getItem("3pm"))
          console.log(three)
        $("#four").val(localStorage.getItem("4pm"))
          console.log(four)
        $("#five").val(localStorage.getItem("5pm"))
          console.log(five)

    });
   



 
     
    