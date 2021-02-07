import {
  FormControl,
  FormLabel,
  Modal,
  Flex,
  Input,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Button,
  Center
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Day({ day, onClick }) {
  const [events, setEvents] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  function onSubmit(e) {
    e.preventDefault();
    setEvents([
      {
        name: e.target.name.value
      },
      ...events
    ]);
  }

  return (
    <Flex direction="column">
      <p>{day}</p>
      {events.map((eventOfDay) => (
        <button>{eventOfDay.name}</button>
      ))}
      <button onClick={onOpen}>Adicionar evento</button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent margin="auto" w="300px" backgroundColor="white">
          <ModalOverlay />
          <ModalCloseButton />
          <Center>
            <Flex
              as="form"
              onSubmit={(e) => {
                onSubmit(e);
                onClose();
              }}
              direction="column">
              <FormControl>
                <FormLabel>Nome do evento</FormLabel>
                <Input name="name" />
              </FormControl>
              <Button type="submit">Criar</Button>
            </Flex>
          </Center>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
