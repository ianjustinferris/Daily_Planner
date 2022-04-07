    var todo9El = document.getElementById('todo9')
    
    var todo10El = document.getElementById('todo10')

    var todo11El = document.getElementById('todo11')

    var todo12El = document.getElementById('todo12')

    var todo1El = document.getElementById('todo1')

    var todo2El = document.getElementById('todo2')

    var todo3El = document.getElementById('todo3')

    var todo4El = document.getElementById('todo4')

    var todo5El = document.getElementById('todo5')

    var saveBtn9 = document.getElementById('9save')

    var saveBtn10 = document.getElementById('10save')

    var saveBtn11 = document.getElementById('11save')

    var saveBtn12 = document.getElementById('12save')

    var saveBtn1 = document.getElementById('1save')

    var saveBtn2 = document.getElementById('2save')

    var saveBtn3 = document.getElementById('3save')

    var saveBtn4 = document.getElementById('4save')

    var saveBtn5 = document.getElementById('5save')

    var deleteBtn9 = document.getElementById('9delete')

    var deleteBtn10 = document.getElementById('10delete')

    var deleteBtn11 = document.getElementById('11delete')

    var deleteBtn12 = document.getElementById('12delete')

    var deleteBtn1 = document.getElementById('1delete')

    var deleteBtn2 = document.getElementById('2delete')

    var deleteBtn3 = document.getElementById('3delete')

    var deleteBtn4 = document.getElementById('4delete')

    var deleteBtn5 = document.getElementById('5delete')

    var currentTime = new Date().getHours();

    console.log("currentTime: " + currentTime)

    console.log(typeof currentTime)

    //Set color of TODO for Past, Present, or Future
   if (currentTime > 9) {
       $('#todo9').addClass('past')
   } else if (currentTime >= 9 && currentTime < 10) {
       $('#todo9').addClass('present')
   } else if (currentTime < 9) {
       $('#todo9').addClass('future')
   }
    
    //Set color of TODO for Past, Present, or Future
   if (currentTime > 10) {
       $('#todo10').addClass('past')
   } else if (currentTime >= 10 && currentTime < 11) {
       $('#todo10').addClass('present')
   } else if (currentTime < 10) {
       $('#todo10').addClass('future')
   }

    //Set color of TODO for Past, Present, or Future
   if (currentTime > 11) {
       $('#todo11').addClass('past')
   } else if (currentTime >= 11 && currentTime < 12) {
       $('#todo11').addClass('present')
   } else if (currentTime < 11) {
       $('#todo11').addClass('future')
   }

    //Set color of TODO for Past, Present, or Future
   if (currentTime > 12) {
       $('#todo12').addClass('past')
   } else if (currentTime >= 12 && currentTime < 13) {
       $('#todo12').addClass('present')
   } else if (currentTime < 12) {
       $('#todo12').addClass('future')
   }

    //Set color of TODO for Past, Present, or Future
   if (currentTime > 13) {
       $('#todo1').addClass('past')
   } else if (currentTime >= 13 && currentTime < 14) {
       $('#todo1').addClass('present')
   } else if (currentTime < 13) {
       $('#todo1').addClass('future')
   }

    //Set color of TODO for Past, Present, or Future
   if (currentTime > 14) {
       $('#todo2').addClass('past')
   } else if (currentTime >= 14 && currentTime < 15) {
       $('#todo2').addClass('present')
   } else if (currentTime < 14) {
       $('#todo2').addClass('future')
   }

    //Set color of TODO for Past, Present, or Future
   if (currentTime > 15) {
       $('#todo3').addClass('past')
   } else if (currentTime >= 15 && currentTime < 16) {
       $('#todo3').addClass('present')
   } else if (currentTime < 15) {
       $('#todo3').addClass('future')
   }

    //Set color of TODO for Past, Present, or Future
   if (currentTime > 16) {
       $('#todo4').addClass('past')
   } else if (currentTime >= 16 && currentTime < 17) {
       $('#todo4').addClass('present')
   } else if (currentTime < 16) {
       $('#todo4').addClass('future')
   }

    //Set color of TODO for Past, Present, or Future
   if (currentTime > 17) {
       $('#todo5').addClass('past')
   } else if (currentTime >= 17 && currentTime < 18) {
       $('#todo5').addClass('present')
   } else if (currentTime < 17) {
       $('#todo5').addClass('future')
   }

    //Set Time/Date

     function getTime() {
        $("#weekDay").html(moment().format("h:mm A dddd"));
        }
        
        setInterval(getTime, 1000);



    //Functions to save/delete 9AM TODO 

    saveBtn9.addEventListener('click', writeTODO9)

    todo9El.value = localStorage.getItem('todo9')

    function writeTODO9() { 

        localStorage.setItem('todo9', todo9El.value)

        todo9El.value = localStorage.getItem('todo9')

    }

    deleteBtn9.addEventListener('click', deleteTODO9)

    function deleteTODO9() {

        localStorage.removeItem('todo9')

        location.reload();

    }

    //Functions to save/delete 10AM TODO 

    saveBtn10.addEventListener('click', writeTODO10)

    todo10El.value = localStorage.getItem('todo10')

    function writeTODO10() { 

        localStorage.setItem('todo10', todo10El.value)

        todo10El.value = localStorage.getItem('todo10')

    }

    deleteBtn10.addEventListener('click', deleteTODO10)

    function deleteTODO10() {

        localStorage.removeItem('todo10')

        location.reload();

    }

    //Functions to save/delete 11AM TODO 

    saveBtn11.addEventListener('click', writeTODO11)

    todo11El.value = localStorage.getItem('todo11')

    function writeTODO11() { 

        localStorage.setItem('todo11', todo11El.value)

        todo11El.value = localStorage.getItem('todo11')

    }

    deleteBtn11.addEventListener('click', deleteTODO11)

    function deleteTODO11() {

        localStorage.removeItem('todo11')

        location.reload();

    }

    //Functions to save/delete 12PM TODO 

    saveBtn12.addEventListener('click', writeTODO12)

    todo12El.value = localStorage.getItem('todo12')

    function writeTODO12() { 

        localStorage.setItem('todo12', todo12El.value)

        todo12El.value = localStorage.getItem('todo12')

    }

    deleteBtn12.addEventListener('click', deleteTODO12)

    function deleteTODO12() {

        localStorage.removeItem('todo12')

        location.reload();

    }

    //Functions to save/delete 1PM TODO 

    saveBtn1.addEventListener('click', writeTODO1)

    todo1El.value = localStorage.getItem('todo1')

    function writeTODO1() { 

        localStorage.setItem('todo1', todo1El.value)

        todo1El.value = localStorage.getItem('todo1')

    }

    deleteBtn1.addEventListener('click', deleteTODO1)

    function deleteTODO1() {

        localStorage.removeItem('todo1')

        location.reload();

    }

    //Functions to save/delete 2PM TODO 

    saveBtn2.addEventListener('click', writeTODO2)

    todo2El.value = localStorage.getItem('todo2')

    function writeTODO2() { 

        localStorage.setItem('todo2', todo2El.value)

        todo2El.value = localStorage.getItem('todo2')

    }

    deleteBtn2.addEventListener('click', deleteTODO2)

    function deleteTODO2() {

        localStorage.removeItem('todo2')

        location.reload();

    }

    //Functions to save/delete 3PM TODO 

    saveBtn3.addEventListener('click', writeTODO3)

    todo3El.value = localStorage.getItem('todo3')

    function writeTODO3() { 

        localStorage.setItem('todo3', todo3El.value)

        todo3El.value = localStorage.getItem('todo3')

    }

    deleteBtn3.addEventListener('click', deleteTODO3)

    function deleteTODO3() {

        localStorage.removeItem('todo3')

        location.reload();

    }

    //Functions to save/delete 4PM TODO 

    saveBtn4.addEventListener('click', writeTODO4)

    todo4El.value = localStorage.getItem('todo4')

    function writeTODO4() { 

        localStorage.setItem('todo4', todo4El.value)

        todo4El.value = localStorage.getItem('todo4')

    }

    deleteBtn4.addEventListener('click', deleteTODO4)

    function deleteTODO4() {

        localStorage.removeItem('todo4')

        location.reload();

    }

    //Functions to save/delete 5PM TODO 

    saveBtn5.addEventListener('click', writeTODO5)

    todo5El.value = localStorage.getItem('todo5')

    function writeTODO5() { 

        localStorage.setItem('todo5', todo5El.value)

        todo5El.value = localStorage.getItem('todo5')

    }

    deleteBtn5.addEventListener('click', deleteTODO5)

    function deleteTODO5() {

        localStorage.removeItem('todo5')

        location.reload();

    }




     