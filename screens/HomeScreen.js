import React from 'react';
import { View, Button, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {

    const searchImageUri = require('./assets/Search.png');
    const handleCartPress = () => {
        // Navigate to the cart page
        navigation.navigate('CartScreen');
      };

    return (
        <View style={styles.Homecontainer}>
           
            {/* Colored Rectangle */}
            <View style={styles.coloredRectangle}>
                {/* Rounded Box */}
                <View style={styles.roundedBox}>
                    {/* Search Button */}
                    <View style={styles.searchButtonContainer}>
                        <Image source={searchImageUri} style={styles.searchButtonIcon} />
                    </View>
                    {/* Search Text */}
                    <Text style={styles.searchText}>
                        Search Products or store
                    </Text>
                </View>
            </View>
            {/* Greetings */}     
            <View style={styles.greetingTextContainer}>
                <Text style={styles.greetingText}>
                    Hey, Rahul
                </Text>
            </View>
            {/* Delivery Details Text */}
            <View style={styles.deliveryContainer}>
                <Text style={styles.deliveryText}>
                    DELIVERY TO
                </Text>
                <Text style={styles.deliveryTextWithin}>
                    WITHIN
                </Text>
            </View>
            {/* Delivery Cart Button */}
            <View>
                <TouchableOpacity onPress={handleCartPress} style={styles.cartButton}>
                <Image
                source={require('./assets/bag.png')} // Adjust the path based on your project structure
                style={styles.cartIcon}
                />
                </TouchableOpacity>
            </View>
      
        </View>
    );
};

const styles = StyleSheet.create({
  Homecontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: '#000',
  },
  coloredRectangle: {
    position: 'absolute',
    top: 0, // Adjust this value based on your design and device
    left: 0,
    right: 0,
    width: 450,
    height: 252,
    backgroundColor: '#2b4d9f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingTextContainer: {
    width: 110,
    height: 30,
  },
  greetingText: {
    fontSize: 22,
    fontFamily: 'Manrope-Bold', // Assuming Manrope-Bold is the font family for fontWeight: 600
    fontWeight: '600',
    color: '#F8F9FB',
    top: -25,
    bottom: 52,
    right:135,
  },
  roundedBox: {
    width: 335,
    height: 56,
    backgroundColor: '#143075', // Adjust color based on your design
    borderRadius: 28,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 117,
    right: 21,
    bottom: 79,
    left: 30,
  },
  searchText: {
    fontFamily: 'Manrope',
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0.53, 0.57, 0.65, 1)',
  },
  searchButtonContainer: {
    padding: 8,
  },
  searchButtonIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    left: 15,
  },
  searchText: {
    fontSize: 14,
    fontFamily: 'Manrope-Medium', // Assuming Manrope-Medium is the font family for fontWeight: 500
    fontWeight: '500',
    color: '#8891A5',
    right: 114,
  },
  cartButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#2b4d9f', // Background color of the cart button
    left: 344,
    right: 8,
    bottom: 350,
  },
  cartIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  deliveryContainer: {
    width: 42,
    height: 15,
  },
  deliveryText: {
    color: '#F8F9FB',
    fontfamily: 'Manrope',
    fontsize: 11,
    fontweight: 800,
    letterspacing: 0.22,
    opacity: 0.5,
    top: -160
  },
  deliveryTextWithin: {
    color: '#F8F9FB',
    fontfamily: 'Manrope',
    fontsize: 11,
    fontweight: 800,
    letterspacing: 0.22,
    opacity: 0.5,
  },
});

export default HomeScreen;
