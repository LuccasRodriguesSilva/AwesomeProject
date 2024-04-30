import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return(
    <View style={uva.container}>
        <Text style={uva.title}>INDMO</Text>
      <Text style={UIEvent.paragraph}>Hello World!</Text>
    </View>
  )
}

const uva = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    },
  paragraph: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    },
  });
