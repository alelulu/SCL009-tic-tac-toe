import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';

export default function App() {

  const [currentUser, setCurrentUser] = useState(1);
  const [gameGrid, setGameGrid] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);
  const [playerMichiWins, setPlayerMichiWins] = useState(0)
  const [playerShibaWins, setPlayerShibaWins] = useState(0)

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
      return <View><Image source={require('./assets/cat.png')} style={styles.icon}/></View>
    }
    else if(position == -1){
      return <View><Image source={require('./assets/dog.png')} style={styles.icon}/></View>
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

  const showPlayer = (currentUser) => {
    if(currentUser == 1){
      return <View><Image source={require('./assets/cat.png')} style={styles.player}/></View>
    }
    else if (currentUser == -1) {
      return <View><Image source={require('./assets/dog.png')} style={styles.player}/></View>
    }
    else {
      return
    }
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
      Alert.alert('Gana el Michi!');
      setPlayerMichiWins(playerMichiWins + 1)
      resetGame();
    }
    else if(winner == -1){
      Alert.alert('Gana el Shiba!');
      setPlayerShibaWins(playerShibaWins + 1) 
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
        Alert.alert('Empate!');
        resetGame();
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={require('./assets/titlevs.png')} style={styles.imgtitle}/>
      </View>
      <View style={{flexDirection: "row"}}><Text style={styles.playerTurn}>Turno de: </Text>{showPlayer(currentUser)}</View>
      {/* <View style={styles.playerTurnIcon}>{showPlayer(currentUser)}</View> */}
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
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => {resetGame()}}> 
          <Text style={styles.resetButton}>
            Reiniciar juego
          </Text>
        </TouchableOpacity >
      </View>
      <View>
        <Text style={{color: 'white', fontSize: 20, marginTop: 20}}>Historial de victorias</Text>
      </View>
      <View style={{flexDirection: "row"}}>
        <Image source={require('./assets/cat.png')} style={styles.playerWins}/><Text style={styles.wins}>  :  {playerMichiWins}  /  </Text>
        <Image source={require('./assets/dog.png')} style={styles.playerWins}/><Text style={styles.wins}>  :  {playerShibaWins}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8296',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    width: 300,
    height: 100
  },
  title: {
    fontSize: 60,
    color: '#ffffff'
  },
  imgtitle: {
    flex: 1,
    width: 300,
    height: 300,
    resizeMode: 'contain'
  },
  playerTurn: {
    fontSize: 30,
    color: '#ffffff',
    marginBottom: 20,
    paddingBottom: 20
  },
  playerTurnIcon: {
    paddingBottom: 20
  },
  tile: {
    borderWidth: 2,
    width: 100,
    height: 100,
    borderColor: '#ffffff',
  },
  icon: {
    width: 70, 
    height: 70,
    marginLeft: 12,
    marginTop: 12
  },
  player: {
    width: 30,
    height: 30,
    marginBottom: 20,
    paddingBottom: 20
  },
  resetBtn: {
    backgroundColor: 'black',
    color: 'black'
  },
  btnContainer: {
    marginTop: 20,
    color: '#000000'
  },
  btnpls: {
    backgroundColor : "yellow",
  },
  resetButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    fontSize: 20,
    color: '#ff8296',
    textAlign: 'center',
    width: 180,
    height: 40,
    paddingVertical: 7,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  wins: {
    color: 'white', 
    fontSize: 30, 
    marginTop: 3
  },
  playerWins: {
    width: 30,
    height: 30,
    marginTop: 7
  }
});
