import { Module } from '@nestjs/common';
import { SocketClient } from './socket-client.gateway';

@Module({
  providers: [SocketClient],
})
export class SocketModule {}
