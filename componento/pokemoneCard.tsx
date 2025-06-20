import { View, Text, StyleSheet, Platform, Image } from 'react-native';

const getTypeDetails = (type: string) => {
  switch (type.toLowerCase()) {
    case 'electric':
      return { borderColor: '#FFd700', emoji: '⚡' };
    case 'water':
      return { borderColor: '#6493EA', emoji: '💧' };
    case 'fire':
      return { borderColor: '#FF5733', emoji: '🔥' };
    case 'grass':
      return { borderColor: '#7CFC00', emoji: '🍃' };
    case 'psychic':
      return { borderColor: '#FF69B4', emoji: '⁉' };
    default:
      return { borderColor: '#CCC', emoji: '❓' };
  }
};

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤{hp}</Text>
      </View>
      <Image
        source={image}
        style={styles.image}
        accessibilityLabel={`${name} pokemon`}
      />
      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor: borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves : {moves.join(', ')}</Text>
      </View>

      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>
          Weaknesses : {weaknesses.join(', ')}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    flex: 1,
    ...Platform.select({
      android: {
        elevation: 8,
      },
    }),
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  typeContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  movesContainer: {
    marginBottom: 16,
  },
  movesText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  weaknessContainer: {
    marginBottom: 8,
  },
  weaknessText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
