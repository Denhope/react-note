import React, { FC } from 'react';
import { ITagItem } from '../../../types/types';
import TagItem from '../TagItem';
import s from './Taglist.module.scss';

interface TagsListProps {
  tags: Array<ITagItem>;
  deleteTag: (id: string) => void;
  selectTag: (tagName: string) => void;
}

const TagsDisplay: FC<TagsListProps> = (props) => {
  let mappedTags = props.tags.map((tagItem) => (
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

export default TagsDisplay;
