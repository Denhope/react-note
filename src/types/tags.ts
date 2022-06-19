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

export interface RequestTagsAC {
  type: TagsAction.REQUEST_TAGS;
}

export interface RecieveTagsSuccessAC {
  type: TagsAction.RECEIVE_TAGS_SUCCESS;
  payload: Array<TagItemType>;
}

export interface RecieveTagsErrorAC {
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

export interface SelectTagAC {
  type: TagsAction.SELECT_TAG;
  payload: {
    tagName: string;
  };
}

export interface DeleteTagAC {
  type: TagsAction.DELETE_TAG;
  payload: {
    tagId: string;
  };
}

export interface AddTagAC {
  type: TagsAction.ADD_TAG;
  payload: {
    tagName: string;
  };
}

export type TagsActionsType =
  | SelectTagAC
  | DeleteTagAC
  | AddTagAC
  | RecieveTagsErrorAC
  | RecieveTagsSuccessAC
  | RequestTagsAC;
