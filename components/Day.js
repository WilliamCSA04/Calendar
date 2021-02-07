import { FormControl, FormLabel, Modal, Flex, Input } from '@chakra-ui/react';

export default function Day({ day, onClick, events = [] }) {
  useD;
  return (
    <>
      <div>
        <p>{day}</p>
        {events.map((eventOfDay) => (
          <button>{eventOfDay}</button>
        ))}
        <button>adicionar Evento</button>
      </div>
      <Modal>
        <Flex as="form">
          <FormControl>
            <FormLabel>Nome do evento</FormLabel>
            <Input name="event" />
          </FormControl>
        </Flex>
      </Modal>
    </>
  );
}
