export interface INewItem {
  addNewNote: (title: string) => void;
}

export interface ITitleField {
  value: string;
  onChange: (title: string) => void;
}

export interface ITextField {
  text: string;
  id: string;
  tag: string;
  changeText: (newValue: string, id: string, newTag: string) => void;
  addTag: (tagName: string) => void;
}
