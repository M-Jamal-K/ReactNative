import { StyleSheet, View, Text, FlatList, SafeAreaView } from "react-native";
import { useState } from "react";

const Fav = ({ navigation, route }) => {
  console.log(route.params);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={route.params}
          renderItem={({ item }) => (
            <>
              <View style={styles.subContainer}>
                <Text style={styles.CHeading}>Joke Category</Text>
                <Text style={styles.Ctext}>{item.category}</Text>
                <Text style={styles.lineShadow} numberOfLines={1}>
                  _________________________________________________
                </Text>
                <Text style={styles.JHeading}>Joke:</Text>
                <Text style={styles.Jtext}>{item.joke}</Text>
                <Text style={styles.lineShadow} numberOfLines={1}>
                  _________________________________________________
                </Text>
                <Text style={styles.JHeading}>PunchLine:</Text>
                <Text style={styles.Jtext}>{item.punch}</Text>
              </View>
            </>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B69A6"
  },
  subContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    width: "90%",
    marginLeft: 17,
    marginTop: 10,
    paddingBottom: 20,
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
    fontSize: 20,
    marginTop: 2
  },
  Ctext: {
    fontSize: 15,
    paddingTop: 5
  },
  JHeading: {
    fontWeight: "bold",
    paddingLeft: 10,
    fontSize: 20,
    marginTop: 10,
    width: "100%"
  },
  Jtext: {
    paddingLeft: 10,
    paddingRight: 5,
    width: "100%",
    fontSize: 15
  },
  lineShadow: {
    textShadowColor: "rgba(0, 0, 0)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5
  }
});

export default Fav;
