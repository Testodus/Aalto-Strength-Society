import { Model, DataTypes, Sequelize } from 'sequelize';
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
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn('NOW'), // Automatic timestamp with the Sequelize function. The idea is that you dont give this attribute a value and it defaults to now
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'noticeComment',
  }
);

export { NoticeComment };
