import { View, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

export default input = ({addTodo}) => {
    const [todo,setTodo]=useState("");
    const handleBtnAdd = ()=>{
        if (todo !==""){
            const newTodo = {name: todo,done:false};
            addTodo(newTodo);
            setTodo("");

        }else(
                alert("You must enter a todo name!")
            )
        };

        return (
            <View style={styles.InputContainer}>
                <TextInput value={todo} onChangeText={setTodo} style={styles.Input}></TextInput>

                <TouchableOpacity onPress={handleBtnAdd} style={styles.button}>
                    <Text style={styles.textBuutton}> OK </Text>
                </TouchableOpacity>
            </View>
        )
}

const styles = StyleSheet.create({
    InputContainer:{
        flexDirection:"row",
        backgroundColor:"#AAAAAA"
    },

    Input:{
        flex:5,
        height:50,
        backgroundColor:"white",
        fontSize:20,
        padding:10,
        margin:10,
        borderRadius:15,
    },

    button:{
        flex:1,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#0074D9",
        margin:10,
        borderRadius:15,
    },

    textBuutton:{
        fontSize:20,
        fontWeight:"bold",
        color:"white"
    }
})