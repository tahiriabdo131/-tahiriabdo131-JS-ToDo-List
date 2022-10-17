let courses = [{ id: 1, name: "React JS" }, { id: 2, name: "Node JS" }];
let firstId = 1;

// Get the input
const input = document.getElementById("course_name");

// Add Button
const addButton = document.getElementById("addButton");

// Update Button
const updateButton = document.getElementById("updateButton");

// Div of list courses
const list_courses = document.getElementById("list_courses");

// Course To Update
let courseToUpdate;

// Add course function 
function addCourse() {
    // Check if the input is empty
    if (input.value.trim() == "") {
        alert("You have to write something");
        return;
    }
    else {
        //Add the new course to the table courses
        let course = {};
        if (courses.length > 0) {
            course.id = courses[courses.length - 1].id + 1;
        }
        else {
            course.id = firstId;
        }
        course.name = input.value;

        courses = [...courses, course];

        // Create wrapper div of the course
        const courseDiv = document.createElement("div");
        // Add the class
        courseDiv.classList.add(`course_${course.id}`);
        // Add ID
        courseDiv.setAttribute("id", `course_${course.id}`);

        // Create the div of the course's name
        const courseNameDiv = document.createElement("div");
        // Add the class
        courseNameDiv.classList.add("courseName");

        // Create the div of the course's actions
        const courseActionsDiv = document.createElement("div");
        // Add the class
        courseActionsDiv.classList.add(`courseActions_${course.id}`);
        // Add ID
        courseActionsDiv.setAttribute("id", `courseActions_${course.id}`);

        // Create the update button
        const updateBtn = document.createElement("button");
        // Add the class
        updateBtn.classList.add("updateBtn");
        updateBtn.classList.add("btn");
        // Add Value
        updateBtn.innerHTML = "update";

        // Create the delete button
        const deleteBtn = document.createElement("button");
        // Add the class
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.classList.add("btn");
        // Add Value
        deleteBtn.innerHTML = "delete";

        // Add click event to the update button
        updateBtn.setAttribute("onclick", `getToUpdateCourse(${course.id})`);
        // Add click event to the delete button
        deleteBtn.setAttribute("onclick", `deleteCourse(${course.id})`);
        // Assign the value of the input to the div's name
        courseNameDiv.innerText = input.value;

        // Append to parents div:
        list_courses.appendChild(courseDiv);
        document.getElementById(`course_${course.id}`).appendChild(courseNameDiv);
        document.getElementById(`course_${course.id}`).appendChild(courseActionsDiv);
        document.getElementById(`courseActions_${course.id}`).appendChild(updateBtn);
        document.getElementById(`courseActions_${course.id}`).appendChild(deleteBtn);
        // Empty the input
        input.value = "";
        return;
    }
}

// Click Enter Button (Add course)
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        if (addButton.style.display != "none") {
            addButton.click();
        }
    }
});

// Delete Course
function deleteCourse(course_id) {
    // Delete the element from the table
    courses = courses.filter(course => course.id !== course_id);

    // Get the element from the dom
    const devToDelete = document.getElementsByClassName(`course_${course_id}`);
    // Delete the element from the dom
    while (devToDelete.length > 0) {
        devToDelete[0].parentNode.removeChild(devToDelete[0]);
        updateButton.style.display = "none";
        addButton.style.display = "block";
        input.value = "";
        return alert("Course deleted successefully");
    }
}

// Get Course (Assign the value to the input, Hidde add button and display the update button)
function getToUpdateCourse(course_id) {
    courseToUpdate = courses.filter(course => course.id == course_id);
    if (courseToUpdate) {
        input.value = courseToUpdate[0].name;
        addButton.style.display = "none";
        updateButton.style.display = "block";
    }
}

// Update Course
function updateCourse() {
    courses.map(
        course => {
            if (course.id == courseToUpdate[0].id) {
                course.name = input.value;
            }
        }
    );

    updateButton.style.display = "none";
    addButton.style.display = "block";
    input.value = "";
    initialData();
}

function initialData() {
    list_courses.innerHTML = '';
    if (courses && courses.length > 0) {
        courses.map(course => {
            // Create wrapper div of the course
            const courseDiv = document.createElement("div");
            // Add the class
            courseDiv.classList.add(`course_${course.id}`);
            // Add ID
            courseDiv.setAttribute("id", `course_${course.id}`);

            // Create the div of the course's name
            const courseNameDiv = document.createElement("div");
            // Add the class
            courseNameDiv.classList.add("courseName");

            // Create the div of the course's actions
            const courseActionsDiv = document.createElement("div");
            // Add the class
            courseActionsDiv.classList.add(`courseActions_${course.id}`);
            // Add ID
            courseActionsDiv.setAttribute("id", `courseActions_${course.id}`);

            // Create the update button
            const updateBtn = document.createElement("button");
            // Add the class
            updateBtn.classList.add("updateBtn");
            updateBtn.classList.add("btn");
            // Add Value
            updateBtn.innerHTML = "update";

            // Create the delete button
            const deleteBtn = document.createElement("button");
            // Add the class
            deleteBtn.classList.add("deleteBtn");
            deleteBtn.classList.add("btn");
            // Add Value
            deleteBtn.innerHTML = "delete";

            // Add click event to the update button
            updateBtn.setAttribute("onclick", `getToUpdateCourse(${course.id})`);
            // Add click event to the delete button
            deleteBtn.setAttribute("onclick", `deleteCourse(${course.id})`);
            // Assign the value of the input to the div's name
            courseNameDiv.innerText = course.name;

            // Append to parents div:
            list_courses.appendChild(courseDiv);
            document.getElementById(`course_${course.id}`).appendChild(courseNameDiv);
            document.getElementById(`course_${course.id}`).appendChild(courseActionsDiv);
            document.getElementById(`courseActions_${course.id}`).appendChild(updateBtn);
            document.getElementById(`courseActions_${course.id}`).appendChild(deleteBtn);
        })
    }
}