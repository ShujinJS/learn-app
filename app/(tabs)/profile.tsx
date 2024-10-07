import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { chatBubblesStyle } from "@/styles/profileStyle";
import { FlatList, TextInput, Pressable, View } from "react-native";
import Ionicons from "@/styles/icons";
import { useEffect, useState } from "react";

const currentUser = { user: 100, userName: "Uğur", icon: "flash" };

export default function Page() {
  const [bubbles, setBubbles] = useState([
    {
      id: "1",
      user: 100,
      userName: "Uğur",
      icon: "flash",
      text: "Selam",
      time: "20:45",
    },
    {
      id: "11",
      user: 101,
      userName: "Aygün",
      icon: "pizza",
      text: "Selam gençler",
      time: "20:47",
    },
    {
      id: "111",
      user: 102,
      userName: "Zeynep",
      icon: "fish",
      text: "selaaam",
      time: "20:55",
    },
    {
      id: "1111",
      user: 103,
      userName: "Umut",
      icon: "planet",
      text: "selam",
      time: "08:52",
    },
  ]);
  const [chatInput, onChangeInput] = useState("");
  const {
    containerStyle,
    flatlistContainerStyle,
    bubblesContainerStyle,
    bubbleContainerStyle,
    bubblesStyle,
    bubbleStyle,
    iconStyle,
    chatUserNameStyle,
    chatTimeStyle,
    textInputStyle,
    textSubmitBtnStyle,
    submitBtnContainer,
    chatBubble,
  } = chatBubblesStyle;

  const submitChat = () => {
    const message = {
      ...currentUser,
      text: chatInput,
      id: "1234",
      time: "19:03",
    };
    setBubbles([...bubbles, message]);
    onChangeInput("");
  };

  useEffect(() => {}, [bubbles]);

  return (
    <ThemedView style={containerStyle}>
      <ThemedView style={flatlistContainerStyle}>
        <FlatList
          style={bubblesContainerStyle}
          data={bubbles}
          renderItem={({ item }) => {
            const { id, user, userName, text, time } = item;

            return (
              <View style={bubbleContainerStyle}>
                <View
                  style={{
                    ...bubblesStyle,
                  }}
                >
                  <Ionicons size={24} name={"person"} style={[iconStyle]} />
                  <View id={id} style={bubbleStyle}>
                    <ThemedText user-data={user} style={chatUserNameStyle}>
                      {userName}
                    </ThemedText>
                    <View style={chatBubble}>
                      <ThemedText user-data={user}>{text}</ThemedText>
                      <ThemedText style={chatTimeStyle}>{time}</ThemedText>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
        <View style={submitBtnContainer}>
          <TextInput
            value={chatInput}
            onChangeText={onChangeInput}
            style={textInputStyle}
            placeholder="Yemek yiyelim"
          />
          <Pressable style={textSubmitBtnStyle} onPress={() => submitChat()}>
            <Ionicons size={24} name={"pizza"} style={textSubmitBtnStyle} />
          </Pressable>
        </View>
      </ThemedView>
    </ThemedView>
  );
}
