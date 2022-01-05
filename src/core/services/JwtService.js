const jwtService = () => {
    let jwt = null;

    const getToken  = () => jwt;
    const setToken = token => jwt = token;
    const deleteToken = () => jwt = null;

    return { getToken, setToken, deleteToken };
};

export default jwtService();