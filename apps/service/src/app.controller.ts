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
    eval(userInput);
    return 'Executed Eval';
  }
}
