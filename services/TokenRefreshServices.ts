import generateToken from '../Helpers/generateToken';

export const refreshTokenService = (userData: any, recordarme = false) => {
    const minutes = recordarme ? 60 * 24 * 7 : 15; 
    const newToken = generateToken(userData, process.env.KEY_TOKEN, minutes);
    return newToken;
};