import { Radio, Stack } from "native-base";
import React from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { setVisibility, Visibility } from "../store/visibility.slice";

const VisibilitySelector = () => {
  const dispatch = useAppDispatch();
  const visibility = useAppSelector(state => state.visibility.visibility)
  return (
    <Radio.Group
      name="something"
      value={visibility}
      onChange={(value) => {
        dispatch(setVisibility(value as Visibility));
      }}
      defaultValue="all"
      accessibilityLabel="pick a size"
    >
      <Stack
        direction={"row"}
        alignItems={{
          base: "flex-start",
          md: "center",
        }}
        space={4}
        w="75%"
        maxW="300px"
      >
        <Radio
          value="all"
          size="sm"
          my={1}
        >
          all
        </Radio>
        <Radio
          value="done"
          my={1}
          size="sm"
        >
          done
        </Radio>
        <Radio
          value="todo"
          my={1}
        >
          todo
        </Radio>
      </Stack>
    </Radio.Group>
  );
};

export default VisibilitySelector;