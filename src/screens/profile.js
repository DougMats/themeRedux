import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Counter from '../components/counter'
import Theme from '../components/theme'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        theme: state.themeReducer,
    }
}


function Profile({navigation, theme }) {
    function goToScreen(screen, data) {
        navigation.navigate(screen, { randomCod: Math.random(), data })
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: theme.themeBackground,// "#c1c1c1",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <Text style={{ color: theme.themeColor }}>Profile</Text>
            <Counter />
            <Theme />
            <TouchableOpacity onPress={() => goToScreen("Dashboard", null)}>
                <Text>go to Dashboard</Text>
            </TouchableOpacity>
        </View>
    )
}
export default connect(mapStateToProps, {})(Profile);