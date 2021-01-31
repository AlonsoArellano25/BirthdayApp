import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Birthday({ birthday, deleteBirthDay }) {
    const pasat = birthday.days > 0 ? true : false;

    const infoDate = () => {
        if (birthday.days === 0) {
            return <Text style={{ color: "#fff" }}>Es su cumpleaños</Text>
        } else {
            const days = - birthday.days;
            console.log(days)
            return (
                <View style={styles.textCurrent}>
                    <Text>{days}</Text>
                    <Text>{days === 1 ? "Día" : "Días"}</Text>
                </View>
            )
        }
    }

    return (
        <TouchableOpacity
            style={[
                styles.card, pasat ?
                    styles.pasat :
                    birthday.days === 0 ?
                        styles.actual : styles.current]}
            onPress={() => deleteBirthDay(birthday)}>

            <Text style={styles.userName}>{birthday.name} {birthday.lastname}</Text>
            {pasat ? <Text style={{ color: "#fff" }}>Pasado</Text> : infoDate()}

        </TouchableOpacity>
    )


}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 60,
        alignItems: "center",
        paddingHorizontal: 10,
        margin: 10,
        borderRadius: 15,
    },
    pasat: {
        backgroundColor: "#820000",
    },
    current: {
        backgroundColor: "#1ae1f2",
    },
    actual: {
        backgroundColor: "#559204",
    },
    userName: {
        color: "#fff",
        fontSize: 16,
    },
    textCurrent: {
        backgroundColor: "#fff",
        borderRadius: 20,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
    }
})
