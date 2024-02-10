import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './schema/student.schema';
import { StudentController } from './controller/student/student.controller';
import { StudentService } from './service/student/student.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://akliledev:h8UM5uKvYXAitISV@cluster0.naar56o.mongodb.net/',
      {
        dbName: 'studentdb',
      },
    ),
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
  ],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
