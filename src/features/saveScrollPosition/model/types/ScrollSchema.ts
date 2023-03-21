//   адрес страницы, позиция скролла

export type ScrollType = Record<string, number>;

export interface ScrollSchema {
    scroll: ScrollType;
}
