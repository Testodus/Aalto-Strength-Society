import { Model, DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../util/db';
import {
  NoticeCommentAttributes,
  NoticeCommentCreationAttributes,
} from 'database/util/databaseTypes';

class NoticeComment
  extends Model<NoticeCommentAttributes, NoticeCommentCreationAttributes>
  implements NoticeCommentAttributes { //eslint-disable-line
  public id!: number;
  public text!: string;
  public createdAt!: string;
  public userId!: number;
  public noticeId!: number;
}

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
    userId: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
    noticeId: {
      allowNull: false,
      type: DataTypes.NUMBER,
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
