import { Module } from '@nestjs/common';
import { BattleService } from './battle.service';
import { BattleController } from './battle.controller';

@Module({
  imports: [],
  providers: [BattleService],
  controllers: [BattleController],
  exports: [],
})
export class BattleModule {}
