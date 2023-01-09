import { useEffect, useState } from "react";
import List from "./List";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";

const Home = (props) => {
  const [joke, setJoke] = useState("");
  const [punch, setPunch] = useState("");
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");
  const [favjokeArr, setFavjokeArr] = useState([]);

  const url = "https://v2.jokeapi.dev/joke/Any?type=twopart";

  const getJoke = async (url) => {
    try {
      await fetch(url)
        .then((res) => {
          if (!res.ok) throw "Could Not Get the Joke!!!";
          res.json().then((Data) => {
            setCategory(Data.category);
            setJoke(Data.setup);
            setPunch(Data.delivery);
            setId(Data.id);
          });
        })
        .catch((err) => {
          console.log(`Inner err${err}`);
          alert("could not get the JOKE!!!Try Again");
        });
    } catch (err) {
      console.log(`Outer err${err}`);
    }
  };
  useEffect(() => {
    getJoke(url);
  }, []);

  const clickHandler = () => {
    getJoke(url);
  };
  const dataSaveHandler = () => {
    for (let index = 0; index < favjokeArr.length; index++) {
      if (favjokeArr[index].key === id) {
        console.log("Cought");
        alert("Already Added");
        return;
      }
    }
    setFavjokeArr([
      ...favjokeArr,
      { joke: joke, punch: punch, category: category, key: id }
    ]);
    console.log(favjokeArr);
  };
  //Nav to fav
  const navToFav = () => {
    console.log("OK");
    if (favjokeArr.length === 0) {
      props.navigation.navigate("Favorites", [
        {
          joke: "look in the mirror (-___-)",
          punch: "didnt add any jokes idiot_Please Add",
          category: "MEAN",
          key: 404
        }
      ]);
      return;
    }
    props.navigation.navigate("Favorites", favjokeArr);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Jokie</Text>
      <Text style={{ color: "white" }}>Welcome to Jokie App</Text>
      <TouchableOpacity style={styles.Favorite} onPress={navToFav}>
        <Text style={{ fontSize: 15, color: "white" }}>Favorite</Text>
      </TouchableOpacity>
      <List category={category} joke={joke} punch={punch} />
      <TouchableOpacity style={styles.button} onPress={clickHandler}>
        <Text>Click to get joke</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_2} onPress={dataSaveHandler}>
        <Text style={{ color: "white" }}>Save the Joke</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B69A6",
    alignItems: "center"
  },
  button: {
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    position: "absolute",
    top: "70%",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 100,
    paddingRight: 100,
    margin: 10
  },
  button_2: {
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: 0,
    position: "absolute",
    top: "77%",
    borderColor: "white",
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 100,
    paddingRight: 100,
    margin: 10
  },
  Favorite: {
    borderColor: "white",
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    position: "absolute",
    top: "13%",
    right: "5%",
    zIndex: 1
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 50,
    color: "white"
  }
});

export default Home;
