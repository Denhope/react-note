import { selectTagType, addTagType, deleteTagType } from '../store/actions-creater/tags';

export interface ITagItem {
  id: string;
  tagName: string;
  selected: boolean;
}

export interface ITagProps {
  name: string;
  id: string;
  selected: boolean;
  deleteTag: (id: string) => void;
  selectTag: (tagName: string) => void;
}

export interface ITagsList {
  tags: Array<TagItemType>;
  deleteTag: (id: string) => void;
  selectTag: (tagName: string) => void;
}
export type TagsPropsType = {
  tags: Array<TagItemType>;
  deleteTag: (id: string) => void;
  selectTag: (tagName: string) => void;
};

export type TagItemType = {
  id: string;
  tagName: string;
  selected: boolean;
};

export interface TagsState {
  tagsData: Array<TagItemType>;
  isLoading: boolean;
  error: null | string;
}

export interface RequestTagsAction {
  type: TagsAction.REQUEST_TAGS;
}

export interface RecieveTagsSuccess {
  type: TagsAction.RECEIVE_TAGS_SUCCESS;
  payload: Array<TagItemType>;
}

export interface RecieveTagsError {
  type: TagsAction.RECEIVE_TAGS_ERROR;
  payload: string;
}

export enum TagsAction {
  REQUEST_TAGS = 'REQUEST_TAGS',
  RECEIVE_TAGS_SUCCESS = 'RECEIVE_TAGS_SUCCESS',
  RECEIVE_TAGS_ERROR = 'RECEIVE_TAGS_ERROR',
  SELECT_TAG = 'SELECT_TAG',
  ADD_TAG = 'ADD_TAG',
  DELETE_TAG = 'DELETE_TAG',
}

export type TagsActionsType =
  | selectTagType
  | deleteTagType
  | addTagType
  | RecieveTagsError
  | RecieveTagsSuccess
  | RequestTagsAction;
