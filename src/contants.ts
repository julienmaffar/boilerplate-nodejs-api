export enum PostRoutes {
  BASE = '/posts',
  ALL = '/',
  GETBYID = '/:id',
  CREATE = '/',
  UPDATE = '/:id',
  DELETE = '/:id',
  CREATE_COMMENT = '/:id/comments',
  DELETE_COMMENT = '/:id/comments/:commentId',
  MULTER_CREATE_FIELD = 'picture',
}

export enum AppConfig {
  API_PATH = '/api',
  MULTER_FOLDER = 'uploads',
}
