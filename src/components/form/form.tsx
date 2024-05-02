import './form.css'

function Form() {
  console.log("test");
  return (
    <>
      <div className="schedule">
        <h1 className="title">Employee Information</h1>
        <form className="form">
          <h1>First Name:</h1>
          <input type="text" placeholder="Enter First Name Here...."></input>
          <h1>Last Name:</h1>
          <input type="text" placeholder="Enter Last Name Here...."></input>
          <h1>Earliest Available:</h1>
          <select name="clockin" className="clock-in-time">
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
          <h1>Latest Available:</h1>
          <select name="clockout" className="clock-out-time">
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
          <br />
          <h1>Monday</h1>
          <input type="checkbox" className="monday"></input>
          <h1>Tuesday</h1>
          <input type="checkbox" className="tuesday"></input>
          <h1>Wednesday</h1>
          <input type="checkbox" className="wednesday"></input>
          <h1>Thursday</h1>
          <input type="checkbox" className="thursday"></input>
          <h1>Friday</h1>
          <input type="checkbox" className="friday"></input>
          <h1>Saturday</h1>
          <input type="checkbox" className="saturday"></input>
          <h1>Sunday</h1>
          <input type="checkbox" className="sunday"></input>
          <br />
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </form>
      </div>
    </>
  )
}

export default Form;
