import { v1 } from 'uuid';
import {} from '../../types/types';
// import tagData from '../assets/data/tagData.json';
import { TagsAction, TagsActionsType, TagsState } from '../../types/tags';

const initialState: TagsState = {
  tagsData: [],
  isLoading: false,
  error: null,
};

export const tagsReducer = (state = initialState, action: TagsActionsType): TagsState => {
  switch (action.type) {
    case TagsAction.REQUEST_TAGS: {
      return {
        tagsData: [],
        isLoading: true,
        error: null,
      };
    }
    case TagsAction.RECEIVE_TAGS_SUCCESS: {
      return {
        tagsData: action.payload,
        isLoading: false,
        error: null,
      };
    }

    case TagsAction.RECEIVE_TAGS_ERROR: {
      return {
        tagsData: [],
        isLoading: false,
        error: action.payload,
      };
    }

    case TagsAction.SELECT_TAG: {
      return {
        tagsData: [
          ...state.tagsData.map((tag) =>
            tag.tagName === action.payload.tagName
              ? { ...tag, selected: !tag.selected }
              : { ...tag, selected: false },
          ),
        ],
        isLoading: false,
        error: null,
      };
    }
    case TagsAction.ADD_TAG: {
      let newTags = [...state.tagsData];
      let currentTag = newTags.find((tag) => tag.tagName === action.payload.tagName);
      if (currentTag === undefined) {
        newTags = [
          ...state.tagsData,
          { id: v1(), tagName: action.payload.tagName, selected: false },
        ];
        return { tagsData: newTags, isLoading: false, error: null };
      } else return { tagsData: state.tagsData, isLoading: false, error: null };
    }
    case TagsAction.DELETE_TAG: {
      return {
        isLoading: false,
        error: null,
        tagsData: [...state.tagsData.filter((tag) => tag.id !== action.payload.tagId)],
      };
    }
    default:
      return state;
  }
};
