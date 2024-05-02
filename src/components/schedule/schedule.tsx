import './schedule.css'

function Schedule() {

  return (
    <div className="schedule table">
      <h1 className="title">Schedule</h1>
      <table>
        <tr>
          <th>Employee</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        <tr>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  )
}

export default Schedule;
