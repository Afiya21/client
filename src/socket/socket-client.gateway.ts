import { Injectable, OnModuleInit } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';

@Injectable()
export class SocketClient implements OnModuleInit {
  public SocketClient: Socket;

  constructor() {
    this.SocketClient = io('http://localhost:3000');
  }
  onModuleInit() {
    this.registor();
  }

  private registor() {
    this.SocketClient.on('connect', () => {
      console.log('connected to gateway');
    });
    this.SocketClient.on('hello', (payload: any) => {
      console.log(payload);
    });
  }
}
