import axios from 'axios';
import { TagsAction } from '../../types/tags';
import dataTags from '../../assets/data/tagData.json';
import { Dispatch } from 'redux';
import { TagsActionsType } from '../../types/tags';

export const featchTags = () => {
  return async (dispatch: Dispatch<TagsActionsType>) => {
    try {
      dispatch({ type: TagsAction.REQUEST_TAGS });
      const response = await axios.get(dataTags);

      setTimeout(() => {
        dispatch({
          type: TagsAction.RECEIVE_TAGS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (err) {
      dispatch({ type: TagsAction.RECEIVE_TAGS_ERROR, payload: 'Error' });
    }
  };
};

export const selectTag = (tagName: string) => {
  return {
    type: TagsAction.SELECT_TAG,
    payload: {
      tagName,
    },
  } as const;
};

export const addTag = (tagName: string) => {
  return {
    type: TagsAction.ADD_TAG,
    payload: {
      tagName,
    },
  } as const;
};

export const deleteTag = (tagId: string) => {
  return {
    type: TagsAction.DELETE_TAG,
    payload: {
      tagId,
    },
  } as const;
};

export type selectTagType = ReturnType<typeof selectTag>;
export type deleteTagType = ReturnType<typeof deleteTag>;
export type addTagType = ReturnType<typeof addTag>;
