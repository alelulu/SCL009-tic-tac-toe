import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [currentUser, setCurrentUser] = useState(1);
  const [gameGrid, setGameGrid] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);

  const resetGame = () => {
    setGameGrid([
      [1, 2, 0],
      [0, 0, 0],
      [0, 0, 0]
    ])
  }

  useEffect(() => {
    resetGame()
  })

  const renderPosition = (row, col) => {
    let position = gameGrid[row][col];
    if(position == 1){
      return <View><Text style={styles.cross}>X</Text></View>
    }
    else if(position == 2){
      return <View><Text style={styles.zero}>0</Text></View>
    }
    else{
      return <View></View>
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Michi</Text>
      <View style={{flexDirection: "row"}}>
        <View style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]}>
          {renderPosition(0, 0)}
        </View>
        <View style={[styles.tile, { borderTopWidth: 0 }]}>
          {renderPosition(0, 1)}
        </View>
        <View style={[styles.tile, { borderRightWidth: 0, borderTopWidth: 0 }]}>
          {renderPosition(0, 2)}
        </View>
      </View>
      <View style={{flexDirection: "row"}}>
        <View style={[styles.tile, { borderLeftWidth: 0 }]}>
          {renderPosition(1, 0)}
        </View>
        <View style={styles.tile}>
          {renderPosition(1, 1)}
        </View>
        <View style={[styles.tile, { borderRightWidth: 0 }]}>
          {renderPosition(1, 2)}
        </View>
      </View>
      <View style={{flexDirection: "row"}}>
        <View style={[styles.tile, { borderLeftWidth: 0, borderBottomWidth: 0 }]}>
          {renderPosition(2, 0)}
        </View>
        <View style={[styles.tile, { borderBottomWidth: 0 }]}>
          {renderPosition(2, 1)}
        </View>
        <View style={[styles.tile, { borderRightWidth: 0, borderBottomWidth: 0 }]}>
          {renderPosition(2, 2)}
        </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff637d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
  },
  tile: {
    borderWidth: 2,
    width: 100,
    height: 100,
    borderColor: '#ffffff',
  },
  zero: {
    color: '#ffffff',
    fontSize: 60,
    textAlign: 'center',
    paddingVertical: 13
  },
  cross: {
    color: '#000000',
    fontSize: 60,
    textAlign: 'center',
    paddingVertical: 13
  }
});
