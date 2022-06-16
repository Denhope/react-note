import React, { FC, useEffect, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
// import { selectTag, deleteTag, featchTags } from '../../../store/actions-creater/tags';
import { ITagsList, TagItemType, TagsPropsType } from '../../../types/tags';
import {} from '../../../types/types';
import TagItem from '../TagItem';
import s from './Taglist.module.scss';

export const TagsLIst: FC<TagsPropsType> = (props) => {
  const { tagsData } = useTypedSelector((state) => state.tags);
  // const { notesData } = useTypedSelector((state) => state.notes);
  const { featchTags, deleteTag, selectTag } = useActions();
  useEffect(() => {
    featchTags();
  }, []);
  const [selectedTag, setSelectedTag] = useState<string>('#all');
  const selectTagItem = (tagName: string) => {
    setSelectedTag(tagName);
    selectTag(tagName);
  };

  const deleteTagItem = (id: string) => {
    deleteTag(id);
  };

  let mappedTags = tagsData.map((tagItem) => (
    <TagItem
      key={tagItem.id}
      name={tagItem.tagName}
      id={tagItem.id}
      deleteTag={deleteTagItem}
      selected={tagItem.selected}
      selectTag={selectTag}
    />
  ));

  return <div className={s.TagsList}>{mappedTags}</div>;
};
export default TagsLIst;
