import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BattleModule } from './battle/battle.module';

@Module({
  imports: [BattleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
