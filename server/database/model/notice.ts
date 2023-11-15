import { Model, DataTypes, Sequelize } from 'sequelize';
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
      type: DataTypes.STRING,
      unique: true,
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
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'notice',
  }
);

export { Notice };
