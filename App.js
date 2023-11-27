import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [calculo, setCalculo] = useState("")
  const operadores = '+-*/' 
  const numeros = ['1', 2, 3,4,5,6,7,8,9,',',0,'=']
  const operadoresArr = ['+', '-', '*', '/', 'c'] 

  function handleCalculate() {
    let formattedCalc = calculo

    if(operadores.includes(calculo[calculo.length - 1])) {
      formattedCalc = formattedCalc.substring(0, calculo.length - 1)
    }
    
    if(operadores.includes(calculo[0])) {
      formattedCalc = formattedCalc.substring(1)
    }

    formattedCalc = eval(formattedCalc)
    setCalculo(formattedCalc)
  }

  function handleSetCalc(value) {
    if(operadores.includes(value) && operadores.includes(calculo[calculo.length - 1])) {
      const formattedCalc = calculo.substring(0, calculo.length - 1)

      setCalculo(formattedCalc + value)
      return;
    }

    setCalculo(calculo + value)
  }

  return (
    <View style={styles.container}>
      <TextInput 
        inputMode='text'
        readOnly
        value={calculo}
        
        />
      
      <View style={styles.buttonsContainer}>
        <View style={styles.numbersButtonContainer}>
          {numeros.map(numero => {
            return (
              <TouchableOpacity 
                style={styles.button} 
                onPress={() => {
                  numero === "=" ? handleCalculate() : handleSetCalc(numero)
                }}
                >
                <Text style={styles.buttonText}>{numero}</Text>
              </TouchableOpacity>
            )
          })}
        </View>

        <View>
          {operadoresArr.map(op => {
            
            return (
              <TouchableOpacity style={styles.button} onPress={() => handleSetCalc("+")}>
                <Text style={styles.buttonText}>{op}</Text>
              </TouchableOpacity>
            )
          })}
          
      </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '10px',
    alignItems: 'center',
  },
  input: {
    padding: '10px',
    outline: 'none',
    width: '100%'
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  numbersButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '120px'
  },
  button: {
    width: '40px',
    borderWidth: '1px',
    borderColor: 'black',
    padding: '5px',
  },
  buttonText: {
    textAlign: 'center'
  }
});



