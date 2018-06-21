import { Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Alert
  } from 'react-native';
  import React from 'react';
   
  export default class CustomNavBar extends React.Component {
    render() {
      return (
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => alert('Hamburger')}
              style={styles.button}
            >
                <Image
                    style={styles.iconNavBar}
                    resizeMode="contain"
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' }}
                />
            </TouchableOpacity>
   
          <View style={styles.navBarItem}>
            <Text>{ this.props.title }</Text>
          </View>
   
          <View style={styles.navBarItems}>
            <TouchableOpacity
              onPress={() => alert('Compartir')}
              style={styles.button}
            >
                <Image
                    style={styles.iconNavBar}
                    resizeMode="contain"
                    source={{ uri: 'https://image.flaticon.com/icons/png/512/61/61020.png' }}
                />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert('Buscar')}
              style={styles.button}
            >
                <Image
                    style={styles.iconNavBar}
                    resizeMode="contain"
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Ic_search_48px.svg/2000px-Ic_search_48px.svg.png' }}
                />
            </TouchableOpacity>
          </View>
          </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      height: 54,
      flexDirection: 'row',
      paddingTop: 4,
    },
    iconNavBar: {
      width: 30,
      height: 30
    },
    navBarItem: {
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 10
    },
    navBarItems: {
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    button: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      borderRadius: 2,
      paddingTop: 6,
      marginRight: 10,
      paddingLeft: 10
    },
  });
