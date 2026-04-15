export interface IApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  meta?: any;
}

export interface IApiError {
  code: string;
  message: string;
  details?: any;
}

export interface IPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface IQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  [key: string]: any;
}
