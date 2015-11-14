import React, { Component } from 'react-native';

const {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} = React;


export default class Dashboard extends Component {
   makeBakground(btn){
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }

    switch(btn){
      case 0:
        obj.backgroundColor = '#48BBEC'
        break;
      case 1:
        obj.backgroundColor = '#E77AAE'
        break
      default:
        obj.backgroundColor = '#758BF4'
        break;
    }

    return obj;
  }
  goToProfile() {
    console.log('go to profile');
  }

  goToRepos () {
    console.log('go to repos');
  }

  goToNotes () {
    console.log('go to notes')
  }
  render(){
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
        <TouchableHighlight
          style={this.makeBakground(0)}
          onPress={() => this.goToProfile()}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBakground(1)}
          onPress={() => this.goToRepos()}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}> View Repos </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBakground(2)}
          onPress={() => this.goToNotes()}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}> View Notes </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
})
