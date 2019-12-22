var buttonSaveNew = document.getElementById("save");

function saveNewStudent(){
     var jsonData =  localStorage.studentList;
    var studentList = null;
    if(jsonData == null){
        studentList = [];
    }
    else studentList = JSON.parse(jsonData);
    var newStudent = {
        FirstName: document.getElementById("firstName").value,
        LastName: document.getElementById("lastName").value,
        Year: document.getElementById("year").value
    };
    studentList.push(newStudent);
    jsonData = JSON.stringify(studentList);
    localStorage.studentList = jsonData;
}

buttonSaveNew.addEventListener("click", saveNewStudent)
//   // read localStorage
//   var jsonData =     localStorage.studentList;
//   var studentList = null;

//   if(jsonData == null)
//    studentList = []; // localStorage null -> new empty array
//   else
//   studentList = JSON.parse(jsonData); // localStorage not null -> convert to json

//   // sv moi
//   var newStuden = {
//     FirstName: '',
//     LastName: '',
//     Dob: ''
//   };

//   // them sv vao mang
//   studentList.push(newStuden);

//   // save to localStorage
//   jsonData = JSON.stringify(studentList);
//   localStorage.studentList = jsonData;