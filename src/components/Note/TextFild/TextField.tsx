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
      getNewTag();
      // props.changeText(value, props.id, props.tag);
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
      <div>
        <textarea
          className="textArea"
          cols={20}
          rows={10}
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
