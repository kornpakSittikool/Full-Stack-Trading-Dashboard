/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-implied-eval */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const foo = 'asd';
    console.log(foo);

    return this.appService.getHello();
  }

  @Get('test-semgrep')
  runEval(): string {
    const userInput = 'console.log("Hello World")';
    eval(userInput); // Semgrep should catch this
    return 'Executed Eval';
  }

  @Get('another-test')
  doSomethingDangerous(): void {
    // Example of dangerous pattern that Semgrep could potentially catch
    const dangerous = new Function('console.log("This could be dangerous!")');
    dangerous(); // This is flagged by eslint @typescript-eslint/no-implied-eval
  }
}
