import React, { Component } from 'react';
import { AppRegistry, Text, View} from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <View style = {{flex:1, marginTop: 64, left:0, marginBottom:0, marginRight:0,  backgroundColor:'red'}}>
            <View style = {{flex:1, height: 40, backgroundColor: 'blue', flexDirection: 'column'}}>
              <Text style = { {fontSize:18} }>I am red</Text>
            </View>
            <View style = {{width:100, height: 40, backgroundColor: 'yellow'}}>
              <Text style = { {fontSize:17 } }>I am yellow</Text>
            </View>
            <View style = {{width:100, height: 40, backgroundColor: 'gray'}}>
              <Text style = { {fontSize:16} }>I am gray</Text>
            </View>
      </View>

    );
  }


}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);