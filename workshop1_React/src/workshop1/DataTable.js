import React, { useState } from 'react';

    const DataTable = () => {
    
        const initialData = [
            {id: 1, firstName: "Kalle", lastName: "Anka", age: "50", birthdate: "1972-01-01", country: "USA", city: "Ankeborg"},
            {id: 2, firstName: "Musse", lastName: "Pigg", age: "58", birthdate: "1963-04-12", country: "USA", city: "Ankeborg"},
            {id: 3, firstName: "Janne", lastName: "Långben", age: "52", birthdate: "1967-06-20", country: "USA", city: "Ankeborg"}
        ];

        const [studentList] = useState(initialData);
        const [showDetails, setShowDetails] = useState(false); /*visa detaljkort är normalt false*/
        const studentDefaultData = {id: 0, firstName: "", lastName: "", age: 0, birthdate: "", country: "", city: "" }
        const [student, setStudent] = useState(studentDefaultData);    

    const TableHeader = () => {
        return (
            <thead>
                <td>Id</td>
                <td>FirstName</td>
                <td>LastName</td>
                <td>Age</td>
                <td>Action</td>
                </thead>
        );
    };   

    const TableRow = (props) => {
        return(
        <tbody>
            {
                props.list.map((student) => (
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.age}</td>
                    {/* Anrop TabelAction för att visa "detaljkort" */}
                    <td><TableAction student={student} /></td>  
                </tr>
                    ) )
            }
        </tbody>
        );
    };

// const TableAction för att visa detaljkort
const TableAction = (props) => {

    const showData = () => {
        setShowDetails(true);
        console.log("SHOW DATA",props.student);
        setStudent(props.student);
    };

    return (<button type="button" className="btn btn-primary" onClick={showData} >Details</button>);
};


// const ShowStudentDetails
const ShowStudentDetails = () => {

    
    if(showDetails){
        return(
            <div className="card">
                <div className="card-header bg-info text-white">
                    Student Information
                </div>
                <div className="card-body">
                    <h5 className="card-title">Country and City</h5>
                    <p className="card-text">ID: {student.id}</p>
                    <p className="card-text">Name: {student.firstName} {student.lastName}</p>
                    <p className="card-text">BirthDate: {student.birthdate}</p>
                    <p className="card-text">City: {student.city}</p>
                    <p className="card-text">Country: {student.country}</p>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-danger" onClick={()=> {setShowDetails(false); setStudent(studentDefaultData)}}>Close</button>
                </div>
            </div>
        );
    } else {
        return ("");
    }

};


    return (
        <div className="container">
            <table className="table .table-striped">
                <TableHeader />
                <TableRow list={studentList} />
            </table>
            <br/>
            <ShowStudentDetails />
        </div>
    );
};


export default DataTable;
    