import React, { FC, useCallback } from 'react';
import { INoteItem } from '../../types/notes';
import { IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { TitleField } from './TitleField/TitleField';
import { TextField } from './TextFild/TextField';
import s from './NoteItem.module.scss';

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
    <div className={s.NoteItem}>
      <div className={s.NoteTitleWrapper}>
        <TitleField value={props.name} onChange={changeNoteTitleCallback} />
        <IconButton onClick={() => props.deleteNote(props.id)}>
          <Delete />
        </IconButton>
      </div>
      <div className={s.ContentWrapper}>
        <TextField
          text={props.noteText}
          id={props.id}
          tag={props.tag}
          changeText={props.changeText}
          addTag={addTagCallback}
        ></TextField>
        <div className={s.NoteTag}>{props.tag}</div>
      </div>
    </div>
  );
};

export default NoteItem;
