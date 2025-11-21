import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function PostCard({ post, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.title} numberOfLines={1}>{post.title}</Text>
      <Text style={styles.body} numberOfLines={2}>{post.body}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6
  },
  body: {
    fontSize: 14,
    color: "#333"
  }
});
