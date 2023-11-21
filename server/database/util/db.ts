import { Sequelize } from 'sequelize';
import { Umzug, SequelizeStorage } from 'umzug';
//import { DATABASE_URL } from './config';
import 'dotenv/config';

const DATABASE_URL = process.env.DATABASE_URL || 'no database URL';

const sequelize = new Sequelize(process.env.DATABASE_URL || 'no database URL', {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const migrationConf = {
  migrations: {
    glob: '../migrations/*.ts',
  },
  storage: new SequelizeStorage({ sequelize, tableName: 'migrations' }),
  context: sequelize.getQueryInterface(),
  logger: console,
};

const runMigrations = async () => {
  const migrator = new Umzug(migrationConf);
  const migrations = await migrator.up();
  console.log('Migrations up to date', {
    files: migrations.map(mig => mig.name),
  });
};

const rollbackMigration = async () => {
  await sequelize.authenticate();
  const migrator = new Umzug(migrationConf);
  await migrator.down();
};

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await runMigrations();
    console.log('database connected');
  } catch (err) {
    console.log('connecting database failed');
    return process.exit(1);
  }

  return null;
};

export { connectToDatabase, sequelize, rollbackMigration };
