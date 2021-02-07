import { Center, Select } from '@chakra-ui/react';

export default function CitiesSelector({ city = '' }) {
  return (
    <Center>
      <Select name="city">
        <option value="Tokyo">Tokyo</option>
        <option value="Osaka">Osaka</option>
        <option value="Kyoto">Kyoto</option>
        <option value="Yokohama">Yokohama</option>
        <option value="Nara">Nara</option>
      </Select>
    </Center>
  );
}
