import { useStateContext } from "./State/StateContext";


export default function theme() {
    const { mode } = useStateContext()

    const colorTokens = {
        gray: {
            0: "#FFFFFF",
            10: "#F6F6F6",
            50: "#F0F0F0",
            100: "#E0E0E0",
            200: "#C2C2C2",
            300: "#A3A3A3",
            400: "#858585",
            500: "#666666",
            600: "#4D4D4D",
            700: "#333333",
            800: "#1A1A1A",
            900: "#0A0A0A",
            1000: "#000000",
        },
        primary: {
            50: "#E6FBFF",
            100: "#CCF7FE",
            200: "#99EEFD",
            300: "#66E6FC",
            400: "#33DDFB",
            500: "#00D5FA",
            600: "#00A0BC",
            700: "#00B67D",
            800: "#00353F",
            900: "#001519",
        }
    };

    const pallate = mode == 'dark' ? {
        // palette vals dark md 
        primary: {
            dark: colorTokens.primary[200],
            main: colorTokens.primary[500],
            light: colorTokens.primary[800],
        },
        neutral: {
            dark: colorTokens.gray[100],
            main: colorTokens.gray[200],
            mediumMain: colorTokens.gray[300],
            medium: colorTokens.gray[400],
            light: colorTokens.gray[50],
        },
        background: {
            default: colorTokens.gray[700],
            alt: colorTokens.gray[800],

        }
    } : {
        // palette vals light md 
        primary: {
            dark: colorTokens.primary[700],
            main: colorTokens.primary[500],
            light: colorTokens.primary[50],
        },
        neutral: {
            dark: colorTokens.gray[700],
            main: colorTokens.gray[600],
            mediumMain: colorTokens.gray[500],
            medium: colorTokens.gray[400],
            light: colorTokens.gray[400],
        },
        background: {
            default: colorTokens.gray[50],
            alt: colorTokens.gray[100],
        }
    }

    return pallate
}