import React from "react";

const Birthday = ({ name, birthday, birthdays, setBirthdays, dob, age }) => {

    const deleteHandler = () => {
        setBirthdays(birthdays.filter(el => el.id!==birthday.id))
    }

    function remainDays() {
        const dobArray = dob.split('-');
        var month=dobArray[1];
        var day = dobArray[2];
        var date = new Date(),
          year = date.getFullYear(),
          next = new Date(year, month - 1, day);
        date.setHours(0, 0, 0, 0);
        if (date > next) next.setFullYear(year + 1);
        return Math.round((next - date) / 8.64e7);
      }



    return (    
        <div className="todo">
            <li className="todo-item"><b>{name}</b> ({age} years) {remainDays()} days left</li>

            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Birthday;