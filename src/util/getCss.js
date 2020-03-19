const getThisWidth = ()=> {
    const width = window.innerWidth;
    return width < 1024 ? 1024 : width;
}

export {getThisWidth};