import React, { FC } from 'react';

import { TagsPropsType } from '../../../types/tags';
import {} from '../../../types/types';
import TagItem from '../TagItem';
import s from './Taglist.module.scss';

export const TagsLIst: FC<TagsPropsType> = (props) => {
  const mappedTags = props.tags.map((tagItem) => (
    <TagItem
      key={tagItem.id}
      name={tagItem.tagName}
      id={tagItem.id}
      deleteTag={props.deleteTag}
      selected={tagItem.selected}
      selectTag={props.selectTag}
    />
  ));

  return <div className={s.TagsList}>{mappedTags}</div>;
};
export default TagsLIst;
