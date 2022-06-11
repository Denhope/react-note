import { IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React, { FC, useCallback } from 'react';
import { ITagProps } from '../../types/types';

import s from './TagItem.module.scss';

const TagItem: FC<ITagProps> = (props) => {
  const onTagClickHandler = useCallback(() => {
    props.selectTag(props.name);
  }, [props.selectTag, props.name]);
  const onButtonClickHandler = useCallback(() => {
    props.deleteTag(props.id);
  }, [props.deleteTag, props.id]);

  return (
    <div className={props.selected ? s.SelectedTag : s.Tag}>
      <div className={s.TagItemName} onClick={onTagClickHandler}>
        {props.name}
      </div>
      <div className="button">
        <IconButton onClick={onButtonClickHandler}>
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};

export default TagItem;
