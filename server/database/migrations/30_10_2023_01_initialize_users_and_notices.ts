import { DataTypes, Sequelize } from 'sequelize';
import { migrationQueryInterface } from 'database/util/databaseTypes';

module.exports = {
  up: async ({ context: queryInterface }: migrationQueryInterface) => {
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Username must be unique
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Email must be unique
      },
      profilePicture: {
        type: DataTypes.STRING, // Optional profile picture URL pointing to some external image hosting website
      },
      typeOfLifting: {
        type: DataTypes.STRING, // E.g. Are they interested in powerlifting, crossfit, weightlifting, bodybuilding etc.
      },
      favouriteLift: {
        type: DataTypes.STRING, // E.g. Bench, squat, OHP, hammer curl
      },
      favouriteGym: {
        type: DataTypes.STRING, // E.g. Unisport Otaniemi, Liikku A bloc, Unisport Meilahti
      },
      favouriteGymTime: {
        type: DataTypes.STRING, // E.g. Usually from 18-20 in weekdays, or Sundays 13-15
      },
      contactInfo: {
        type: DataTypes.STRING, // E.g. Telegram nick: @lifterDude99
      },
    });
    await queryInterface.createTable('notices', {
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
    });
    // Define the FK to user.id in Notices table
    await queryInterface.addColumn('notices', 'user_id', {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'users', key: 'id' },
    });
  },
  down: async ({ context: queryInterface }: migrationQueryInterface) => {
    await queryInterface.dropTable('notes');
    await queryInterface.dropTable('users');
  },
};
