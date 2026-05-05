import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";
import pilots from "./pilots";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pilot = pilots[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? pilots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === pilots.length - 1 ? 0 : prev + 1));
  };

  const renderStars = (count) => {
    return "⭐".repeat(count);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0D0D" />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🏎️ SUPER TRUNFO</Text>
          <Text style={styles.headerSubtitle}>FÓRMULA 1</Text>
        </View>

        {/* Card */}
        <View style={styles.card}>
          {/* Card Header */}
          <View style={styles.cardHeader}>
            <Text style={styles.cardLabel}>PILOTO</Text>
            <View style={styles.cardNumber}>
              <Text style={styles.cardNumberText}>
                {currentIndex + 1}/{pilots.length}
              </Text>
            </View>
          </View>

          {/* Pilot Image */}
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: pilot.image }}
              style={styles.pilotImage}
              resizeMode="cover"
            />
            <View style={styles.imageOverlay} />
          </View>

          {/* Pilot Name */}
          <View style={styles.nameSection}>
            <Text style={styles.pilotName}>{pilot.name}</Text>
            <Text style={styles.pilotCountry}>{pilot.country}</Text>
          </View>

          {/* Stars */}
          <View style={styles.starsContainer}>
            <Text style={styles.starsLabel}>PODER</Text>
            <Text style={styles.stars}>{renderStars(pilot.stars)}</Text>
          </View>

          {/* Info Rows */}
          <View style={styles.infoSection}>
            <View style={styles.infoRow}>
              <View style={styles.infoIconBox}>
                <Text style={styles.infoIcon}>🏁</Text>
              </View>
              <View style={styles.infoTextBox}>
                <Text style={styles.infoLabel}>EQUIPE</Text>
                <Text style={styles.infoValue}>{pilot.team}</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <View style={styles.infoIconBox}>
                <Text style={styles.infoIcon}>🌍</Text>
              </View>
              <View style={styles.infoTextBox}>
                <Text style={styles.infoLabel}>PAÍS</Text>
                <Text style={styles.infoValue}>{pilot.country}</Text>
              </View>
            </View>
          </View>

          {/* Description */}
          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionText}>{pilot.description}</Text>
          </View>
        </View>

        {/* Navigation Buttons */}
        <View style={styles.navigation}>
          <TouchableOpacity style={styles.navButton} onPress={handlePrev}>
            <Text style={styles.navButtonText}>← ANTERIOR</Text>
          </TouchableOpacity>

          <View style={styles.dotsContainer}>
            {pilots.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === currentIndex ? styles.dotActive : styles.dotInactive,
                ]}
              />
            ))}
          </View>

          <TouchableOpacity style={styles.navButton} onPress={handleNext}>
            <Text style={styles.navButtonText}>PRÓXIMO →</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>UNISATC • Soluções Mobile</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
  container: {
    alignItems: "center",
    paddingBottom: 32,
    paddingHorizontal: 20,
  },

  // Header
  header: {
    alignItems: "center",
    marginTop: 24,
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#E8272B",
    letterSpacing: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: 8,
    marginTop: 2,
    opacity: 0.6,
  },

  // Card
  card: {
    width: "100%",
    backgroundColor: "#1A1A1A",
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#333333",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E8272B",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  cardLabel: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 13,
    letterSpacing: 3,
  },
  cardNumber: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  cardNumberText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },

  // Image
  imageContainer: {
    width: "100%",
    height: 260,
    position: "relative",
  },
  pilotImage: {
    width: "100%",
    height: "100%",
  },
  imageOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "transparent",
  },

  // Name
  nameSection: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  pilotName: {
    fontSize: 26,
    fontWeight: "900",
    color: "#FFFFFF",
    letterSpacing: 0.5,
  },
  pilotCountry: {
    fontSize: 14,
    color: "#AAAAAA",
    marginTop: 2,
    fontWeight: "500",
  },

  // Stars
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 16,
    gap: 10,
  },
  starsLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#E8272B",
    letterSpacing: 2,
  },
  stars: {
    fontSize: 18,
  },

  // Info Section
  infoSection: {
    marginHorizontal: 16,
    backgroundColor: "#242424",
    borderRadius: 12,
    paddingVertical: 4,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  infoIconBox: {
    width: 36,
    height: 36,
    backgroundColor: "#333333",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  infoIcon: {
    fontSize: 16,
  },
  infoTextBox: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#888888",
    letterSpacing: 2,
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 15,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  divider: {
    height: 1,
    backgroundColor: "#333333",
    marginHorizontal: 14,
  },

  // Description
  descriptionBox: {
    marginHorizontal: 16,
    marginBottom: 20,
    backgroundColor: "#111111",
    borderRadius: 12,
    padding: 14,
    borderLeftWidth: 3,
    borderLeftColor: "#E8272B",
  },
  descriptionText: {
    fontSize: 13,
    color: "#CCCCCC",
    lineHeight: 20,
    fontStyle: "italic",
  },

  // Navigation
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 24,
    marginBottom: 16,
  },
  navButton: {
    backgroundColor: "#E8272B",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
  },
  navButtonText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 12,
    letterSpacing: 1,
  },
  dotsContainer: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotActive: {
    backgroundColor: "#E8272B",
    width: 20,
  },
  dotInactive: {
    backgroundColor: "#444444",
  },

  // Footer
  footer: {
    fontSize: 11,
    color: "#555555",
    letterSpacing: 2,
    fontWeight: "600",
  },
});
