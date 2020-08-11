import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8257e5",
        justifyContent: "center",
        padding: 40,
    },

    banner: {
        width: "100%",
        resizeMode: "contain",
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: "#fff",
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
        textAlign: "center",
        
    },

    titleBold:{
        fontFamily: 'Poppins_600SemiBold',
        

    },

    buttonsContainer: {
        flexDirection: "row",
        marginTop: 40,
        justifyContent: "space-between",
    },

    button: {
        height: 150,
        width: "48%",
        backgroundColor: "#333",
        borderRadius: 8,
        padding: 24,
        justifyContent: "space-between",
    },

    primary:{
        backgroundColor: "#9871f5"
    },

    Secondary:{
        backgroundColor: "#04d390"
    },

    buttonText:{
        fontFamily: "Archivo_700Bold",
        color: "#fff",
        fontSize: 20,
    },

    totalConnectios:{
        fontFamily: "Poppins_400Regular",
        color: "#d4c2ff",
        fontSize: 12,
        lineHeight: 20,
        marginTop: 40,
        textAlign: "center",
    },

    

});

export default styles;