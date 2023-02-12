import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1f1e25',
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'center',
    },
    name: {
        color: '#fdfcfe',
        fontSize: 16,
        flex: 1,
        marginLeft: 16
    },
    buttonText: {
        color: '#fdfcfe',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#e23c44',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 56,
        height: 56,
        borderRadius: 8,
    },
    imageButton: {
        width: 56,
        height: 56,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 4
    }
});