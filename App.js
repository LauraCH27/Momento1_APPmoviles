import { useState } from 'react';
import { StyleSheet, Text, View, TextInput , Toucha, Touchable, TouchableOpacity} from 'react-native';

export default function App() {
  const [identificacion, setidentificacion] = useState('');
  const [nombres, setnombres] = useState('');
  const [asignatura, setasignatura] = useState('');
  const [nota1, setnota1] = useState('');
  const [nota2, setnota2] = useState('');
  const [nota3, setnota3] = useState('');
  const [definitiva, setdefinitiva] = useState('');
  const [observacion, setobservacion] = useState('');
  return (

    <View style={styles.container}>
      <Text style={{fontWeight:'bold', fontSize:30,backgroundColor:"orange", padding:20, borderRadius:10}}>Sistema de Notas</Text>
      <View style={{flexDirection:"row", marginLeft:30}}>
      <Text style={{marginTop:35, fontSize:20}}>Identificación</Text>
    <TextInput
      placeholder="Ingrese identificación"
      style={[styles.inputs,{marginTop:30, marginLeft:20}]}
      onChangeText={identificacion=> setidentificacion(identificacion)}
      value={identificacion}
    />
      </View>
    <View style={{flexDirection:"row", marginLeft:30}}>
    <Text style={{marginTop:35, fontSize:20}}>Nombres</Text>
    <TextInput
      placeholder="Ingrese los nombres"
      style={[styles.inputs,{marginTop:30, marginLeft:40}]}
      onChangeText={nombres=> setnombres(nombres)}
      value={nombres}
    />
    </View>
    <View style={{flexDirection:"row", marginLeft:30}}>
    <Text style={{marginTop:35, fontSize:20}}>Asignatura</Text>
    <TextInput
      placeholder="Ingrese la asignatura"
      style={[styles.inputs,{marginTop:30,marginLeft:40}]}
      onChangeText={asignatura=> setasignatura(asignatura)}
      value={asignatura}
      
    />
    </View>
    <View style={{flexDirection:"row", marginLeft:30, marginLeft:40}}>
    <Text style={{marginTop:35, fontSize:20}}>Nota1(30%)</Text>
    <TextInput
      placeholder="Ingrese la nota"
      style={[styles.inputs,{marginTop:30,marginLeft:40}]}
      onChangeText={nota1=> setnota1(nota1)}
      value={nota1}
      
    />
    </View>
    <View style={{flexDirection:"row", marginLeft:30}}>
    <Text style={{marginTop:35, fontSize:20}}>Nota2(35%)</Text>
    <TextInput
      placeholder="Ingrese la nota"
      style={[styles.inputs,{marginTop:30,marginLeft:40}]}
      onChangeText={nota2=> setnota2(nota2)}
      value={nota2}
      
    />
    </View>
    <View style={{flexDirection:"row", marginLeft:30}}>
    <Text style={{marginTop:10, fontSize:20}}>Nota3(35%)</Text>
    <TextInput
      placeholder="Ingrese la nota"
      style={[styles.inputs,{marginTop:30,marginLeft:30}]}
      onChangeText={nota3=> setnota3(nota3)}
      value={nota3}
      
    />
    </View>
    <View style={{flexDirection:"row", marginLeft:30}}>
    <Text style={{marginTop:10, fontSize:20}}>Definitiva</Text>
    <TextInput
      placeholder="Ingrese la nota definitiva"
      style={[styles.inputs,{marginTop:30,marginLeft:30}]}
      onChangeText={definitiva=> setdefinitiva(definitiva)}
      value={definitiva}
      
    />
    </View>
    <View style={{flexDirection:"row", marginLeft:30}}>
    <Text style={{marginTop:10, fontSize:20}}>Observación</Text>
    <TextInput
      placeholder="Ingrese una observación"
      style={[styles.inputs,{marginTop:30,marginLeft:30}]}
      onChangeText={observacion=> setobservacion(observacion)}
      value={observacion}
    />
    </View>
    <View style={[styles.container,{marginTop:20,flexDirection:'row'}]}>
          <TouchableOpacity style={[{backgroundColor:'green'},styles.buttons]}>
            <Text style={[styles.textButtons]}>Calcular/Guardar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[{backgroundColor:'red'},styles.buttons]}>
            <Text style={[styles.textButtons]}>Limpiar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor:'blue'},styles.buttons]}>
            <Text style={[styles.textButtons]}>Buscar</Text>
          </TouchableOpacity>
        </View>
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs:{
    color:"black",
    padding:10,
    borderWidth:2, 
    textAlign:"center",
   },
   buttons:{
    borderRadius:10,
    padding:10, 
    width:120, 
    justifyContent:'center',
    alignItems:'center ',
    marginLeft:5
  },
});
