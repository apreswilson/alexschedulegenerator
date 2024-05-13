import './form.css';
import { FC } from 'react';

interface Props {
  passSchedule: (newSchedule: { employeeName: string; startTime: string; endTime: string }[]) => void;
}

const Form: FC<Props> = ({ passSchedule }) => {

  function handleData(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const employeeName = formData.get("name") as string;
    const earliestAvailable = parseInt(formData.get("clockin") as string, 10);
    const latestAvailable = parseInt(formData.get("clockout") as string, 10);
    const monday = formData.get("monday") === "on";
    const tuesday = formData.get("tuesday") === "on";
    const wednesday = formData.get("wednesday") === "on";
    const thursday = formData.get("thursday") === "on";
    const friday = formData.get("friday") === "on";
    const saturday = formData.get("saturday") === "on";
    const sunday = formData.get("sunday") === "on";

    const daysAvailable = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];

    const fullFormData = {
      earliestAvailable: earliestAvailable,
      latestAvailable: latestAvailable,
      daysAvailable: daysAvailable
    };

    const generatedSchedule = [];

    for (let i = 0; i < daysAvailable.length; i++) {
      if (i === 0) {
        generatedSchedule.push({ employeeName: employeeName, startTime: "", endTime: "" });
      }
      if (daysAvailable[i]) {
        let clockOutTimeNumber = Math.floor(Math.random() * (fullFormData.latestAvailable - fullFormData.earliestAvailable + 1) + fullFormData.earliestAvailable);
        const clockInTimeNumber = Math.floor(Math.random() * (clockOutTimeNumber - fullFormData.earliestAvailable + 1) + fullFormData.earliestAvailable);

        // Minimum 3 hour shifts
        if (clockOutTimeNumber - clockInTimeNumber < 3) {
          clockOutTimeNumber += 3;
        }

        let clockOutTime, clockInTime;

        // Convert time to string
        if (clockOutTimeNumber >= 12) {
          clockOutTime = clockOutTimeNumber === 12 ? "12 PM" : `${clockOutTimeNumber - 12} PM`;
        } else {
          clockOutTime = `${clockOutTimeNumber} AM`;
        }

        if (clockInTimeNumber >= 12) {
          clockInTime = clockInTimeNumber === 12 ? "12 PM" : `${clockInTimeNumber - 12} PM`;
        } else {
          clockInTime = `${clockInTimeNumber} AM`;
        }

        generatedSchedule.push({ employeeName: "", startTime: clockInTime, endTime: clockOutTime });
      } else {
        generatedSchedule.push({ employeeName: "", startTime: " ", endTime: " " });
      }
    }

    console.log(generatedSchedule)
    passSchedule(generatedSchedule);

    event.currentTarget.reset();
  }

  return (
    <>
      <div className="schedule-form">
        <h1 className="title">Employee Information</h1>
        <form className="form" onSubmit={handleData}>
          <div className='row-1'>
            <h1>Employee Name</h1>
            <input type="text" name="name" placeholder="Enter Full Name..." className='employee-name' required />
            <h1>Earliest Available</h1>
            <select name="clockin" className="clock-in-time" required>
              <option value="7">7 AM</option>
              <option value="8">8 AM</option>
              <option value="9">9 AM</option>
              <option value="10">10 AM</option>
              <option value="11">11 AM</option>
              <option value="12">12 PM</option>
              <option value="13">1 PM</option>
              <option value="14">2 PM</option>
              <option value="15">3 PM</option>
              <option value="16">4 PM</option>
              <option value="17">5 PM</option>
              <option value="18">6 PM</option>
            </select>
            <h1>Latest Available</h1>
            <select name="clockout" className="clock-out-time" required>
              <option value="7">7 AM</option>
              <option value="8">8 AM</option>
              <option value="9">9 AM</option>
              <option value="10">10 AM</option>
              <option value="11">11 AM</option>
              <option value="12">12 PM</option>
              <option value="13">1 PM</option>
              <option value="14">2 PM</option>
              <option value="15">3 PM</option>
              <option value="16">4 PM</option>
              <option value="17">5 PM</option>
              <option value="18">6 PM</option>
            </select>
          </div>

          <div className='row-2'>
            <label className="container">Monday
              <input type="checkbox" className="checkbox" name="monday"></input>
              <span className="checkmark"></span>
            </label>
            <label className="container">Tuesday
              <input type="checkbox" className="checkbox" name="tuesday"></input>
              <span className="checkmark"></span>
            </label>
            <label className="container">Wednesday
              <input type="checkbox" className="checkbox" name="wednesday"></input>
              <span className="checkmark"></span>
            </label>
            <label className="container">Thursday
              <input type="checkbox" className="checkbox" name="thursday"></input>
              <span className="checkmark"></span>
            </label>
            <label className="container">Friday
              <input type="checkbox" className="checkbox" name="friday"></input>
              <span className="checkmark"></span>
            </label>
            <label className="container">Saturday
              <input type="checkbox" className="checkbox" name="saturday"></input>
              <span className="checkmark"></span>
            </label>
            <label className="container">Sunday
              <input type="checkbox" className="checkbox" name="sunday"></input>
              <span className="checkmark"></span>
            </label>
          </div>

          <div className='row-3'>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;