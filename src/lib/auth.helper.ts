import jwt from 'jsonwebtoken';
import path from 'path';
import fs from 'fs';
import { createClient } from 'redis';
import dotenv from 'dotenv'

if(process.env.NODE_ENV === 'development') {
  dotenv.config()
}

interface Token {
  sub: string;
  iat: number;
  exp: number;
  iss: string;
}

const client = createClient({
  url: process.env.REDIS_URL || 'redis://127.0.0.1:6379'
});
client.auth(process.env.REDIS_PASS || 'chrisw1234');

const PRIV_ACCESS_KEY = fs.readFileSync(
  path.join(__dirname, '..', '..', '/ec_access_private.pem'),
  'utf-8'
);
const PRIV_REFRESH_KEY = fs.readFileSync(
  path.join(__dirname, '..', '..', '/ec_refresh_private.pem'),
  'utf-8'
);

const PUB_REFRESH_KEY = fs.readFileSync(
  path.join(__dirname, '..', '..', '/ec_refresh_public.pem')
);

const ACCESS_EXPIRESIN = 60 * 60 * 24;
const REFRESH_EXPIRESIN = 60 * 60 * 24 * 7;

export const issueAccessJwt = (userId: string) => {
  const accessJwt = jwt.sign({ sub: userId }, PRIV_ACCESS_KEY, {
    algorithm: 'ES256',
    expiresIn: ACCESS_EXPIRESIN,
    issuer: 'http://localhost:3000/',
  });
  return { accessJwt, accessExp: Date.now() + ACCESS_EXPIRESIN * 1000 };
};

export const issueRefreshJwt = (userId: string) => {
  const refreshJwt = jwt.sign({ sub: userId }, PRIV_REFRESH_KEY, {
    algorithm: 'ES256',
    expiresIn: REFRESH_EXPIRESIN,
    issuer: 'http://localhost:3000/',
  });
  client.set(userId, refreshJwt);
  client.expire(userId, REFRESH_EXPIRESIN);
  return { refreshJwt, refreshExp: Date.now() + REFRESH_EXPIRESIN * 1000 };
};

export const revokeRefreshTokenByToken = (refreshToken: string): boolean => {
  const decodedToken = decodeRefreshToken(refreshToken);
  if (typeof decodedToken === 'string') {
    return false
  } else {
    client.del(decodedToken.sub)
    return true
  }
}

export const revokeRefreshTokenByUserId = (userId: string) => {
    if(!userId) {
      return false
    } else {
      client.del(userId)
    }
}

export const refreshAuthJwts = (refreshToken: string) => {
  const decodedToken = decodeRefreshToken(refreshToken);
  if (
    !decodedToken ||
    typeof decodedToken === 'boolean' ||
    Date.now() >= decodedToken.exp * 1000
  ) {
    return false;
  }
  const newRefreshToken = issueRefreshJwt(decodedToken.sub);
  const newAccessToken = issueAccessJwt(decodedToken.sub);
  return { userId: decodedToken.sub, newAccessToken, newRefreshToken };
};

const decodeRefreshToken = (token: string): Token => {
  const decoded = jwt.verify(token, PUB_REFRESH_KEY, {
    algorithms: ['ES256'],
    issuer: 'http://localhost:3000/',
  });
  return decoded as Token;
};

export const retrieveIdFromJwt = (token: string) => {
  const decoded = jwt.verify(token, PUB_REFRESH_KEY, {
    algorithms: ['ES256'],
    issuer: 'http://localhost:3000/',
  }) as Token;
  if (typeof decoded === 'string') {
    return false;
  } else {
    return decoded.sub;
  }
};
