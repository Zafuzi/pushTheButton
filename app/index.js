import {useState} from "react";
import { StyleSheet, Text, View, Pressable, TouchableOpacity} from "react-native";

export default function Page() {
  const [isTimeToPress, setIsTimeToPress] = useState(true);
  const [timeToPress, setTimeToPress] = useState(0);

  const handleClick = function()
  {
    if(!isTimeToPress)
    {
      alert("Wait for the timer to end dummy!");
      clearInterval(interval);
      clearTimeout(timeout);
      return;
    }

    alert("Good job!");
    const lastPress = Date.now();

    setIsTimeToPress(false);

    const interval = setInterval(() => {
      setTimeToPress(5 - Math.floor((Date.now() - lastPress) / 1000));
    });

    const timeout = setTimeout(() => {
      setIsTimeToPress(true);
      clearInterval(interval);
    }, 5000);
  }


  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>
          {isTimeToPress ? "Push" : "Don't push"} the button
        </Text>
        <TouchableOpacity>
          <Pressable style={styles.button} onPress={handleClick}>
            <Text style={styles.subtitle}>
              {isTimeToPress ? "Press me" : `Wait for ${timeToPress} seconds`}
            </Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#38434D",
    padding: 24,
    borderRadius: 8,
  },
  subtitle: {
    fontSize: 36,
    color: "#f6f6f6",
    textAlign: "center",
  },
});
