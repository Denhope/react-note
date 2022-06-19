import TextField from '@material-ui/core/TextField';
import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { ITitleField } from '../../../types/types';
import s from './TitleField.module.scss';
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
    } else setError('Please enter Title');
  };

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    if (error) setError(null);
    setTitle(e.currentTarget.value);
  };

  return editMode ? (
    <TextField
      className={s.NoteItemTitle}
      value={title}
      onChange={changeTitle}
      autoFocus
      error={!!error}
      helperText={error}
      onBlur={activateViewMode}
    />
  ) : (
    <span onClick={clickHandler} className={s.NoteItemTitle}>
      {props.value}
    </span>
  );
};
