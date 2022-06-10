import React, { FC, useCallback } from 'react';
import { INoteItem } from '../../types/types';
import { IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { EditTitleField } from './EditTitleField/EditTitleField';

const NoteItem: FC<INoteItem> = (props) => {
  const addTagCallback = useCallback(
    (tagName: string) => {
      props.addTag(tagName, props.id);
    },
    [props.addTag, props.id],
  );

  const changeNoteTitleCallback = useCallback(
    (newValue: string) => {
      props.changeNoteTitle(newValue, props.id);
    },
    [props.changeNoteTitle, props.id],
  );

  return (
    <div className="note_card">
      <EditTitleField value={props.name} onChange={changeNoteTitleCallback} />
      <IconButton onClick={() => props.deleteNote(props.id)}>
        <Delete />
      </IconButton>

      <div className="note_tag">{props.tag}</div>
    </div>
  );
};

export default NoteItem;
