import { Get, Query, Controller } from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Battle } from './battle.interface';
import { BattleService } from './battle.service';

@ApiBearerAuth()
@ApiTags('battle')
@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @ApiOperation({ summary: 'Get battle statistics!' })
  @ApiResponse({ status: 200, description: 'Return Array of days of battle!' })
  @Get()
  async getBattleStatistics(
    @Query('army1') army1: number,
    @Query('army2') army2: number,
  ): Promise<Battle> {
    return await this.battleService.battleOfTwoArmies(army1, army2);
  }
}
