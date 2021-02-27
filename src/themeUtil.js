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
    }
}

const getTheme = () => {
    const myTheme = localStorage.getItem('myTheme') || defaultTheme;

    return theme[myTheme]
}

export default getTheme