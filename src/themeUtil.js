const defaultTheme = 'theme1'
const theme = {
    theme1: {
        text1: 'has-text-white',
        text2: 'has-text-primary',
        icon: 'has-text-primary',
        backgroundClass: 'has-background-primary',
    },
    theme2: {
        text1: 'has-text-white',
        text2: 'has-text-info',
        icon: 'has-text-info',
        backgroundClass: 'has-background-info',
    },
    theme3: {
        text1: 'has-text-white',
        text2: 'has-text-link',
        icon: 'has-text-link',
        backgroundClass: 'has-background-link',
    },
    theme4: {
        text1: 'has-text-white',
        text2: 'has-text-success',
        icon: 'has-text-success',
        backgroundClass: 'has-background-success',
    },
    theme5: {
        text1: 'has-text-white',
        text2: 'has-text-warning',
        icon: 'has-text-warning',
        backgroundClass: 'has-background-warning',
    },
    theme6: {
        text1: 'has-text-white',
        text2: 'has-text-danger-light',
        icon: 'has-text-danger-light',
        backgroundClass: 'has-background-danger-light',
    }
}

const getTheme = () => {
    const myTheme = localStorage.getItem('myTheme') || defaultTheme;

    return theme[myTheme]
}

export default getTheme