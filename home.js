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
const routineMessage = document.getElementById('routine-message');
const workout1 = document.getElementById('workout1');
const workout2 = document.getElementById('workout2');
const workout3 = document.getElementById('workout3');
const workout4 = document.getElementById('workout4');
const workout5 = document.getElementById('workout5');
const workout6 = document.getElementById('workout6');
selectWorkout();

//finds day and selects workout
function selectWorkout() {
  let todaysDate = Date.today(); //find day
  switch (
    todaysDate.toString().substring(0, 3) //depending on the day call a different workout method
  ) {
    case 'Mon':
      if (todaysDate.getWeek() % 2 == 0) {
        //since workout A and B alternate, we need to see what week it is to call the right one
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

/*creates clickable buttons to show you how many sets you have left
  num = how many buttons you want
  workoutNum = which workout number are you adding the buttons too
  reps = how many reps you want the button to display*/

function createSets(workoutNum, num, reps) {
  let workoutBottom = document.createElement('div');
  workoutBottom.className = 'workout-bottom';
  for (let i = 0; i < num; i++) {
    let tag = document.createElement('p');
    let text = document.createTextNode(`${reps} reps`);
    let button = document.createElement('button');
    button.className = 'reps-button';
    button.addEventListener('click', function () {
      completeSet(button);
    });
    tag.appendChild(text);
    button.appendChild(tag);
    workoutBottom.appendChild(button);
  }
  workoutNum.appendChild(workoutBottom);
}

//move set off the screen, signifying its complete
function completeSet(button) {
  button.style.opacity = 0;
}
//displays workoutA
function workoutA() {
  routineMessage.innerHTML = `Heres your workout for today:`;
  workoutTitle1.innerHTML = `Pushups`;
  reps1.innerHTML = `4 x 20`;
  desc1.innerHTML = `Lay with face, palms and toes facing down, keeping legs and back straight, extending arms straight to push body up and back down again.`;
  image1.src = './images/pushup.jpg';
  createSets(workout1, 4, 20);

  workoutTitle2.innerHTML = `Squats`;
  reps2.innerHTML = `4 x 20`;
  desc2.innerHTML = `Stand tall with your feet hip distance apart. Bend your knees and extend your buttocks backward. Rise back up and repeat. `;
  image2.src = './images/squat.jpg';
  createSets(workout2, 4, 20);

  workoutTitle3.innerHTML = `Lat Pulldown`;
  reps3.innerHTML = `3 x (8-12)`;
  desc3.innerHTML = `Pull the bar down until it's approximately level with the chin. Squeeze the shoulder blades together while maintaining square shoulders. Slowly return the bar to the top. `;
  image3.src = './images/lat.jpg';
  createSets(workout3, 3, '8-12');

  workoutTitle4.innerHTML = `Lying Leg Curl`;
  reps4.innerHTML = `4 x 12`;
  desc4.innerHTML = `Place a dumbbell on its end. Lie prone on your front, with your knees close to the edge. Pinch the dumbbell between the arches of your feet.`;
  image4.src = './images/leg-curl.jpg';
  createSets(workout4, 4, 12);

  workoutTitle5.innerHTML = `Shoulder Press`;
  reps5.innerHTML = `3 x (8-12)`;
  desc5.innerHTML = `Hold the dumbbells by your shoulders. Without leaning back, extend through your elbows to press the weights above your head. Then slowly return to the starting position. `;
  image5.src = './images/shoulder.jpg';
  createSets(workout5, 3, '8-12');

  workoutTitle6.innerHTML = `Bicep Curl`;
  reps6.innerHTML = `3 x 8`;
  desc6.innerHTML = `Hold the barbell with both hands facing up so your arms are shoulder-width apart. Curl the barbell to the middle of your body. Slowly lower the weight to return to the starting position.`;
  image6.src = './images/bicep.jpg';
  createSets(workout6, 3, 8);
}

//displays workoutB
function workoutB() {
  routineMessage.innerHTML = `Heres your workout for today:`;

  workoutTitle1.innerHTML = `Incline Pushups`;
  reps1.innerHTML = `4 x 20`;
  desc1.innerHTML = `Place your hands on the edge of a bench. Bend your elbows to lower your chest to the edge of the bench. Push your body away from the bench until your elbows are extended.`;
  image1.src = './images/incline.jpg';
  createSets(workout1, 4, 20);

  workoutTitle2.innerHTML = `Bulgarian Split Squats`;
  reps2.innerHTML = `4 x 8`;
  desc2.innerHTML = `Find knee height bench. Get into a forward lunge position with torso up and your back foot on the bench. Lower until your front thigh is almost horizontal. Don't let your knee travel beyond your toes.`;
  image2.src = './images/splitsquat.jpg';
  createSets(workout2, 4, 8);

  workoutTitle3.innerHTML = `Bent Over Row`;
  reps3.innerHTML = `3 x (8-12)`;
  desc3.innerHTML = `Grab a barbell with hands slightly wider than shoulder-width apart. With your legs slightly bent, keep your back straight and lean forward. Row the weight upwards into the chest. Pause then lower.`;
  image3.src = './images/row.jpg';
  createSets(workout3, 4, '8-12');

  workoutTitle4.innerHTML = `Lateral Raise`;
  reps4.innerHTML = `3 x 12`;
  desc4.innerHTML = `Hold a dumbbell in each hand and stand with palms facing each other. Raise the weights up and out 90 degrees until your arms are parallel to the floor.`;
  image4.src = './images/lateral.jpg';
  createSets(workout4, 3, 12);

  workoutTitle5.innerHTML = `Tricep Kickback`;
  reps5.innerHTML = `3 x 12`;
  desc5.innerHTML = `Rest hands and knees on bench. Keep arm up and bent (see top part of image). Extend arm to fully straight position (bottom right part of image). Return to default position.`;
  image5.src = './images/tricep.jpg';
  createSets(workout5, 3, 12);

  workoutTitle6.innerHTML = `Decline Pushups`;
  reps6.innerHTML = `3 x 12`;
  desc6.innerHTML = `Rest hands on the floor but keep feet on a bench so that your lower body is elevated. Same form as pushups.`;
  image6.src = './images/decline.jpg';
  createSets(workout6, 3, 12);
}

//displays abs and cardio
function restDay() {
  routineMessage.innerHTML = `Lets do some abs and cardio:`;
  workoutTitle1.innerHTML = `Plank`;
  reps1.innerHTML = `1 minute`;
  desc1.innerHTML = `Supporting yourself on your forearms and the balls of your feet, bridge up and position your body in one straight line. Pull your abs in tight and hold for 30-60 seconds.`;
  image1.src = './images/plank.jpg';

  workoutTitle2.innerHTML = `Bicycle Crunch`;
  reps2.innerHTML = `20-30 reps`;
  desc2.innerHTML = `Lying on your back, bring your knees up to form a 90 degree angle. Crunch and twist body while you bring your leg close. If you crunch to the right you should bring right knee close.`;
  image2.src = './images/bicycle.jpg';

  workoutTitle3.innerHTML = `Side Plank`;
  reps3.innerHTML = `1 minute per side`;
  desc3.innerHTML = `Lie on your side with your forearm perpendicular to your body and one foot stacked over the other. Bridge your hip up and hold for 30-60 seconds while maintaining a straight line with your body.`;
  image3.src = './images/side.jpg';

  workoutTitle4.innerHTML = `Vertical Leg Crunch`;
  reps4.innerHTML = `12-16 reps`;
  desc4.innerHTML = `
  Lie on your back with your legs up in the air, knees slightly bent. Try to touch your ankles with your hands by contracting just your abs, but keep your chin off your chest.`;
  image4.src = './images/vert.jpg';

  workoutTitle5.innerHTML = `Reverse Crunch`;
  reps5.innerHTML = `15-20 reps`;
  desc5.innerHTML = `Lie on your back with your hands tucked under and your knees bent. Bring your legs up until they form a 90 degree angle from your torso. Tilt and pull your knees in, squeeze and slowly lower.`;
  image5.src = './images/reverse.png';

  workoutTitle6.innerHTML = `Go On A Run!`;
  reps6.innerHTML = `Any Duration`;
  desc6.innerHTML = `Cardio is a great way to stay healthy! You can go for a long walk, jog a mile or even ride your bike!`;
  image6.src = './images/cardio.jpg';
}
