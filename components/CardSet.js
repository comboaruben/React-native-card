import React from 'react';
import {View, Text , ScrollView,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card'  ;

const CardSet = ({items}) =>(
    <ScrollView>
        <View style={styles.container}>
        {
            items.map(item =>
                <View  key={item.id} style={styles.cardStyle}>
                    <Card
                    //spread operator, gracias a EM6 
                     {...item} 
                        // title={item.title}
                        // image={item.image}
                        // description={item.description}
                        ></Card>
                </View>) 

        }
        </View>
           
    </ScrollView>
);  
const styles=StyleSheet.create(
    {
        container:{
            padding: 20,
            backgroundColor: '#E1E2E1',
        },
        cardStyle :{
            marginBottom: 20
        },      
    }

)


CardSet.propTypes={
    items: PropTypes.arrayOf(PropTypes.shape(
        {
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,

        })).isRequired

};
export default CardSet;