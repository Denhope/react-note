import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { ITextField } from '../../../types/types';

export const TextField: FC<ITextField> = (props) => {
  const [value, setValue] = useState<string>(props.text);
  const [editMode, setEditMode] = useState<boolean>(false);

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  const activeViewMode = () => {
    if (value.trim() !== '') {
      setEditMode(false);
      props.changeText(value, props.id, props.tag);
    } else {
      setValue('Enter some text');
    }
  };

  const clickHandler = () => {
    setEditMode(true);
  };

  return editMode ? (
    <div>
      <div>
        <textarea
          className="textArea"
          cols={45}
          rows={15}
          value={value}
          onChange={onChangeHandler}
          onBlur={activeViewMode}
        ></textarea>
      </div>
      <div className="1111"></div>
    </div>
  ) : (
    <div onClick={clickHandler} className="TextField">
      <p>{value}</p>
    </div>
  );
};
