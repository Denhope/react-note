import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { ITextField } from '../../../types/types';
import s from './TextField.module.scss';
export const TextField: FC<ITextField> = (props) => {
  const [value, setValue] = useState<string>(props.text);
  const [editMode, setEditMode] = useState<boolean>(false);

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 640) {
      setValue(e.currentTarget.value);
    }
  };

  const activeViewMode = () => {
    if (value.trim() !== '') {
      setEditMode(false);
      getNewTag();
    } else {
      setValue('Enter some text');
    }
  };

  const getNewTag = useCallback(() => {
    const hashTagIndex = value.indexOf('#');
    if (hashTagIndex === -1) {
      props.addTag('#all');
      props.changeText(value, props.id, '#all');
    } else {
      let result = '';
      for (let i = hashTagIndex; i < value.length; i++) {
        if (value[i] !== ' ') {
          result = result + value[i];
        } else {
          break;
        }
      }
      props.addTag(result);
      props.changeText(value, props.id, result);
    }
  }, [props.changeText, props.addTag, props.id, value]);

  const clickHandler = () => {
    setEditMode(true);
  };

  return editMode ? (
    <div>
      <textarea
        cols={25}
        rows={5}
        className={s.Textarea}
        value={value}
        onChange={onChangeHandler}
        onBlur={activeViewMode}
      ></textarea>
    </div>
  ) : (
    <div onClick={clickHandler} className={s.NoteTextWrapper}>
      <p>{value}</p>
    </div>
  );
};
