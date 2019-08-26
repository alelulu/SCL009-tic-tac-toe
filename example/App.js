import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function App() {

  const [currentUser, setCurrentUser] = useState(1);
  const [gameGrid, setGameGrid] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);

  const resetGame = () => {
    setGameGrid([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ])
    setCurrentUser(1)
  }

  const renderPosition = (row, col) => {
    let position = gameGrid[row][col];
    if(position == 1){
      return <View><Text style={styles.cross}>X</Text></View>
    }
    else if(position == -1){
      return <View><Text style={styles.zero}>0</Text></View>
    }
    else{
      return <View></View>
    }
  }

  const checkWinner = () => {
    //checking rows
    if((gameGrid[0][0] == gameGrid[0][1] && gameGrid[0][0] == gameGrid[0][2]) && gameGrid[0][0] != 0){
      if(gameGrid[0][0] == 1){
        return 1
      }
      else {
        return -1
      }
    }
    if((gameGrid[1][0] == gameGrid[1][1] && gameGrid[1][0] == gameGrid[1][2]) && gameGrid[1][0] != 0){
      if(gameGrid[1][0] == 1){
        return 1
      }
      else {
        return -1
      }
    }
    if((gameGrid[2][0] == gameGrid[2][1] && gameGrid[2][0] == gameGrid[2][2]) && gameGrid[2][0] != 0){
      if(gameGrid[2][0] == 1){
        return 1
      }
      else {
        return -1
      }
    }
    //checking cols
    if((gameGrid[0][0] == gameGrid[1][0] && gameGrid[0][0] == gameGrid[2][0]) && gameGrid[0][0] != 0){
      if(gameGrid[0][0] == 1){
        return 1
      }
      else {
        return -1
      }
    }
    if((gameGrid[0][1] == gameGrid[1][1] && gameGrid[0][1] == gameGrid[2][1]) && gameGrid[0][1] != 0){
      if(gameGrid[0][1] == 1){
        return 1
      }
      else {
        return -1
      }
    }
    if((gameGrid[0][2] == gameGrid[1][2] && gameGrid[0][2] == gameGrid[2][2]) && gameGrid[0][2] != 0){
      if(gameGrid[0][2] == 1){
        return 1
      }
      else {
        return -1
      }
    }
    //checking diagolans
    if((gameGrid[0][0] == gameGrid[1][1] && gameGrid[0][0] == gameGrid[2][2]) && gameGrid[0][0] != 0){
      if(gameGrid[0][0] == 1){
        return 1
      }
      else {
        return -1
      }
    }
    if((gameGrid[0][2] == gameGrid[1][1] && gameGrid[0][2] == gameGrid[2][0]) && gameGrid[0][2] != 0){
      if(gameGrid[0][2] == 1){
        return 1
      }
      else {
        return -1
      }
    }
    return 0
  }

  const playerPress = (row, col) => {
    if(gameGrid[row][col] != 0){
      return;
    }
    let newGrid = gameGrid.slice();
    newGrid[row][col] = currentUser;
    setGameGrid(newGrid);
    setCurrentUser(currentUser * -1);
    let winner = checkWinner();
    if(winner == 1){
      Alert.alert('Gana el x');
      resetGame();
    }
    else if(winner == -1){
      Alert.alert('Gana el 0');
      resetGame();
    }
    else if(winner == 0){
      let isFull = true;
      for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
          if(gameGrid[i][j] == 0){
            isFull = false;
          }
        }
      }
      //if there is a draw
      if (isFull){
        Alert.alert('Nadie pierde');
        resetGame();
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Michi</Text>
      <View style={{flexDirection: "row"}}>
        <TouchableOpacity onPress={() => {playerPress(0,0)}} style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]}>
          {renderPosition(0, 0)}

        </TouchableOpacity>
        <TouchableOpacity onPress={() => {playerPress(0,1)}} style={[styles.tile, { borderTopWidth: 0 }]}>
          {renderPosition(0, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {playerPress(0,2)}} style={[styles.tile, { borderRightWidth: 0, borderTopWidth: 0 }]}>
          {renderPosition(0, 2)}
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: "row"}}>
        <TouchableOpacity onPress={() => {playerPress(1,0)}} style={[styles.tile, { borderLeftWidth: 0 }]}>
          {renderPosition(1, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {playerPress(1,1)}} style={styles.tile}>
          {renderPosition(1, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {playerPress(1,2)}} style={[styles.tile, { borderRightWidth: 0 }]}>
          {renderPosition(1, 2)}
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: "row"}}>
        <TouchableOpacity onPress={() => {playerPress(2,0)}} style={[styles.tile, { borderLeftWidth: 0, borderBottomWidth: 0 }]}>
          {renderPosition(2, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {playerPress(2,1)}} style={[styles.tile, { borderBottomWidth: 0 }]}>
          {renderPosition(2, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {playerPress(2,2)}} style={[styles.tile, { borderRightWidth: 0, borderBottomWidth: 0 }]}>
          {renderPosition(2, 2)}
        </TouchableOpacity>
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
