import { QueryInterface } from 'sequelize';

export type migrationQueryInterface = {
  context: QueryInterface;
};
