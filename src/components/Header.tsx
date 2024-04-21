import { View, StyleSheet, Text,TextInput} from "react-native";

interface Props{ 
    onsearch: (e :string ) => void
}


export default function Header({onsearch} : Props) {    

    return (  
        <View style={styles.header}>
            <Text style={styles.text__tittle}>Muscle Trainer</Text>
            <TextInput placeholder="Search muscle" placeholderTextColor={"black"} style={styles.input__header} onChangeText={onsearch}/>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:20,
        alignItems:"center"

    },
    text__tittle:{
        color:"#FFA826",
        fontSize:25
    },
    input__header:{
        backgroundColor:"white",
        width:"40%",
        height:40,
        borderRadius:10,      
        color:"black" ,        
    }
})

