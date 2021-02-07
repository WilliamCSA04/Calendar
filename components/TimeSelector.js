import { Center, Select } from '@chakra-ui/react';

function generateArrayOfSequentialNumbers(quantity) {
  const list = [];
  for (let current = 0; current <= quantity; current++) {
    if (current < 10) {
      list.push(`0${current}`);
    } else {
      list.push(current);
    }
  }
  return list;
}

export default function TimeSelector({ hour = '0', minute = '0', period = 'AM' }) {
  const hours = generateArrayOfSequentialNumbers(12);
  const minutes = generateArrayOfSequentialNumbers(60);
  return (
    <Center as="time">
      <Select name="hour">
        {hours.map((hour) => (
          <option value={hour} sele>
            {hour}
          </option>
        ))}
      </Select>
      :
      <Select name="minute">
        {minutes.map((minute) => (
          <option value={minute}>{minute}</option>
        ))}
      </Select>
      <Select name="period">
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </Select>
    </Center>
  );
}
