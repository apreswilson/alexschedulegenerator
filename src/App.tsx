import { useState } from 'react';
import './App.css';
import Form from './components/form/form';
import Schedule from './components/schedule/schedule';

function App() {
  const [scheduleGenerated, setScheduleGenerated] = useState<{ employeeName: string; startTime: string; endTime: string }[]>([]);


  const updateSchedule = (newSchedule: { employeeName: string; startTime: string; endTime: string }[]) => {
    setScheduleGenerated(newSchedule);
  };
  return (
    <div className='main'>
      <Form passSchedule={updateSchedule} />
      <Schedule passSchedule={scheduleGenerated} />
    </div>
  );
}

export default App;