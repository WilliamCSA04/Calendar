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
  Center,
  IconButton
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
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
        <Button>{eventOfDay.name}</Button>
      ))}
      <IconButton
        icon={<AddIcon />}
        onClick={onOpen}
        aria-label="Adicionar evento"
        borderRadius="100%"
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent margin="auto" w="300px" backgroundColor="white">
          <ModalCloseButton />
          <Center>
            <Flex
              as="form"
              m={5}
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
