import React from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const image = {
  uri: "https://4kwallpapers.com/images/walls/thumbs_3t/2926.png",
};
export default function App() {
  return (
    <SafeAreaView className="p-10">
      <View className="flex-row justify-between">
        <View className="flex-row gap-2">
          <View>
            <FontAwesome name="map-marker" size={24} color="black" />
          </View>

          <View className="gap-">
            <Text>Location</Text>
            <Text className="font-bold">Los Angeles Califonia, US</Text>
          </View>
        </View>
        <View>
          <Ionicons name="notifications" size={24} color="black" />
        </View>
      </View>
      <View className="my-8">
        <ImageBackground source={image} className="h-20" borderRadius={10}>
          <Text className="p-4 text-white font-semibold text-2xl">
            Hi Emmanuel
          </Text>
          <Text>Fresh start your</Text>
          <Text>Journey</Text>
        </ImageBackground>
      </View>
      <View className="flex-row items-center gap-2 bg-black rounded-lg p-1 justify-center">
        <View>
          <AntDesign name="car" size={24} color="white" />
        </View>
        <View className="text-white">Cars</View>
        <View>
          <Ionicons name="bus-outline" size={24} color="black" />
        </View>
        <View className="text-white">Bus</View>
        <View>
          <MaterialCommunityIcons
            name="gas-station-outline"
            size={24}
            color="black"
          />
        </View>
        <View className="text-white">Gas</View>
        <View>
          <Ionicons name="boat-outline" size={24} color="black" />
        </View>
        <View className="text-white">Boat</View>
      </View>
    </SafeAreaView>
  );
}
