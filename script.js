
function addStudentData(index,student){
    const output = document.getElementById('output')

   let row = document.createElement('tr')
   let cell = document.createElement('th')
   cell.setAttribute('score','row')
   cell.innerHTML = index
   row.appendChild(cell)
   cell = document.createElement('td')
   cell.innerHTML = student.name
   row.appendChild(cell)
   cell = document.createElement('td')
   let image = document.createElement('img')
   image.src = student.imageLink
   image.width = 200
   image.height = 200
   cell.appendChild(image)
   row.appendChild(cell)
   cell = document.createElement('td')
   cell.innerHTML = student.gender
   row.appendChild(cell)
   output.appendChild(row)

}
function addStudentList(StudentList){
    let counter = 1;
    for (student of StudentList){
        addStudentData(counter++,student)
    }
}

function addStudentData2(student){
    let idElem = document.getElementById('id')
    idElem.innerHTML = student.id
    let studentIdElem = document.getElementById('studentId')
    studentIdElem.innerHTML = student.studentId
    let nameElem = document.getElementById('name')
    nameElem.innerHtML = '${student.name} ${student.surname}'
    let gpaElem = document.getElementById('gpa')
    let profileElem = document.getElementById('image')
    profileElem.setAttribute('src',student.image)
}

function onLoad(){
    fetch('https://dv-student-backend-2019.appspot.com/students').then(response => {
        return response.json
    }).then(data =>{
        addStudentList(data)
    })
}