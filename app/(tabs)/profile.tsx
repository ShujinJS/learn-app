import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { profileStyle } from "@/styles/profileStyle";
import { FlatList, TextInput, Pressable, View, Image } from "react-native";
import Ionicons from "@/styles/icons";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Stack } from "expo-router";

const currentUser = { user: 100, userName: "Uğur", icon: "flash" };

export default function Page() {
  const [image, setImage] = useState<string | null>(null);
  const colorScheme = (useColorScheme() as "dark") || "light";

  const {
    containerStyle,
    topSideStyle,
    iconContainer,
    addPhotoBtnStyle,
    ppStyle,
    userNameStyle,
  } = profileStyle;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ThemedView style={containerStyle}>
      <ThemedView
        style={{
          ...topSideStyle,
          borderBottomColor: Colors[colorScheme].secondary,
          backgroundColor: Colors[colorScheme].secondary,
        }}
      >
        <View
          style={{
            ...iconContainer,
            borderColor: Colors[colorScheme].secondary,
          }}
        >
          <Pressable onPress={pickImage} style={addPhotoBtnStyle}>
            <View style={{ position: "absolute", left: 70, top: 70 }}>
              <Ionicons size={24} name="camera" color={"cyan"} />
            </View>
          </Pressable>

          {image ? (
            <Image source={{ uri: image }} style={ppStyle} />
          ) : (
            <Ionicons size={80} name="person" color={"white"} />
          )}

          <ThemedText style={userNameStyle}>{currentUser?.userName}</ThemedText>
        </View>
      </ThemedView>
    </ThemedView>
  );
}
