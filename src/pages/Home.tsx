import { View,StyleSheet, Image, ScrollView } from "react-native";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import { ImageSourcePropType } from 'react-native';
import Card from "../components/Card";
import { getTarget } from "../utils/AxiosData";




export default function Home() {    

    const images : ImageSourcePropType[] = [        
        require('../assets/images/abductors.png'),        
        require('../assets/images/abs.png'),
        require('../assets/images/adductors.png'),
        require('../assets/images/biceps.png'),
        require('../assets/images/calves.png'),
        require('../assets/images/cardio.png'),
        require('../assets/images/delts.png'),
        require('../assets/images/forearms.png'),
        require('../assets/images/glutes.png'),
        require('../assets/images/hamstrings.png'),
        require('../assets/images/lats.png'),
        require('../assets/images/levator.jpg'),
        require('../assets/images/pectorals.png'),
        require('../assets/images/quads.png'),
        require('../assets/images/serratusanterior.jpg'),
        require('../assets/images/spine.jpg'),
        require('../assets/images/traps.png'),
        require('../assets/images/triceps.png'),
        require('../assets/images/upperback.png')
    ]


    const [data,setData] = useState<string[]>([])            
    const [sdata,SetSdata] = useState<string[]>([])    
    
    useEffect(() => {
        getTarget()
        .then((valor) => {
            
            if(valor !== "error"){
                setData(valor)
                SetSdata(valor)
            }else{
                console.log("error")
            }
            
        })

    },[])

    const handleSearch = (e : string ) => {
        
        if(e!== ''){
           SetSdata(data.filter(s => s.toLowerCase().startsWith(e.toLowerCase())))
       }else{
           SetSdata(data)
       }                                      
    }

    return ( 

        <View style={styles.home__container}>
            <Header onsearch={handleSearch}></Header>        

            <ScrollView >
                <View style={styles.scrollmain}>
                {
                sdata && sdata.map((e, index) => (<Card  imge={images[index]} name={e} key={index} />) ) 
                }   
            
            </View>
            </ScrollView>

                   
        </View>
     );
}

const styles = StyleSheet.create({
    home__container:{
        flex:1,      
        backgroundColor:"#303030",      
    },
    imatet:{
        width:100,
        height:100
    },
    scrollmain:{
        gap:30,
        alignItems:"center",
        paddingBottom:20
    }
})
