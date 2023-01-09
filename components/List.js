import { StyleSheet, View, Text } from "react-native";

const List = (props) => {
  return (
    <View style={styles.subContainer}>
      <Text style={styles.CHeading}>Joke Category</Text>
      <Text style={styles.Ctext}>{props.category}</Text>
      <Text style={styles.lineShadow} numberOfLines={1}>
        _________________________________________________
      </Text>
      <Text style={styles.JHeading}>Joke:</Text>
      <Text style={styles.Jtext}>{props.joke}</Text>
      <Text style={styles.lineShadow} numberOfLines={1}>
        _________________________________________________
      </Text>
      <Text style={styles.JHeading}>PunchLine:</Text>
      <Text style={styles.Jtext}>{props.punch}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    width: "90%",
    height: "50%",
    marginTop: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24
  },
  CHeading: {
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 10
  },
  Ctext: {
    fontSize: 17,
    paddingTop: 5
  },
  JHeading: {
    fontWeight: "bold",
    paddingLeft: 10,
    fontSize: 22,
    marginTop: 10,
    width: "100%"
  },
  Jtext: {
    paddingLeft: 10,
    paddingRight: 5,
    width: "100%",
    fontSize: 17
  },
  lineShadow: {
    textShadowColor: "rgba(0, 0, 0)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5
  }
});

export default List;
