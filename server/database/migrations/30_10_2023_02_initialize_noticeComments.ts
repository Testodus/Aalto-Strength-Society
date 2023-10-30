import { DataTypes } from 'sequelize';

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable('notice_comments', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });
    // Define the FK to user.id
    await queryInterface.addColumn('notice_comments', 'user_id', {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'users', key: 'id' },
    });
    // Define the FK to Notice.id
    await queryInterface.addColumn('notice_comments', 'notice_id', {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'notices', key: 'id' },
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('note_comments');
  },
};
