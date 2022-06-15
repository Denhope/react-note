import * as NotesActionCreators from './notes';
import * as TagsActionCreators from './tags';

export default {
  ...NotesActionCreators,
  ...TagsActionCreators,
};
