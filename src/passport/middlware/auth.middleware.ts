// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response } from 'express';
// import * as jwt from 'jsonwebtoken';
//
// @Injectable()
// export class AuthMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: () => void) {
//     const token = req.headers.token as string;
//     if (!token) {
//       try {
//         const decoded = jwt.verify(token, process.env.SECRET);
//         req.user = decoded;
//         // next();
//       } catch (err) {
//         res.status(401).json({ message: 'Invalid token' });
//       }
//       next();
//     }
//   }
// }
