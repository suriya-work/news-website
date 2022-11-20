import { createTheme } from "@mui/material/styles"

export const Colors = {
    primery: '#522c3e',
    secondery: '#d1adcc',
    success: '#4acf50',
    info: '#00a2ff',
    danger: '#ff5722',
    warning: '#ffc107',
    dark: '#0e1b20',
    light: '#aaa',
    mated: '#abafb3',
    border: '#dddfe1',
    inverses: '#2f3d4a',
    shafi: '#333',
    //GRYES
    //
    dim_gray: '#696969',
    dove_gray: '#d5d5d5',
    body_bg: '#f3f6f9',
    light_gray: "rgb(230 , 230 , 230)",
    /////////
    //SOLid color 
    white: '#fff',
    black: '#000'

}

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primery
        },
        secondary: {
            main: Colors.secondery

        },
        components: {
            MuiButton: {
                defaultProps: {
                    disableRipple: true,
                    disableElevention:true
                }
            }
        }


    }

});

export default theme;