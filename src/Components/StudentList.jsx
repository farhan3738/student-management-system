import StudentTable from "./StudentTable"

function StudentList({students}) {
  return (
    <>
    <h1>Student List</h1>
    <StudentTable students={students}/>
    </>
  )
}

export default StudentList
