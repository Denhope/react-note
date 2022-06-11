import { v1 } from 'uuid';
import { ITagItem } from '../types/types';
import tagData from '../data/tagData.json';

const SELECT_TAG = 'SELECT_TAG';
const ADD_TAG = 'ADD_TAG';
const DELETE_TAG = 'DELETE_TAG';

// let initialState = tagData.map((tag) => {
//   return {
//     ...tag,
//     id: v1(),
//   };
// });

const initialState = [
  { id: v1(), tagName: '#working', selected: false },
  { id: v1(), tagName: '#study', selected: false },
  { id: v1(), tagName: '#all', selected: true },
];

export const tagsReducer = (state: Array<ITagItem> = initialState, action: ActionsType) => {
  switch (action.type) {
    case SELECT_TAG: {
      const newTags = state.map((tag) =>
        tag.tagName === action.payload.tagName
          ? { ...tag, selected: !tag.selected }
          : { ...tag, selected: false },
      );
      return newTags;
    }
    case ADD_TAG: {
      let newTags = state;
      let currentTag = newTags.find((tag) => tag.tagName === action.payload.tagName);
      if (currentTag === undefined) {
        newTags = [...state, { id: v1(), tagName: action.payload.tagName, selected: false }];
        return newTags;
      } else return state;
    }
    case DELETE_TAG: {
      const newTags = state.filter((tag) => tag.id !== action.payload.tagId);
      return newTags;
    }
    default:
      return state;
  }
};
type ActionsType = selectTagType | addTagType | deleteTagType;

export type selectTagType = ReturnType<typeof selectTag>;
export const selectTag = (tagName: string) => {
  return {
    type: SELECT_TAG,
    payload: {
      tagName,
    },
  } as const;
};
export type addTagType = ReturnType<typeof addTag>;
export const addTag = (tagName: string) => {
  return {
    type: ADD_TAG,
    payload: {
      tagName,
    },
  } as const;
};
export type deleteTagType = ReturnType<typeof deleteTag>;
export const deleteTag = (tagId: string) => {
  return {
    type: DELETE_TAG,
    payload: {
      tagId,
    },
  } as const;
};
