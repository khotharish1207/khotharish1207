const defaultTheme = 'theme1'
const theme = {
    theme1: {
        text1: 'has-text-white',
        text2: 'has-text-primary',
        icon: 'has-text-primary',
        backgroundClass: 'has-background-primary',
        timeLine: "is-white"
    },
    theme2: {
        text1: 'has-text-white',
        text2: 'has-text-info',
        icon: 'has-text-info',
        backgroundClass: 'has-background-info',
        timeLine: "is-white"
    },
    theme3: {
        text1: 'has-text-white',
        text2: 'has-text-link',
        icon: 'has-text-link',
        backgroundClass: 'has-background-link',
        timeLine: "is-white"
    },
    theme4: {
        text1: 'has-text-white',
        text2: 'has-text-success',
        icon: 'has-text-success',
        backgroundClass: 'has-background-success',
        timeLine: "is-white"
    },
    theme5: {
        text1: 'has-text-white',
        text2: 'has-text-warning',
        icon: 'has-text-warning',
        backgroundClass: 'has-background-warning',
        timeLine: "is-white"
    },
    theme6: {
        text1: 'has-text-dark',
        text2: 'has-text-grey-light',
        icon: 'has-text-grey-light',
        backgroundClass: 'has-background-grey-light',
        timeLine: "is-dark"
    }
}

const getTheme = () => {
    const myTheme = localStorage.getItem('myTheme') || defaultTheme;

    return theme[myTheme]
}

export default getTheme
export {
    theme
}