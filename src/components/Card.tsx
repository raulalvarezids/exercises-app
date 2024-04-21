import { Image, Text, View,StyleSheet,TouchableOpacity } from "react-native";
import { ImageSourcePropType } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {RooParam} from '../interface/exe'

type Props = {
    name : string,
    imge : ImageSourcePropType
}

type NavigationProps = NativeStackNavigationProp<RooParam,'Details'>


function Card({name,imge} : Props) { 
    const {navigate} = useNavigation<NavigationProps>()   

    const handleOnshow = () => {
        navigate('Details', {name})
    }


    return (  
        <TouchableOpacity style={styles.card} onPress={handleOnshow}>            
            <Image source={imge} style={styles.image}/> 
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    card:{        
        borderColor:"#FFFFFF",
        flexDirection:"row",
        borderWidth:2,
        width:"80%",
        borderRadius:10,
        padding:10,
        alignItems:"center",
        gap:10

    },
    image:{
        width:80,
        height:80
    },
    name:{
        color:"white",
        fontSize:20
    }
})


export default Card;