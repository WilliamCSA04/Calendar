import { Center, Select } from '@chakra-ui/react';

function generateArrayOfSequentialNumbers(quantity) {
  const list = [];
  for (let current = 0; current <= quantity; current++) {
    list.push(current);
  }
  return list;
}

export default function TimeSelector({
  hour,
  minute,
  period,
  onChangeHour,
  onChangeMinute,
  onChangePeriod
}) {
  const hours = generateArrayOfSequentialNumbers(12);
  const minutes = generateArrayOfSequentialNumbers(60);
  return (
    <Center as="time">
      <Select onChange={onChangeHour}>
        {hours.map((hour) => (
          <option value={hour}>{hour}</option>
        ))}
      </Select>
      :
      <Select onChange={onChangeMinute}>
        {minutes.map((minute) => (
          <option value={minute}>{minute}</option>
        ))}
      </Select>
      <Select onChange={onChangePeriod}>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </Select>
    </Center>
  );
}
