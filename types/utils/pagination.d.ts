export interface PaginationMeta {
  total: number,
  firstItem: number,
  lastItem: number,
  lastPage: number,
  perPage: number,
  currentPage: number,
  firstIndex: number,
  lastIndex: number,
}

export type Pagination<M = any> = {
  data: M[],
  meta: PaginationMeta
}

export interface ShortenPaginationMeta {
  total: number,
  from: number,
  to: number,
  last_page: number,
}

export type ShortenPagination<M = any> = {
  data: M[],
  meta: ShortenPaginationMeta;
}
