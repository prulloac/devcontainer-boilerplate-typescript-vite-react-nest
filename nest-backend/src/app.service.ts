import { Injectable } from '@nestjs/common';

const getRandom = (candidates: string[]) =>
  candidates[Math.floor(Math.random() * candidates.length)];

@Injectable()
export class AppService {
  getHello(): string {
    return JSON.stringify({
      salute: getRandom([
        'Hello World!',
        'Hi dudes!',
        'This is supposed to be a salute',
      ]),
    });
  }
}
