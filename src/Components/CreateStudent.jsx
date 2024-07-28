import React, { useState } from "react";
import { addDoc , collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function CreateStudent({getStudents}) {
    const [rollNo, setRollNo] = useState('');
    const [name , setName] = useState('');
    const [age, setAge] = useState('');
    const [isCreatingStudent , setIsCreatingStudent] = useState(false);
    
    const handleSubmit = async(e)=> {
        e.preventDefault();
        try {
            setIsCreatingStudent(true);
            await addDoc(collection(db , 'students'),{
                rollNo: Number(rollNo),
                name: name,
                age: Number(age),
          });
            setRollNo('');
            setName('');
            setAge('');
            setIsCreatingStudent(false);
            await getStudents();

        } catch {error} {
            console.log("Error creating user",error);
        }
        setIsCreatingStudent(false);
    };
  
    return (
    <form onSubmit={handleSubmit} className="form">
        <input type="text" value={rollNo}onChange={(e)=>setRollNo(e.target.value)} placeholder='Student Roll No'/>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Student Name"/>
        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}placeholder="Student age"/>
        <button type="submit">{isCreatingStudent ? 'Submitting...' : 'Submit'}</button>
    </form>
  )
}

export default CreateStudent
