import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  FormLabel,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaskApi } from '../redux/taskReducer/actions';

const TaskInputCard = ({status}) => {
  const [title, setTitle] = useState('');
  const [taskStatus,setStatus]=useState(status);
  const [description, setDesc] = useState('');
  const [tag, setTag] = useState([]);
  const [subtask, setSubtask] = useState('');
  const [subtasks, setSubtasks] = useState([]);
  const tags = ['Personal', 'Office', 'Other'];
  const dispatch = useDispatch();

  const onChangeHandler = e => {
    const { name, value } = e.target;
    // console.log(checked);
    if (name === 'tag') {
      let newTags = [...tag];
      if (tag.includes(value)) {
        newTags.splice(tag.indexOf(value), 1);
      } else {
        newTags.push(value);
      }
      setTag(newTags);
    } else if (name === 'title') {
      setTitle(value);
    } else if (name === 'description') {
      setDesc(value);
    } else if (name === 'subtask') {
      setSubtask(value);
    }
  };

  const onenterHandler = e => {
    let newSubtasks = [...subtasks];
    if (e.key === 'Enter') {
      const newtask = { title: subtask, status: false };

      console.log(e.keyCode);
      newSubtasks.push(newtask);
      setSubtasks(newSubtasks);
      setSubtask('');
    }
  };
  const onSavehandler = () => {
    const payload = {
      status:taskStatus,
      title: title,
      description: description,
      tags: tag,
      subtasks: subtasks,
    };
    setTitle('');
    setDesc('');
    setTag([]);
    setSubtasks([]);
    dispatch(addTaskApi(payload));
  };

  return (
    <Box
      padding="10px"
      borderRadius={10}
      boxShadow="md"
      color="gray.200"
      bg={'gray.900'}
    >
      <FormLabel>Add task</FormLabel>
      <Text fontSize={15} color="green.500">
        Tag
      </Text>
      <CheckboxGroup colorScheme="green">
        <Stack direction={['row']}>
          {tags.map((tag, i) => {
            return (
              <Checkbox
                key={i}
                size="sm"
                name="tag"
                value={tag}
                onChange={onChangeHandler}
              >
                {tag}
              </Checkbox>
            );
          })}
        </Stack>
      </CheckboxGroup>
      <Text fontSize={15} color="green.500">
        Title
      </Text>
      <Input
        size="xs"
        autoFocus={true}
        value={title}
        placeholder="Title"
        name="title"
        onChange={onChangeHandler}
      />
      <Text fontSize={15} color="green.500">
        Description
      </Text>
      <Input
        size="xs"
        placeholder="Description"
        value={description}
        name="description"
        onChange={onChangeHandler}
      />

      <Text fontSize={15} color="green.500">
        Subtask
      </Text>
      <Input
        size="xs"
        placeholder="Subtask"
        value={subtask}
        name="subtask"
        onKeyUp={onenterHandler}
        onChange={onChangeHandler}
      />

      <Box>
        {subtasks.map(({ title }, i) => {
          return (
            <Text key={i} fontSize="12px">
              {title}
            </Text>
          );
        })}
      </Box>
      <Box width="100%" height="20px">
        <Button size="xs" bg="indigo" float="right" onClick={onSavehandler}>
          SAVE
        </Button>
      </Box>
    </Box>
  );
};

export default TaskInputCard;

TaskInputCard.porpTypes = {
  subtask: PropTypes.boolean,
};
