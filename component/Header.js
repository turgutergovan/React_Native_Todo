import { View,Text,StyleSheet } from "react-native";

export default Header =()=>{
    return(
        <View style={style.titleContainer}>
        <Text style={style.title}>First React Native Project</Text>
        </View>
    );
};

const style = StyleSheet.create({
    titleContainer:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },

    title:{
        fontSize:30,
        color:"white"
    }
})