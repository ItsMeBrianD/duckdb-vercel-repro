import type { RowData } from "duckdb";
import duckdb from "duckdb";

const db = new duckdb.Database(`../../needful_things.duckdb`);

export const prerender = true

export const query = (query: string, ...params: string[]): Promise<RowData> => {
  return new Promise((resolve, reject) => {
    db.all(query, ...params, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};
