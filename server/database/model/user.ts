import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../util/db';

// eslint-disable-next-line
class User extends Model { }

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      // Password as hash
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: 'note',
  }
);

export { User };
