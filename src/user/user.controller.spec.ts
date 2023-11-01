import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';

describe('UserController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [UserController],
      providers: [],
    }).compile();
  })

  describe('getUser', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(UserController);
      expect(appController.getUser()).toBe('user');
    });
  })
})
