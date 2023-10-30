import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../util/db';

// eslint-disable-next-line
class Notice extends Model { }

Notice.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    text: {
      // Kind of a description of a notice
      type: DataTypes.TEXT,
      allowNull: false,
    },
    picture: {
      // What is the datatype of this? Just a string pointing to an externally hosted picture URL?
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: 'note',
  }
);

export { Notice };
