import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../util/db';

// eslint-disable-next-line
class NoticeComment extends Model { }

NoticeComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      // The only attribute defined in the model. Other ones are added automatically by sequelize
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

export { NoticeComment };
