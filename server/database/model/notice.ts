import { Model, DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../util/db';
import {
  NoticeAttributes,
  NoticeCreationAttributes,
} from 'database/util/databaseTypes';

class Notice
  extends Model<NoticeAttributes, NoticeCreationAttributes>
  implements NoticeAttributes { // eslint-disable-line
  public id!: number;
  public title!: string;
  public text!: string;
  public picture?: string | null;
  public createdAt!: string;
  public userId!: number;
}

Notice.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false, // The notice must have a title
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false, // The notice must have some text beyond the title
    },
    picture: {
      type: DataTypes.TEXT, // The picture for the notice is optional
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn('NOW'), // Automatic timestamp with the Sequelize function. The idea is that you dont give this attribute a value and it defaults to now
    },
    userId: {
      // Have to add this here, otherwise Typescript cries. Let's see if this breaks everything
      allowNull: false,
      type: DataTypes.NUMBER,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'notice',
  }
);

export { Notice };
