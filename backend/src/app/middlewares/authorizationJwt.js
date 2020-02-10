import jwt from 'jsonwebtoken';
import {promisify} from 'util';

import authConfig from '../../config/authJwt';

export default async (req, res, next) => {
  const authHeaderWithTokenInside = req.headers.authorization;

  if (!authHeaderWithTokenInside) {
    return res.status(400).json({error: 'Token not provided'});
  }

  const [, token] = authHeaderWithTokenInside.split(' ');

  try {
    const jwtVerifyPromise = await promisify(jwt.verify);
    await jwtVerifyPromise(token, authConfig.secret);

    return next();
  } catch(err) {
    return res.status(401).json({error: 'Token invalid'});
  }
}
