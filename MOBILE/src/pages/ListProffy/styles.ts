import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f7",
    },
    teacherList: {
        marginTop: -40,
    },

    searchForm: {
       marginBottom: 18,

    },

    label: {
       color: "#d4c2ff",
       fontFamily: "Poppins_400Regular",
       marginTop: -5,
    },

    input: {
       height: 45,
       backgroundColor: "#fff",
       borderRadius: 8,
       justifyContent: "center",
       paddingHorizontal: 16,
       marginTop: 4,
       marginBottom: 16,
    },

    inputGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    inputBlock: {
        width: "48%",
    },

    submitButton: {
        backgroundColor: "#04d390",
        height: 56,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },

    submitButtonText: {
        color: "#fff",
        fontFamily: "Archivo_700Bold",
        fontSize: 18,
    },
});

export default styles;