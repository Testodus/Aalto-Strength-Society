// Create the tables according to the models
import { User, Notice, NoticeComment } from '../model/index';

// alter: true makes the database match the model definitions
User.sync({ alter: true });
Notice.sync({ alter: true });
NoticeComment.sync({ alter: true });
