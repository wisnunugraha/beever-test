/**
 * - Package
 * 
 */
const JWToken = require('jsonwebtoken');
const SECRET = process.env.JWT;
exports.JWTToken = (params) => {
  let token = 'Bearer ' + JWToken.sign({
    id: params.id
  }, SECRET, {
    expiresIn: 2592000 //720h expired
  });
  return token;

}