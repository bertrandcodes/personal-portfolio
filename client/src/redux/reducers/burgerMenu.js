const burgerMenu = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_BURGER':
            return !state
        default:
            return state
    }
}

export default burgerMenu;