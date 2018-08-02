import React from "react";
import PropTypes from "prop-types";
import {View , Text, Image, StyleSheet,TouchableHighlight,Linking} from "react-native";


 

 
  //Titulo,
  // urlImagen,
  // Descripcion 
const Card = ({title, image, description,url}) => {

    const imageSource={
        uri: image
    };
    const onPressButton=()=>{
        Linking.openURL(url);
    };
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Image style={styles.mainImage} source={imageSource}/>
                <Text style={styles.description}>{description} </Text>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="#ff6659"
                    onPress={onPressButton}>
                    <Text style={styles.buttonText}>Ver más</Text>
                </TouchableHighlight>
            </View>  
        )
 
    };

const styles = StyleSheet.create({
    container: {
        flex:0,
        backgroundColor: '#fff' ,
        padding:10,
        borderRadius: 3, 

    },
    title: {
        padding: 5,
        backgroundColor: '#9a0007',
        textAlign: 'center',
        fontSize: 30
    },
    mainImage: {
        height: 190,

    },
    button:{
        height:38,
        marginTop :10,
        backgroundColor: '#d32f2f',
        width: 140,
        
        alignSelf: 'flex-end',
        borderRadius: 4,

    },
    buttonText:{
        fontSize: 20,
        lineHeight:38,
        color: '#fff',
        textAlign: 'center'
    },
    description:{
        marginLeft:10,
        marginRight:10,
        marginBottom:20,
        marginTop: 20,
        fontSize: 13,
        color:"#000"
    }

});

Card.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    
};

export default Card;