import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingLeft: 8,
        paddingRight: 8,
        flex: 1,
        backgroundColor: '#131016'
    },
    eventName: {
        color: '#fdfcfe',
        fontSize: 24,
        marginTop: 48
    },
    eventDate: {
        color: '#6b6b6b',
        fontSize: 16
    },
    input: {
        backgroundColor: '#1f1e25',
        height: 56,
        borderRadius: 8,
        width: 200,
        color: '#fdfcfe',
        padding: 16,
        fontSize: 16,
        flex: 1,
        marginRight: 16
    },
    buttonText: {
        color: '#fdfcfe',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#31cf67',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {        
        marginTop: 32,
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        marginBottom: 48
    },
    listEmptyText: {
        color: '#fdfcfe',
        fontSize: 16,
        textAlign: "center"
    }
});
