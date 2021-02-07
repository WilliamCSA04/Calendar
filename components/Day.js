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
  IconButton,
  OrderedList,
  ListItem
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import TimeSelector from './TimeSelector';

export default function Day({ day }) {
  const [events, setEvents] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  function onSubmit(e) {
    e.preventDefault();
    const newEvents = [
      {
        name: e.target.name.value,
        hour: e.target.hour.value,
        minute: e.target.minute.value,
        period: e.target.period.value
      },
      ...events
    ];
    setEvents(newEvents);
  }

  return (
    <Flex direction="column" w="180px" h="180px" border="1px" borderColor="gray.200" p={1}>
      <p>{day}</p>
      <OrderedList styleType="none" m={0}>
        {events.map((eventOfDay) => (
          <ListItem>
            <Button variant="ghost" h="20px" w="100%">
              {eventOfDay.name} - {eventOfDay.hour}:{eventOfDay.minute} {eventOfDay.period}
            </Button>
          </ListItem>
        ))}
      </OrderedList>
      <IconButton
        icon={<AddIcon />}
        colorScheme="blue"
        onClick={onOpen}
        aria-label="Adicionar evento"
        borderRadius="50%"
        mt="auto"
        w="35px"
        h="35px"
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
              <FormControl mt={5}>
                <FormLabel>Event Name</FormLabel>
                <Input name="name" maxLength="30" />
              </FormControl>
              <FormControl mt={5}>
                <FormLabel>Time</FormLabel>
                <TimeSelector />
              </FormControl>
              <Button mt={5} type="submit" colorScheme="green">
                Save
              </Button>
            </Flex>
          </Center>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
