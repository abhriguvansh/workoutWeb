let defaultMessage = document.createElement('div');
let congratsMessage = document.createElement('div');
let workoutList = document.createElement('ul');
workoutList.id = 'workout-list';
const body = document.getElementById('body');
const greeting = document.getElementById('greeting');
const routineMessage = document.getElementById('routine-message');
let workoutsCompleted = 0;

startup();
//starts animations, first method called
function startup() {
  greeting.style.top = '20%';
  setTimeout(function () {
    greeting.style.top = '100px';
    setTimeout(function () {
      routineMessage.style.left = '33.5%';
      setTimeout(function () {
        workoutList.style.right = '-700px';
        selectWorkout();
        workoutList.style.top = '15%';
        setTimeout(function () {
          workoutList.style.right = '35.8%';
          defaultMessage.style.left = '39.5%';
        }, 1000);
      }, 1000);
    }, 1000);
  }, 3000);
  body.style.minHeight = '2000px';
  body.style.minWidth = '100%';
}
//creates a workout
function createWorkout(title, amt, desc, img, sets, numReps) {
  let workout = document.createElement('li');
  workout.className = 'workout';
  let text = document.createElement('div');
  text.id = 'text';
  workoutTitle = document.createElement('h3');
  workoutTitle.className = 'workout-title';
  workoutTitle.innerHTML = title;
  text.appendChild(workoutTitle);
  let reps = document.createElement('p');
  reps.className = 'reps';
  reps.innerHTML = amt;
  text.appendChild(reps);
  let description = document.createElement('p');
  description.className = 'description';
  description.innerHTML = desc;
  text.appendChild(description);
  workout.appendChild(text);
  let image = document.createElement('img');
  image.className = 'images';
  image.src = img;
  workout.appendChild(image);
  workoutList.appendChild(workout);
  createSets(workout, sets, numReps);
}
//finds day and selects workout
function selectWorkout() {
  workoutsCompleted = 0;
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
  //create end message that lets you know if you have completed the workout or not
  let endMessage = document.createElement('div');
  endMessage.className = 'end-message';

  defaultMessage.id = 'default';
  let message = document.createElement('h3');
  message.id = 'message';
  message.innerHTML = 'Keep Working!';
  defaultMessage.appendChild(message);
  endMessage.appendChild(defaultMessage);

  congratsMessage.id = 'congrats';
  let congrats = document.createElement('h3');
  congrats.id = 'message';
  congrats.innerHTML = 'Congrats! You Finished The Workout';
  congratsMessage.appendChild(congrats);
  endMessage.appendChild(congratsMessage);
  body.appendChild(endMessage);
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
      if (workoutsCompleted == 21) {
        let message = document.getElementById('message');
        defaultMessage.style.left = '-500px';
        congratsMessage.style.left = '24%';
      }
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
  workoutsCompleted++;
  console.log(workoutsCompleted);
  setTimeout(function () {
    button.style.display = 'none';
  }, 375);
}

//displays workoutA
function workoutA() {
  body.appendChild(workoutList);
  createWorkout(
    'Pushups',
    '4 x 20',
    'Lay with face, palms and toes facing down, keeping legs and back straight, extending arms straight to push body up and back down again.',
    './images/pushup.jpg',
    4,
    20
  );
  createWorkout(
    'Squats',
    '4 x 20',
    `Stand tall with your feet hip distance apart. Bend your knees and extend your buttocks backward. Rise back up and repeat. `,
    './images/squat.jpg',
    4,
    20
  );
  createWorkout(
    'Lat Pulldown',
    '3 x (8-12)',
    `Pull the bar down until it's approximately level with the chin. Squeeze the shoulder blades together while maintaining square shoulders. Slowly return the bar to the top. `,
    './images/lat.jpg',
    3,
    '(8-12)'
  );

  createWorkout(
    'Lying Leg Curl',
    '4 x 12',
    `Place a dumbbell on its end. Lie prone on your front, with your knees close to the edge. Pinch the dumbbell between the arches of your feet.`,
    './images/leg-curl.jpg',
    4,
    12
  );

  createWorkout(
    'Shoulder Press',
    '3 x (8-12)',
    `Hold the dumbbells by your shoulders. Without leaning back, extend through your elbows to press the weights above your head. Then slowly return to the starting position. `,
    './images/shoulder.jpg',
    3,
    '(8-12)'
  );

  createWorkout(
    'Bicep Curl',
    '3 x 8',
    `Hold the barbell with both hands facing up so your arms are shoulder-width apart. Curl the barbell to the middle of your body. Slowly lower the weight to return to the starting position.`,
    './images/bicep.jpg',
    3,
    8
  );
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
  reps4.innerHTML = `4 x 12`;
  desc4.innerHTML = `Hold a dumbbell in each hand and stand with palms facing each other. Raise the weights up and out 90 degrees until your arms are parallel to the floor.`;
  image4.src = './images/lateral.jpg';
  createSets(workout4, 4, 12);

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
