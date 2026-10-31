const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course will introduce students to programming.',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces students to the World Wide Web.',
    technology: ['HTML', 'CSS'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Programming with functions and problem solving.',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Introduction to classes and objects.',
    technology: ['C#'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Creating dynamic websites with JavaScript.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Frontend development, UX, accessibility, and APIs.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  }
];

// Elements
const courseContainer = document.querySelector("#courses");
const creditsElement = document.querySelector("#credits");

// Display Courses
function displayCourses(courseList) {
  courseContainer.innerHTML = "";

  courseList.forEach(course => {
    const courseCard = document.createElement("div");

    courseCard.classList.add("course-card");

    if (course.completed) {
      courseCard.classList.add("completed");
    }

    courseCard.textContent = `${course.subject} ${course.number}`;

    courseContainer.appendChild(courseCard);
  });
}

// Display Credits
function displayCredits(courseList) {
  const totalCredits = courseList.reduce(
    (total, course) => total + course.credits,
    0
  );

  creditsElement.textContent =
    `The total credits for courses listed above is ${totalCredits}`;
}

// Filter Buttons
document.querySelector("#all").addEventListener("click", () => {
  displayCourses(courses);
  displayCredits(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {
  const wddCourses = courses.filter(
    course => course.subject === "WDD"
  );

  displayCourses(wddCourses);
  displayCredits(wddCourses);
});

document.querySelector("#cse").addEventListener("click", () => {
  const cseCourses = courses.filter(
    course => course.subject === "CSE"
  );

  displayCourses(cseCourses);
  displayCredits(cseCourses);
});

// Initial Display
displayCourses(courses);
displayCredits(courses);