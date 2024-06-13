import Jwt from "jsonwebtoken"

const createToken = (jwtPlayload: { email: string, role: string }, secret: string, expiresIn: string) => {
    return Jwt.sign(jwtPlayload, secret, { expiresIn });
}


export default createToken;