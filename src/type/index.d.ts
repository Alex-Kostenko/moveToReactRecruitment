declare type Props = {
  children: string | JSX.Element | JSX.Element[];
};

declare type Res<T> = {
  items: T;
  totalCount: number;
  hasNextPage: boolean;
  [name: string]: any;
};
