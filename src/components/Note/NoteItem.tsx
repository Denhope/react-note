import React, { FC, useCallback } from 'react';
import { INoteItem } from '../../types/types';
import { IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { TitleField } from './TitleField/TitleField';
import { TextField } from './TextFild/TextField';

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
      <TitleField value={props.name} onChange={changeNoteTitleCallback} />
      <IconButton onClick={() => props.deleteNote(props.id)}>
        <Delete />
      </IconButton>
      <TextField
        text={props.noteText}
        id={props.id}
        tag={props.tag}
        changeText={function (newValue: string, id: string, newTag: string): void {
          throw new Error('Function not implemented.');
        }}
        addTag={function (tagName: string): void {
          throw new Error('Function not implemented.');
        }}
      ></TextField>

      <div className="note_tag">{props.tag}</div>
    </div>
  );
};

export default NoteItem;
