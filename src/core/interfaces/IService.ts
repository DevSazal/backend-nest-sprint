export interface IService<T, PT> {
  /**
   * create record
   */
  create(dto?: T);

  /**
   * get the full records
   */
  readBatch();

  /**
   * get a single record
   */
  read(id?: string);

  /**
   * update a single record
   */
  update(id?: string, dto?: PT);

  /**
   * delete a single record
   */
  delete(id?: string);
}
