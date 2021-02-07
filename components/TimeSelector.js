import { Center, Select, SelectField } from '@chakra-ui/react';

function generateArrayOfSequentialNumbers(quantity) {
  const list = [];
  for (let current = 0; current <= quantity; current++) {
    list.push(current);
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
          <SelectField value={hour} sele>
            {hour}
          </SelectField>
        ))}
      </Select>
      :
      <Select name="minute">
        {minutes.map((minute) => (
          <SelectField value={minute}>{minute}</SelectField>
        ))}
      </Select>
      <Select name="period">
        <SelectField value="AM">AM</SelectField>
        <SelectField value="PM">PM</SelectField>
      </Select>
    </Center>
  );
}
