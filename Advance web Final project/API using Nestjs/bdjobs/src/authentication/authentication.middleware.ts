import { Injectable, NestMiddleware, Session, UnauthorizedException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    const token = req.headers['authorization'];

    console.log(token);
    if (token) {
      try {
        jwt.verify(token, 'mahir1234');
        next();
      } catch (error) {
        res.json({ message: 'Invalid token. Or Session expired. Please check again.' });
      }
    }
    else {
      res.json({ message: 'You are not logged in. Please log in or sign up!!' });
    }
  }
}