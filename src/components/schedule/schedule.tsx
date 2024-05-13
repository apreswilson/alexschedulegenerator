import './schedule.css';
import { FC } from 'react';

interface Props {
  passSchedule: { employeeName: string; startTime: string; endTime: string }[];
}

const Schedule: FC<Props> = ({ passSchedule }) => {

  return (
    <div className="schedule-table">
      <table>
        <tbody>
          <tr id="top-row">
            <th>Employee</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
          <tr id="bottom-row">
            {passSchedule.map((scheduleItem, index) => (
              index === 0 ? <td key={index}>{scheduleItem.employeeName} </td> : <td key={index}>{scheduleItem.startTime} - {scheduleItem.endTime}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;