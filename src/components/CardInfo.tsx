import { View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import { Exer } from "../interface/exe";
import { useState } from "react";

export default function CardInfo({bodyPart,equipment,gifUrl,instructions,name} : Exer) {

      
    const [show,setShow] = useState<boolean>(false)
    
    const handlShow = () => {
        setShow(!show)
    }      


    type ItemProps = {text: string};

    
    const Item = ({text}: ItemProps) => (
        <View >
          <Text>{text}</Text>
        </View>
      );


    return ( 
        <View  style={styles.mainContainer}>  

            <TouchableOpacity onPress={handlShow}>

                <View  style={styles.name__container}>
                        <Text style={styles.name} >{name}</Text>                                
                        <Image source={require('../assets/icons/arrowwhite.png')} style={ !show ? styles.imageArrow : styles.changer } />                                                
                </View>
            </TouchableOpacity>        


            <View style={show ? styles.detailContainer : styles.notShow} > 
            
                <Image source={{uri:gifUrl}} style={styles.imageurl}/>

                <Text style={styles.textAll}> 
                    <Text style={styles.resaltador}>BodyPart: </Text>
                    {bodyPart}
                </Text>

                <Text style={styles.textAll}> 
                    <Text style={styles.resaltador}>Equipment: </Text>
                    {equipment}
                </Text>

                

                <View style={styles.instrucContainer} >
                
                    <Text style={styles.instructionTittle}>Instructions: </Text>

                {
                    instructions.map((e,index) => <Text style={styles.itemInstructions} key={index}>{index+1}.- {e}</Text> )
                }

                </View>


            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{                
        alignItems:"center"
    },
     name__container:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"80%",       
        borderColor:"white", 
        borderWidth:2,       
        borderRadius:10, 
        padding:5,
        alignItems:"center",        
     },
     imageArrow:{
        width:30,
        height:30
     },
     changer:{
        width:30,
        height:30,
        transform:[{rotate: '180deg'}]        
     },
     name:{
        fontSize:18,
        color:"white",
        width:"80%"
     },     

     detailContainer:{
        height:"auto",
        borderColor:"white",
        borderWidth:2,
        width:"80%",
        flexDirection:"column",
        alignItems:"center",
        borderTopWidth:0,       
        marginTop:-7,
        paddingTop:30 ,
        gap:10,

     },
     notShow:{
        maxHeight:0,
        overflow:"hidden"
     },
     imageurl:{
        width:150,
        height:150,
        borderRadius:10
     },
     resaltador:{
        color:"#FFA826",
        
     },
     textAll:{
        fontSize:15,
        color:"white",            
     },
     instrucContainer:{        
        paddingHorizontal:10,
        paddingBottom:10,
        gap:5,
        marginTop:5
     },
     itemInstructions:{
        color:"white"
     },
     instructionTittle:{
        color:"#FFA826"
     }

})

