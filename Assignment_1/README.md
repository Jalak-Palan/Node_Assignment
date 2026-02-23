# Node Assignment - 1

This project is built using Node.js and Express.js.  
It provides REST API endpoints to manage and analyze student data.

---

## Live Deployment

Deploy Link:  
https://node-assignment-o34e.onrender.com/

Postman Documentation:  
https://documenter.getpostman.com/view/50839137/2sBXcEmgWK

GitHub Repository:  
https://github.com/Jalak-Palan/Node_Assignment.git

---

## Technologies Used

- Node.js
- Express.js
- JavaScript

---

## Installation and Setup

1. Clone the repository

   ```bash
   git clone https://github.com/Jalak-Palan/Node_Assignment.git
   ```

2. Navigate to project folder

   ```bash
   cd Node_Assignment
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the server

   ```bash
   node index.js
   ```

Server will start on:

```
http://localhost:3000
```

---

# API Routes Description

---

## 1. GET /students

This route returns the complete list of all students in JSON format.  
It sends a 200 status code with the entire students array.

Note: Only one response should be sent in a route.

Incorrect:
```
res.status(200).json(students);
res.send("Express server is running");
```

Correct:
```
res.status(200).json(students);
```

---

## 2. GET /students/topper

This route finds and returns the student who has the highest CGPA.

Logic:
- It checks if the students array is empty.
- It loops through all students.
- It compares each student's CGPA.
- It returns the student with the highest CGPA.
- If no students exist, it returns 404 status.

---

## 3. GET /students/average

This route calculates the average CGPA of all students.

Logic:
- It checks if the students array is empty.
- It adds all CGPA values.
- It divides the total by the number of students.
- It returns the average CGPA in JSON format.

Example Response:

```json
{
  "averageCGPA": 8.51
}
```

---

## 4. GET /students/count

This route returns the total number of students.

Logic:
- It checks if the students array is empty.
- It returns the length of the array.

Example Response:

```json
{
  "totalStudents": 10
}
```

---

## 5. GET /students/:id

This route returns a single student based on the ID provided in the URL.

Example:
```
GET /students/3
```

Logic:
- It converts the id parameter into a number.
- It searches for a student with that id.
- If found, it returns that student.
- If not found, it returns 404.

Note: Only one response should be used.

---

## 6. GET /students/branch/:branchName

This route returns all students from a specific branch.

Example:
```
GET /students/branch/CSE
```

Logic:
- It takes branch name from URL.
- It filters students by branch (case insensitive).
- It returns all matching students.

Important Fix:

Incorrect:
```
if (!studentsInBranch)
```

Correct:
```
if (studentsInBranch.length === 0)
```

---

## Project Structure

```
Node_Assignment/
│
├── index.js
├── package.json
└── README.md
```

---

## Author

Jalak Palan

---

## License

This project is for educational purposes.
