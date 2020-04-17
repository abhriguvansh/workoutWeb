const workoutTitle1 = document.getElementById('workout-title1');
const workoutTitle2 = document.getElementById('workout-title2');
const workoutTitle3 = document.getElementById('workout-title3');
const workoutTitle4 = document.getElementById('workout-title4');
const workoutTitle5 = document.getElementById('workout-title5');
const workoutTitle6 = document.getElementById('workout-title6');
const reps1 = document.getElementById('reps1');
const reps2 = document.getElementById('reps2');
const reps3 = document.getElementById('reps3');
const reps4 = document.getElementById('reps4');
const reps5 = document.getElementById('reps5');
const reps6 = document.getElementById('reps6');
const desc1 = document.getElementById('description1');
const desc2 = document.getElementById('description2');
const desc3 = document.getElementById('description3');
const desc4 = document.getElementById('description4');
const desc5 = document.getElementById('description5');
const desc6 = document.getElementById('description6');
const image1 = document.getElementById('images1');
const image2 = document.getElementById('images2');
const image3 = document.getElementById('images3');
const image4 = document.getElementById('images4');
const image5 = document.getElementById('images5');
const image6 = document.getElementById('images6');
let todaysDate = Date.today().toString();
console.log(todaysDate.substring(0, 3));

function isOddDay() {
  let todaysDate = Date.today();
  switch (todaysDate.toString().substring(0, 3)) {
    case 'Mon':
      if (todaysDate.getWeek() % 2 == 0) {
        workoutB();
      } else {
        workoutA();
      }
      break;
    case 'Tue':
      restDay();
      break;
    case 'Wed':
      if (todaysDate.getWeek() % 2 == 0) {
        workoutA();
      } else {
        workoutB();
      }
      break;
    case 'Thu':
      restDay();
      break;
    case 'Fri':
      if (todaysDate.getWeek() % 2 == 0) {
        workoutA();
      } else {
        workoutB();
      }
      break;
    case 'Sat':
      restDay();
      break;
    case 'Sun':
      restDay();
      break;
  }
}


