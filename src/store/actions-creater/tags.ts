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

export const selectTag = (tagName: string): TagsActionsType => {
  return {
    type: TagsAction.SELECT_TAG,
    payload: {
      tagName,
    },
  };
};

export const addTag = (tagName: string): TagsActionsType => {
  return {
    type: TagsAction.ADD_TAG,
    payload: {
      tagName,
    },
  };
};

export const deleteTag = (tagId: string): TagsActionsType => {
  return {
    type: TagsAction.DELETE_TAG,
    payload: {
      tagId,
    },
  };
};
