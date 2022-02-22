import React from "react";
import Birthday from "./Birthday";

const BirthdayList = ({birthdays, setBirthdays}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                birthdays.map(birthday =>(
                    <Birthday 
                        key={birthday.id} 
                        name={birthday.name}
                        birthday={birthday} 
                        birthdays={birthdays}
                        setBirthdays={setBirthdays}
                        dob={birthday.dob}
                        age={birthday.age}
                    />
                ))
                }
            </ul>
        </div>
    );
};


export default BirthdayList;