import generateToken from '../Helpers/generateToken';

export const refreshTokenService = (userData: any) => {
    const newToken = generateToken(userData, process.env.KEY_TOKEN);
    return newToken;
};
