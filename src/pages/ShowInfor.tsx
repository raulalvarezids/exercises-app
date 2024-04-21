import { Text, View,StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRoute, useNavigation} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RooParam } from "../interface/exe";
import { useEffect, useState } from "react";
import { getByTarget } from "../utils/AxiosData";
import { Exer } from "../interface/exe";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CardInfo from "../components/CardInfo";


type NavigationProps = NativeStackNavigationProp<RooParam,'Home'>

export default function ShowInfor() {

    const {navigate} = useNavigation<NavigationProps>()   
    const {params:{name}} = useRoute<NativeStackScreenProps<RooParam,'Details'>['route']>();
    const [details,setDetails] = useState<Exer[]>([])

      
    useEffect(() => {

        getByTarget(name)
        .then((valor) => {
            if(valor !== "error"){                
              setDetails(valor)              
            }else{
                console.log("error")
            }
          })        
    },[])

    const handleBack = () => {
        navigate('Home')
    }


    return (  
        <View  style={styles.mainContainer} >
            <View style={styles.nav}>
                
                <TouchableOpacity onPress={handleBack}>                
                    <Image source={require('../assets/icons/back.png')} style={styles.image}/>
                </TouchableOpacity>
                <View>
                    <Text style={styles.textM}>Muscle:</Text>
                    <Text style={styles.textN}>{name}</Text>   
                                                                                                
                </View>                
            </View>

            
            <ScrollView >

                <View style={styles.exeContainer}>

                    {
                        details && details.map((e) => <CardInfo key={e.id} name={e.name} secondaryMuscles={e.secondaryMuscles} bodyPart={e.bodyPart} equipment={e.equipment} id={e.id} gifUrl={e.gifUrl} target={e.target} instructions={e.instructions}/>)

                    }

                </View>


            </ScrollView>

           

        </View>
    );
}


const styles = StyleSheet.create({
    mainContainer:{
     backgroundColor:"#303030",      
     flex:1
    },
    nav:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginTop:25,
        // height:50,       

    },
    image:{        
        backgroundColor: '#FFA826',
        borderRadius:50,
        width:40,
        height:40,        
    },
    textM:{
        color:"#FFA826"        
    },
    textN:{
        color:"white",
        fontSize:30,        
        height:"auto",

    },
    exeContainer:{
        marginTop:50,
        gap:20
    }
})
