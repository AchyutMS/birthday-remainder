import React from "react";


const Form = ({ name, setName, dob, setDob, birthdays, setBirthdays}) => {

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const dobHandler = (e) => {
        setDob(e.target.value)
    }

    const submitButtonHandler = (e) => {
        e.preventDefault();
        if(name && dob){
        var userinput = dob;
        var DOB = new Date(userinput);
    
        //calculate month difference from current date in time
        var month_diff = Date.now() - DOB.getTime();
    
        //convert the calculated difference in date format
        var age_dt = new Date(month_diff); 
    
        //extract year from date    
        var year = age_dt.getUTCFullYear();
    
        //now calculate the age of the user
        var age = Math.abs(year - 1970);
    
        setBirthdays([...birthdays, { 'name': name, 'dob': dob, 'age': age ,id: Math.random() * 1000 }]);
        setName('');
        }
        else{
          alert('All Fields are Required')
        }
    }

    return (
    <form>
      <input onChange={nameHandler} value={name} type="text" className="todo-input" placeholder="Enter Name" />
      <input onChange={dobHandler} type="date" className="date-input"/>

      <button onClick={submitButtonHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

    </form>
    );
};

export default Form;