# Node_Assignment

Deploy Link :- https://node-assignment-o34e.onrender.com/
Postman documentation Link :- https://documenter.getpostman.com/view/50839137/2sBXcEmgWK
Github Link :- https://github.com/Jalak-Palan/Node_Assignment.git


 Assignment - 1 description : 
   1) GET /students
This route returns the complete list of all students in JSON format.
It sends a 200 status code with the entire students array.

Note: You are sending two responses in this route:

res.status(200).json(students);

res.send("Express server is running");

Only one response should be sent. The second line should be removed.

  2) GET /students/topper
This route finds and returns the student who has the highest CGPA.

Logic:

It first checks if the students array is empty.

It loops through all students.

It compares each student's CGPA.

It returns the student with the highest CGPA.

If no students exist, it returns a 404 status.

  3) GET /students/average
This route calculates the average CGPA of all students.

Logic:

It checks if the students array is empty.

It adds all CGPA values.

It divides the total by the number of students.

It returns the average CGPA in JSON format.

Example response:
{
"averageCGPA": 8.51
}

  4) GET /students/count
This route returns the total number of students.

Logic:

It checks if the students array is empty.

It returns the length of the array.

Example response:
{
"totalStudents": 10
}

  5) GET /students/:id
This route returns a single student based on the ID provided in the URL.

Example:
GET /students/3

Logic:

It converts the id parameter into a number.

It searches for a student with that id.

If found, it returns that student.

If not found, it returns 404.

You again have two responses in this route:

res.status(200).json(student);

res.send("Express server is running");

Only one response should be used.

  6) GET /students/branch/:branchName
This route returns all students from a specific branch.

Example:
GET /students/branch/CSE

Logic:

It takes branch name from URL.

It filters students by branch (case insensitive).

It returns all matching students.

Small mistake:
You are checking:
if (!studentsInBranch)

This will not work properly because filter always returns an array.
Instead you should check:
if (studentsInBranch.length === 0)
