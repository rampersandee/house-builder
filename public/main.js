// GLOBALS
let nutsUp = document.getElementsByClassName("nuts-tally")
let wrenchUp = document.getElementsByClassName("wrench-tally");
let sawUp = document.getElementsByClassName("saw-tally");
let hammerUp = document.getElementsByClassName("hammer-tally");
let toolboxUp = document.getElementsByClassName("toolbox-tally");
let trash = document.getElementsByClassName("fa-trash")
let toolStorage = document.querySelector("#tool-storage")
let toolRandom = document.querySelector("#tool-random")


// FUNCTIONS
function pickRandomTool() {
  const tools = ['nuts', 'nuts', 'nuts', 'nuts', 'nuts', 'nuts', 'nuts', 'nuts', 'nuts', 'nuts', 'nuts', 'nuts', 'hammer', 'wrench', 'wrench', 'wrench', 'wrench', 'wrench', 'wrench', 'wrench', 'wrench', 'wrench', 'saw', 'saw', 'saw', 'toolbox', 'toolbox', 'nuts', 'nuts', 'nuts', 'nuts', 'nuts', 'nuts', 'nuts', 'nuts', 'nuts', 'nuts', 'nuts', 'hammer', 'hammer', 'hammer', 'wrench', 'wrench', 'wrench', 'wrench', 'wrench', 'wrench', 'wrench', 'wrench', 'wrench', 'saw', 'saw', 'saw', 'toolbox', 'toolbox'];
  const randomIndex = Math.floor(Math.random() * tools.length);
  toolStorage.innerText = tools[randomIndex]
  console.log('working')
}
toolRandom.addEventListener('click', pickRandomTool)

function checkToolValues() {
  console.log('running')
  let nutsValue = document.getElementById("nuts-value").innerHTML;
  let wrenchValue = document.getElementById("wrench-value").innerHTML;
  let sawValue = document.getElementById("saw-value").innerHTML;
  let hammerValue = document.getElementById("hammer-value").innerHTML;
  let toolboxValue = document.getElementById("toolbox-value").innerHTML;
  // debugger
  console.log(nutsValue,wrenchValue,sawValue,hammerValue,toolboxValue)
  if (nutsValue >= 12 && wrenchValue >= 6 && sawValue >= 3 && hammerValue >= 2 && toolboxValue >= 1) {
    alert("You have all the necessary tools to complete the project! Enjoy your house: 🏠! Press the trashcan and enter your name to restart!");
  }
}

Array.from(nutsUp).forEach(function (element) {
  element.addEventListener('click', function (e) {
    const _id = e.target.dataset.id
    console.log(_id)
    fetch('nutsUp', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _id
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        // localStorage.setItem('startTime', Date.now());
        
        checkToolValues();
        window.location.reload(true)
      })
      
  });
});

Array.from(wrenchUp).forEach(function (element) {
  element.addEventListener('click', function (e) {
    const _id = e.target.dataset.id
    console.log(_id)
    fetch('wrenchUp', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _id
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        
        checkToolValues();
        window.location.reload(true)
      })
      
  });
});

Array.from(sawUp).forEach(function (element) {
  element.addEventListener('click', function (e) {
    const _id = e.target.dataset.id
    console.log(_id)
    fetch('sawUp', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _id
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        
        checkToolValues();
        window.location.reload(true)
      })
      
  });
});

Array.from(hammerUp).forEach(function (element) {
  element.addEventListener('click', function (e) {
    const _id = e.target.dataset.id
    console.log(_id)
    fetch('hammerUp', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _id
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        
        checkToolValues();
        window.location.reload(true)
      })
      
  });
});

Array.from(toolboxUp).forEach(function (element) {
  element.addEventListener('click', function (e) {
    const _id = e.target.dataset.id
    console.log(_id)
    fetch('toolboxUp', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _id
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        
        checkToolValues();
        window.location.reload(true)
      })
      
  });
});

Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function (e) {
    const _id = e.target.dataset.id
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});

// STOPWATCH
// let stopwatchInterval;
// let stopwatchStartTime;
// let stopwatchElapsedTime = 0;
// const stopwatchDisplay = document.getElementById('stopwatch-display');
// const startStopwatchBtn = document.getElementById('start-stopwatch-btn');
// const stopStopwatchBtn = document.getElementById('stop-stopwatch-btn');
// const resetStopwatchBtn = document.getElementById('reset-stopwatch-btn');

// // FUNCTIONS
// function startStopwatch() {
//   stopwatchStartTime = Date.now() - stopwatchElapsedTime;
//   stopwatchInterval = setInterval(updateStopwatchDisplay, 10);
// }

// function stopStopwatch() {
//   clearInterval(stopwatchInterval);
//   stopwatchElapsedTime = Date.now() - stopwatchStartTime;
// }

// function resetStopwatch() {
//   clearInterval(stopwatchInterval);
//   stopwatchElapsedTime = 0;
//   updateStopwatchDisplay();
// }

// function updateStopwatchDisplay() {
//   const elapsed = Date.now() - stopwatchStartTime;
//   let hours = Math.floor(elapsed / 3600000);
//   let minutes = Math.floor((elapsed - (hours * 3600000)) / 60000);
//   let seconds = Math.floor((elapsed - (hours * 3600000) - (minutes * 60000)) / 1000);
//   let milliseconds = elapsed - (hours * 3600000) - (minutes * 60000) - (seconds * 1000);
//   hours = padTime(hours);
//   minutes = padTime(minutes);
//   seconds = padTime(seconds);
//   milliseconds = padTime(Math.floor(milliseconds / 10));
//   stopwatchDisplay.innerText = `${hours}:${minutes}:${seconds}.${milliseconds}`;
// }

// function padTime(value) {
//   return value < 10 ? `0${value}` : value;
// }
// startStopwatchBtn.addEventListener('click', startStopwatch);
// stopStopwatchBtn.addEventListener('click', stopStopwatch);
// resetStopwatchBtn.addEventListener('click', resetStopwatch);
