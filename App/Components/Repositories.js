import React, { Component, PropTypes } from 'react-native';
import { Badge } from './Badge';
import { Separator } from './Helpers/Separator';

const {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableHighlight
} = React;

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom:5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

export class Repositories extends Component {
  handlePress() {
    console.log('yeah')
  }
  render () {
    var repos = this.props.repos;
    var list = repos.map((item, index) => {
      var desc = repos[index].description ? <Text style={styles.description}> {repos[index].description}</Text> : <View />;
      return (
        <View key={index}>
          <View style={styles.container}>
            <TouchableHighlight
              onPress={() => this.handlePress()}
              underlayColor='transparent'>
              <Text style={styles.name}>{repos[index].name}</Text>
            </TouchableHighlight>
            <Text style={styles.stars}> Stars: {repos[index].stargazers_count} </Text>
            {desc}
            <Separator />
          </View>
        </View>
      )

    })
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        {list}
      </ScrollView>
    )
  }
};

Repositories.propTypes = {
  userInfo: React.PropTypes.object.isRequired,
  repos: React.PropTypes.array.isRequired
};
