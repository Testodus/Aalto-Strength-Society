import { DataTypes } from 'sequelize';
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
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
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
        allowNull: false,
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      picture: {
        type: DataTypes.TEXT,
        allowNull: false,
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
