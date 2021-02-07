import { eachDayOfInterval, endOfMonth, startOfMonth } from 'date-fns';
import Day from './Day';

function useDaysOfMonth() {
  const currentDate = new Date();

  const listOfDaysOfCurrentMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate)
  });
  return listOfDaysOfCurrentMonth.map((date) => date.getDate());
}

export default function Calendar() {
  const days = useDaysOfMonth();

  return (
    <div>
      {days.map((day) => (
        <Day key={day} day={day} />
      ))}
    </div>
  );
}
