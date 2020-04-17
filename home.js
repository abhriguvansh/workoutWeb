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
workoutB();
function selectWorkout() {
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

function workoutB() {
  workoutTitle1.innerHTML = `Incline Pushups`;
  reps1.innerHTML = `4 x 20`;
  desc1.innerHTML = `Place your hands on the edge of a bench. Bend your elbows to lower your chest to the edge of the bench. Push your body away from the bench until your elbows are extended.`;
  image1.src = './images/incline.jpg';

  workoutTitle2.innerHTML = `Bulgarian Split Squats`;
  reps2.innerHTML = `4 x 8`;
  desc2.innerHTML = `Find knee height bench. Get into a forward lunge position with torso up and your back foot on the bench. Lower until your front thigh is almost horizontal. Don't let your knee travel beyond your toes.`;
  image2.src = './images/splitsquat.jpg';

  workoutTitle3.innerHTML = `Bent Over Row`;
  reps3.innerHTML = `3 x (8-12)`;
  desc3.innerHTML = `Grab a barbell with hands slightly wider than shoulder-width apart. With your legs slightly bent, keep your back straight and lean forward. Row the weight upwards into the chest. Pause then lower.`;
  image3.src = './images/row.jpg';

  workoutTitle4.innerHTML = `Lateral Raise`;
  reps4.innerHTML = `3 x 12`;
  desc4.innerHTML = `Hold a dumbbell in each hand and stand with palms facing each other. Raise the weights up and out 90 degrees until your arms are parallel to the floor.`;
  image4.src = './images/lateral.jpg';

  workoutTitle5.innerHTML = `Tricep Kickback`;
  reps5.innerHTML = `3 x 12`;
  desc5.innerHTML = `Rest hands and knees on bench. Keep arm up and bent (see top part of image). Extend arm to fully straight position (bottom right part of image). Return to default position.`;
  image5.src = './images/tricep.jpg';

  workoutTitle6.innerHTML = `Decline Pushups`;
  reps6.innerHTML = `3 x 12`;
  desc6.innerHTML = `Rest hands on the floor but keep feet on a bench so that your lower body is elevated. Same form as pushups.`;
  image6.src = './images/decline.jpg';
}
