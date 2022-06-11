import React, { FC, useCallback, useState } from 'react';
import { INewItem } from '../../types/types';
import s from './NewNote.module.scss';

const AddNewNote: FC<INewItem> = ({ addNewNote }) => {
  const [value, setValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (errorMessage) {
      setErrorMessage(null);
    }
    setValue(e.target.value);
  };

  const addItem = useCallback(() => {
    if (value.trim() !== '') {
      setErrorMessage(null);
      addNewNote(value);
      setValue('');
    } else {
      setErrorMessage('Please enter the title');
    }
  }, [addNewNote, value]);

  return (
    <div className={s.NewNote}>
      <input
        type="text"
        value={value}
        onChange={changeHandler}
        className="input"
        placeholder="Add Note Title"
      />
      <button onClick={addItem}>addNewNote</button>
    </div>
  );
};
export default AddNewNote;
