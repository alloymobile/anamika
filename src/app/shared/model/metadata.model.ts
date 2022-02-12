export class Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
  constructor(sort?: any) {
    if (sort) {
      this.sorted = sort.sorted;
      this.unsorted = sort.unsorted;
      this.empty = sort.empty;
    } else {
      this.sorted = false;
      this.unsorted = true;
      this.empty = true;
    }
  }
}

export class Page {
  sort: Sort;
  pageSize: number;
  pageNumber: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  size: number;
  numbeOfElements: number;
  number: number;
  empty: boolean;
  pages: number[];

  constructor(res?: any) {
    if (res) {
      this.offset = Number(res.pageable.offset);
      this.pageSize = Number(res.pageable.pageSize);
      this.pageNumber = Number(res.pageable.pageNumber);
      this.paged = res.pageable.paged;
      this.unpaged = res.pageable.unpaged;
      this.sort = new Sort(res.pageable.sort);
      this.totalElements = res.totalElements;
      this.totalPages = res.totalPages;
      this.first = res.first;
      this.last = res.last;
      this.size = res.size;
      this.numbeOfElements = res.numberOfElements;
      this.number = res.number;
      this.empty = res.empty;
    } else {
      this.offset = 0;
      this.pageSize = 40;
      this.pageNumber = 0;
      this.paged = true;
      this.unpaged = false;
      this.sort = new Sort();
      this.totalElements = 0;
      this.totalPages = 0;
      this.first = true;
      this.last = true;
      this.size = 20;
      this.numbeOfElements = 0;
      this.number = 0;
      this.empty = false;
    }
    this.pages = [...Array(this.totalPages).keys()];
  }
}

export class Active {
  table: string;
  page: number;
  constructor(active?: any) {
    if (active) {
      this.table = active.table;
      this.page = active.page;
    } else {
      this.table = '';
      this.page = 0;
    }
  }
}

export class TableMetadata {
  name: string;
  constructor(tableMetadata?: TableMetadata) {
    if (tableMetadata) {
      this.name = tableMetadata.name;
    } else {
      this.name = '';
    }
  }
}

export class SortColumn {
  name: string;
  sort: boolean;
  search: string;
  filter: any;
  constructor(sortColumn?: any) {
    this.search = '';
    this.filter = [];
    if (sortColumn) {
      this.name = sortColumn.name;
      this.sort = sortColumn.sort;
    } else {
      this.name = '';
      this.sort = false;
    }
  }
}
