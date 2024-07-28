import './App.css';
import CreateStudent from './Components/CreateStudent';
import StudentList from './Components/StudentList';
import { useEffect, useState } from 'react';
import { collection , getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

function App() {
  const [students , setStudents] = useState([]);
  const studentsCollection = collection(db,'students');

  const getStudents = async()=> {
    const studentSnapshot = await getDocs(studentsCollection);
    const studentList = studentSnapshot.docs.map(doc => ({
     id: doc.id,
     ...doc.data()
    }))
    setStudents(studentList);
 }

 useEffect(() =>{
  getStudents()
 },[])
  
return (
    <div className='app-container'>
    <h1 className='app-title'>Student Management System</h1>
    <CreateStudent getStudents={getStudents}/>
    <StudentList students={students}/>
    </div>
  )
}

export default App
