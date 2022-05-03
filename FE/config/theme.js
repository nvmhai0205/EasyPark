const colors = {
    primary: "#1266F1",
    secondary: "#B23CFD",
    success: "#00B74A",
    danger: "#F93154",
    warning: "#FFA900",
    info: "#39C0ED",
    light: "#FBFBFB",
    dark: "#262626",
    gray: "#757F8C",
    transparent: "transparent",

    bgInput: "#FAF3DD30",
};

const Themes = {
    color: colors,
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        alignItems: "center",
        marginTop: 30,
        justifyContent: "center",
    },
    button: {
        TouchableOpacity: {
            alignItems: "center",
            justifyContent: "center",
            width: 300,
            height: 50,
            borderRadius: 10,
            backgroundColor: colors.primary,
            marginVertical: 10,
        },
        Text: {
            fontSize: 14,
            fontWeight: "bold",
            letterSpacing: 1,
            color: colors.light,
        },
    },
    input: {
        height: 50,
        width: 270,
        borderRadius: 10,
    },
    inputIcon: {
        width: 320,
        height: 50,
        borderWidth: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        borderRadius: 10,
        borderColor: colors.primary,
        paddingLeft: 10,
        backgroundColor: colors.bgInput,
    },
    inputIconWarning: {
        width: 320,
        height: 50,
        borderWidth: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        borderRadius: 10,
        borderColor: colors.danger,
        paddingLeft: 10,
        backgroundColor: colors.bgInput,
    },
    icon: {
        width: 30,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    validate: {
        color: colors.danger,
        width: 300,
    },
    link: {
        color: colors.primary,
        textDecorationLine: "underline",
    },
    headding: {
        color: colors.primary,
        fontSize: 24,
        fontWeight: "bold",
        width: 320,
    },
    buttonOutlineGray: {
        TouchableOpacity: {
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 40,
            borderRadius: 25,
            backgroundColor: colors.transparent,
            marginVertical: 10,
            borderColor: colors.gray,
            borderWidth: 1,
        },
        Text: {
            fontSize: 14,
            fontWeight: "bold",
            letterSpacing: 1,
            color: colors.gray,
        },
    },
    buttonOutlineSuccess: {
        TouchableOpacity: {
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 40,
            borderRadius: 25,
            backgroundColor: colors.transparent,
            marginVertical: 10,
            borderColor: colors.success,
            borderWidth: 1,
        },
        Text: {
            fontSize: 14,
            fontWeight: "bold",
            letterSpacing: 1,
            color: colors.success,
        },
    },

    buttonSuccess: {
        TouchableOpacity: {
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 40,
            borderRadius: 25,
            backgroundColor: colors.success,
            marginVertical: 10,
        },
        Text: {
            fontSize: 14,
            fontWeight: "bold",
            letterSpacing: 1,
            color: colors.light,
        },
    },

    buttonGray: {
        TouchableOpacity: {
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 40,
            borderRadius: 25,
            backgroundColor: colors.gray,
            marginVertical: 10,
        },
        Text: {
            fontSize: 14,
            fontWeight: "bold",
            letterSpacing: 1,
            color: colors.light,
        },
    },

    buttonTransparent: {
        TouchableOpacity: {
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 40,
            borderRadius: 25,
            backgroundColor: colors.transparent,
            marginVertical: 10,
        },
        Text: {
            fontSize: 14,
            fontWeight: "bold",
            letterSpacing: 1,
            color: colors.primary,
            textTransform: "uppercase",
        },
    },

    buttonPrimary: {
        TouchableOpacity: {
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 40,
            borderRadius: 25,
            backgroundColor: colors.primary,
            marginVertical: 10,
        },
        Text: {
            fontSize: 14,
            fontWeight: "bold",
            letterSpacing: 1,
            color: colors.light,
            textTransform: "uppercase",
        },
    },

    buttonOutlinePrimary: {
        TouchableOpacity: {
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 40,
            borderRadius: 25,
            backgroundColor: colors.transparent,
            marginVertical: 10,
            borderColor: colors.primary,
            borderWidth: 1,
        },
        Text: {
            fontSize: 14,
            fontWeight: "bold",
            letterSpacing: 1,
            color: colors.primary,
        },
    },
    label: {
        color: colors.gray,
        fontSize: 14,
        fontWeight: "bold",
        width: 320,
        marginVertical: 10,
    },
    flex: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        alignItems: "space-around",
        justifyContent: "space-around",
    },
    logo: {
        height: 180,
        width: 300,
    },
    banner: {
        width: 420,
        height: 300,
    }
};

export default Themes;
