

import React, {useState}from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import {connect} from 'react-redux'
import  {settheme} from '../../store/theme/action'


const mapStateToProps = (state) => {
    return {
        theme : state.themeReducer
    }
}



const ChangeTheme = ({theme, settheme}) =>{

   const themeList = [ "dark", "light", "default"]

    return (
        <View style={{
            width:"100%",
            alignItems: "center",
            justifyContent: "center"
        }}>
            
            <View style={{ flexDirection: "row",  width:"100%", justifyContent:"space-around"}}>
        

{themeList.map((i, key)=>{
    return(
        <TouchableOpacity key={key} style={{
            borderWidth:2,
            borderColor: theme.themeColor,
            backgroundColor:"white",
            borderRadius:12,
            padding:10,
            justifyContent:"center",
            alignItems:"center",
            width: "30%"
        }} onPress={() => settheme(i)}>
            <Text style={{alignItems:"center"}}>{i}</Text>
        </TouchableOpacity>

    )
})}

              


              


               </View>
        </View>
    )
}
export default connect(mapStateToProps, {settheme})(ChangeTheme);