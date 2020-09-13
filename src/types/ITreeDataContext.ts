export type TreePost = {
  id: string;
  parentId: null | string;
  content: string;
  publishDate: string;
  modifiedDate: string;
  isExpanded: boolean;
  createdBy: {
    user: {
      firstName: string;
      lastName: string;
    };
  };
  replies: Array<TreePost>;
};

export interface ITreeDataContext {
  loading: boolean;
  error: null | string;
  users: Array<TreePost>;
}

export enum NODEVIEW {
  NAME = 'NAME',
  CONTENT = 'CONTENT',
}
