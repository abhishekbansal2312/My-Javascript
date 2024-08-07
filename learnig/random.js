const students = [
  "Abbas Akbar",
  "Abhinav Sharma",
  "Abhishek Bansal",
  "Abhishek Srivastava",
  "Aditya Kumar Singh",
  "Ali Sher Khan",
  "Ananya Lamba",
  "Anjali Debnath",
  "Ankit Saini",
  "Anoushka Gautam",
  "Ansh Kumar Gupta",
  "Anshika Bhatnagar",
  "Anuj Chauhan",
  "Anurag Saini",
  "Arin Saxena",
  "Ashish Ansh",
  "Avni Saxena",
  "Divyanshi Vishnoi",
  "Inayat Ullah Khan",
  "Kratika Agarwal",
  "Manish Kumar",
  "Manit Rastogi",
  "Nikita Rathore",
  "Prakhar Sharma",
  "Prakriti Gupta",
  "Pranjal Agarwal",
  "Prince Saxena",
  "Sakshi Chauhan",
  "Samarth Rastogi",
  "Samra Rubab",
  "Sandeep Kumar",
  "Sarthak Rastogi",
  "Shashank Johri",
  "Shashwat Tewari",
  "Shivam Prajapati",
  "Shivi Agarwal",
  "Shrey Singhal",
  "Sohil Ansari",
  "Tahir Ali",
  "Tahzeeb Malik",
  "Tanu Saini",
  "Vishal Kumar",
  "Pratham Gupta",
];

function getRandomStudent(students) {
  const randomIndex = Math.floor(Math.random() * students.length);
  return students[randomIndex];
}

function printWithDelay(text, index = 0) {
  if (index < text.length) {
    process.stdout.write(text[index]);
    setTimeout(() => printWithDelay(text, index + 1), 200); 
  } else {
    console.log();
  }
}

function displayRandomStudent(students) {
  console.log("Selecting a random student...");

  const countdown = ["3...", "2...", "1..."];
  countdown.forEach((num, i) => {
    setTimeout(() => console.log(num), i * 1000);
  });

  setTimeout(() => {
    const randomStudent = getRandomStudent(students);
    console.log("Randomly selected student: ");
    printWithDelay(randomStudent);
  }, countdown.length * 1000);
}

displayRandomStudent(students);
