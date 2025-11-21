import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from "react-native";
import { fetchPost, fetchUser } from "../../api";

export default function DetailsScreen({ route }) {
  const { postId } = route.params;
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function load() {
    try {
      setError(null);
      setLoading(true);
      const p = await fetchPost(postId);
      setPost(p);
      const u = await fetchUser(p.userId);
      setUser(u);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, [postId]);

  if (loading) return (
    <View style={styles.center}><ActivityIndicator size="large" /></View>
  );

  if (error) return (
    <View style={styles.center}><Text>Erro: {error}</Text></View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>

      {user && (
        <View style={styles.userBox}>
          <Text style={styles.userTitle}>Autor</Text>
          <Text style={styles.userName}>{user.name} ({user.username})</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
          <Text style={styles.userCompany}>{user.company?.name}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 12 },
  body: { fontSize: 16, lineHeight: 22, marginBottom: 20 },
  userBox: { marginTop: 20, padding: 12, borderRadius: 8, backgroundColor: "#fff", elevation: 1, shadowOpacity: 0.05 },
  userTitle: { fontWeight: "700", marginBottom: 6 },
  userName: { fontSize: 15 },
  userEmail: { color: "#555", marginTop: 6 },
  userCompany: { marginTop: 6, fontStyle: "italic" }
});
