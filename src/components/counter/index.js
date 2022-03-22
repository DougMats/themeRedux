

import React, {useState}from 'react'
import { View, TouchableOpacity, Text, TextInput } from 'react-native'
import {connect} from 'react-redux'
import {selectCurrentAmount} from '../../store/amount/reducer'


import  {deposit, withdraw} from '../../store/amount/action'

const mapStateToProps = (state) => {
    return {
        amount : state.amountReducer.amount,
        //amount : selectCurrentAmount(state)
    }
}



const Counter = ({amount, deposit, withdraw}) =>{
    const [newValue, setnewValue] = useState(0)


    return (
        <View style={{
            width:"100%",
            alignItems: "center",
            justifyContent: "center"
        }}>

            <Text style={{
                marginBottom:10,
                fontSize:20,
                textTransform:"uppercase",
                fontWeight:"bold"
            }}>amount: {amount}</Text>




<TextInput
value={newValue}
placeholder='0000'
onChangeText={(text)=> setnewValue(text)}
/>





            <View style={{
                flexDirection: "row",
                width:"100%",
                justifyContent:"space-around"
            }}>
                <TouchableOpacity style={{
                    backgroundColor:"white",
                    borderRadius:12,
                    padding:10,
                    justifyContent:"center",
                    alignItems:"center",
                    width: "40%"
                }} onPress={() => deposit(newValue)}>
                    <Text style={{alignItems:"center"}}>sumar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor:"white",
                    borderRadius:12,
                    padding:10,
                    justifyContent:"center",
                    alignItems:"center",
                    width: "40%"
                }} onPress={() => withdraw(newValue)}>
                    <Text style={{alignItems:"center"}}>restar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default connect(mapStateToProps, {deposit, withdraw})(Counter);