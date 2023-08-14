
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text ,View,TextInput,Image,TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { Octicons } from '@expo/vector-icons'

const Separator = () => <View style={styles.separator} />


export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: 'https://cdn.discordapp.com/attachments/1136873974685507634/1140166516361412682/design_sem_nome__2_-removebg-preview_1.png' }} style={styles.logo} />
      </View>   
      <Separator/>
      <Separator/>
      <View style={styles.inputContainer}>
        <Text style={styles.baseText}>E-mail</Text>
        <Entypo name="email" size={19} color="#868686" style={styles.icon} />
        <TextInput style={styles.input} />
      </View>
      <Separator />
      <Separator />
      <Separator />
      <View style={styles.inputContainer}>
        <Text style={styles.baseText}>Senha</Text>
        <Octicons name="key" size={19} color="#868686" style={styles.icon}/>
        <TextInput style={styles.input} />
      </View>
      <Separator />
      <Separator />
      <View>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.textButton}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
      <Separator />
      <Separator />
      <View>
        <Text style={styles.textForgottenPassword}>
          Esqueceu sua senha ?
          <TouchableOpacity>
            <Text style={styles.buttonForgottenPassword}>Click aqui</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <Separator />
      <Separator />
      <Separator />
      <View>
        <Text style={styles.textRegister}>
          Não possui conta ?
          <TouchableOpacity>
            <Text style={styles.buttonRegister}>Click aqui</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <Separator />
      <Separator />
      <Separator />
      <View>
        <Text>_____________ou use suas redes socias_____________</Text>
      </View>
      <Separator/>
      <Separator/>
      <Separator/>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton} >
          <Image source={{ uri: 'https://img.freepik.com/icones-gratis/procurar_318-265146.jpg' }} style={styles.socialLogo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} >
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png' }} style={styles.socialLogo} />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  ///textinput de login e senha 
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  inputContainer: {
  },
  input: {
    height: 40, 
    paddingLeft: 27, 
    borderRadius: 6,
    fontSize: 18,
    borderColor: '#0000007e',
    borderWidth: 1,
  },
  baseText: {
    fontWeight: 'bold',
    color:'#5C5252',
    fontSize: 19,
    marginRight: 300,
  },
  separator: {
    marginVertical: 8,
  },
  ///botao de entrada
  button:{
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 355,
    height: 40,
    backgroundColor: '#6ED35F',
    borderRadius: 6,
  },
  textButton:{
    color:'#f5f5f5',
    fontWeight:'bold',
    fontSize: 19,
  },
  ///esqueci minha senha 
  textForgottenPassword:{
    fontWeight: 'bold',
    color:'#3B3B3B',
    fontSize: 15, 
  },
  buttonForgottenPassword:{
    top:4.2,
    color:'#6ED35F',
    fontWeight: 'bold',
    fontSize: 15., 
  },
  ///Cadastro
  textRegister:{
    fontWeight: 'bold',
    color:'#3B3B3B',
    fontSize: 20, 
    textDecorationLine: 'underline',
  },
  buttonRegister:{
    top:2.5,
    color:'#6ED35F',
    fontWeight: 'bold',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  // Estilos para os botões de mídia social
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150, 
  },
  socialButton: {
    backgroundColor: '#ffffff',
    borderRadius:50, 
    width: 60, 
    height: 60, 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra (horizontal, vertical)
    shadowOpacity: 0.5, // Opacidade da sombra
    shadowRadius: 5, // Raio da sombra
    elevation: 5,
  },
  socialLogo: {
    width: 40,
    height: 40, 
  },
  ///Logo do site
  logo: {
    width: 300,
    height: 120,
  },
  ///ICON
  icon:{
    position:'absolute',
    top:34,
    left:5
  }
}) 