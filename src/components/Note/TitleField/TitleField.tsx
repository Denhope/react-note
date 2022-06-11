import TextField from '@material-ui/core/TextField';
import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { ITitleField } from '../../../types/types';

export const TitleField: FC<ITitleField> = (props) => {
  const [title, setTitle] = useState(props.value);
  const [error, setError] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const clickHandler = () => {
    setEditMode(true);
  };

  const activateViewMode = () => {
    if (title.trim() !== '') {
      setEditMode(false);
      props.onChange(title);
    } else setError('Title is required!');
  };

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    if (error) setError(null);
    setTitle(e.currentTarget.value);
  };

  return editMode ? (
    <TextField
      value={title}
      onChange={changeTitle}
      autoFocus
      error={!!error}
      helperText={error}
      onBlur={activateViewMode}
    />
  ) : (
    <span onClick={clickHandler} className="note_title">
      {props.value}
    </span>
  );
};
