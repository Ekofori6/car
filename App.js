import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView className="p-8">
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
    </SafeAreaView>
  );
}
