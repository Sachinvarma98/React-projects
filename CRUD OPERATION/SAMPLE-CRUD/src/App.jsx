import React, { useEffect, useState } from 'react'

function App() {

  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);

  useEffect(() => {
    setData(EmployeeData)
  }, [])

  const handleEdit = (id) => {
    const dt = data.filter(item => item.id === id);
    if(dt !== undefined)
    {
      setId(id)
      setFirstName(dt[0].firstName);
      setLastName(dt[0].lastName);
      setAge(dt[0].age);

    }
  }

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure to delete this item?")) {
        const dt = data.filter(item => item.id !== id)
        setData(dt);
      }
    }
  }

  const handleSave = () => {

  }

  const handleClear = () => {   
      setId(id)
      setFirstName("");
      setLastName("");
      setAge("");
  }

  return (
    <>
      <div className='flex'>
        <div className='flex justify-center '>
          <label className=''> First Name :
            <input className='border-2 mt-2 mb-2 border-green-500 '
              type="text" placeholder='Enter First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </label>
        </div>
        <div className='flex justify-center '>
          <label> Last Name :
            <input className='border-2 mt-2 mb-2 border-green-500 '
              type="text" placeholder='Enter Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </label>
        </div>
        <div className='flex justify-center ' >
          <label> Age :
            <input className='border-2 mt-2 mb-2 border-green-500 '
              type="text" placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)} />
          </label>
        </div>
      </div>
       <div className='flex justify-center '>
          <button className='bg-blue-500 p-1 mr-2 rounded-xl' onClick={() => handleSave()}> Save </button>
          <button className='bg-red-500 p-1 rounded-xl' onClick={() => handleClear()}> Clear </button>
        </div>

      <table className=' bg-gray-300'>
        <thead className='p-2 text-2xl bg-gray-500 hover:text-white hover:bg-black'>
          <tr>
            <td className='p-3'> Sr.No</td>
            <td className='p-3'> Id</td>
            <td className='p-3'> First Name</td>
            <td className='p-3'> Last Name</td>
            <td className='p-3'> age </td>
            <td className='p-3'> Actions </td>
          </tr>
        </thead>
        <tbody className='text-sm'>
          {
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td className='p-3'>{index + 1}</td>
                  <td> {item.id} </td>
                  <td> {item.firstName} </td>
                  <td> {item.lastName} </td>
                  <td> {item.age} </td>
                  <td>
                    <button className='bg-blue-500 p-1 rounded-xl' onClick={() => handleEdit(item.id)}> Edit </button>
                    <button className='bg-red-500 p-1 m-1 rounded-xl' onClick={() => handleDelete(item.id)}> Delete </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App

const EmployeeData = [
  {
    id: 1,
    firstName: "Mark",
    lastName: "David",
    age: 20
  },
  {
    id: 2,
    firstName: "Virat",
    lastName: "Kohli",
    age: 31
  },
  {
    id: 3,
    firstName: "Rohit",
    lastName: "Sharma",
    age: 35
  },
  {
    id: 4,
    firstName: "Hardik",
    lastName: "Pandya",
    age: 33
  },

]