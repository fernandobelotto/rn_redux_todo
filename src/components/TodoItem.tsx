import {
  Checkbox,
  DeleteIcon,
  Flex,
  HStack,
  IconButton,
  Pressable,
  Text,
  useColorModeValue,
} from "native-base";
import React from "react";
import { useAppDispatch } from "../store";
import { deleteTodo, Todos, toggleTodo } from "../store/todo.slice";

type Props = {
  data: Todos;
};

const TodoItem = (props: Props) => {
  const item = props.data;

  const dispatch = useAppDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(item.id));
  };

  const handleToggleTodo = () => {
    dispatch(toggleTodo(item.id));
  };

  return (
    <Pressable onPress={handleToggleTodo}>
      <Flex
        key={item.id}
        p={3}
        rounded="md"
        my={1}
        bg={useColorModeValue("gray.200", "gray.800")}
        direction="row"
        justifyContent="space-between"
      >
        <HStack space={3}>
          <Checkbox
            onChange={handleToggleTodo}
            value={item.completed.toString()}
            isChecked={item.completed}
            colorScheme="green"
            aria-label="todo"
          />
          <Text strikeThrough={item.completed}>{item.text}</Text>
        </HStack>
        <IconButton
          aria-label="delete"
          onPress={handleDeleteTodo}
          variant="solid"
          size="xs"
          icon={<DeleteIcon />}
        />
      </Flex>
    </Pressable>
  );
};

export default TodoItem;
