import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './user.controller';
import { UserStore } from './user.store';

@Module({
  modules: [],
  controllers: [AppController, UserController],
  components: [UserStore],
})
export class ApplicationModule {}
