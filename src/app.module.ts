import { Module } from '@nestjs/common';
import { ExchangeService } from './exchange/exchange.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ExchangeService],
})
export class AppModule {}
