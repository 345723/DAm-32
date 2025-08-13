import { Image, ScrollView, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/images/axel1.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Hola, soy Axel Daniel Estrada Malagón</Text>
      <Text style={styles.bio}>
        Soy de Querétaro, me apasiona la tecnología y por el momento me esta llamando la atencion el desarrollo de aplicaciones móviles.
        Me gusta aprender nuevas herramientas y compartir conocimiento.
        Mis pasatiempos favoritos son: ver películas, tomar café, jugar videojuegos especiamente los rpg o de exploracion.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
    color: '#555',
  },
});

