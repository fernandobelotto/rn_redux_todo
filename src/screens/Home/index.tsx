import {
  AddIcon,
  Box,
  FlatList,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  KeyboardAvoidingView,
  MoonIcon,
  Spacer,
  SunIcon,
  useColorMode,
  useColorModeValue,
} from "native-base";
import { Platform } from "react-native";	
import React, { useState } from "react";
import TodoItem from "../../components/TodoItem";
import { useAppDispatch, useAppSelector } from "../../store";
import { addTodo } from "../../store/todo.slice";
import Visibility from "../../components/VisibilitySelector";
import VisibilitySelector from "../../components/VisibilitySelector";

const AppHomeScreen = () => {
  const [text, setText] = useState("");
  let todos = useAppSelector((state) => state.todo.entities);

  const visibility = useAppSelector(state => state.visibility.visibility);
  const dispatch = useAppDispatch();

  if(visibility === "todo") {
    todos = todos.filter(todo => !todo.completed);
  }

  if(visibility === "done") {
    todos = todos.filter(todo => todo.completed);
  }

  const handleAddTodo = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    flex={1}>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        p={3}
        safeArea
        flex={1}
        display="flex"
      >
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading
            textAlign="center"
            mb={2}
          >
            Redux Todo
          </Heading>

          <IconButton
            onPress={toggleColorMode}
            variant="unstyled"
            size="md"
            icon={
              colorMode === "light" ? (
                <MoonIcon color="black" />
              ) : (
                <SunIcon color="white" />
              )
            }
          />
        </Flex>
        <FlatList
          data={todos}
          renderItem={({ item }) => <TodoItem data={item} />}
          keyExtractor={(item) => item.id}
        />
        <Spacer />
        <VisibilitySelector />
        <HStack
          mt={4}
          w="100%"
          space={2}
        >
          <Input
            value={text}
            onChangeText={setText}
            flex={1}
          />
          <IconButton
            aria-label="add"
            isDisabled={!text}
            onPress={handleAddTodo}
            variant="solid"
            icon={<AddIcon />}
          />
        </HStack>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default AppHomeScreen;
