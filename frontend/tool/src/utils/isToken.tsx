const isToken = () => {
    if (window.localStorage.getItem("token"))
        return (true);
    return (false);
}

export default isToken;