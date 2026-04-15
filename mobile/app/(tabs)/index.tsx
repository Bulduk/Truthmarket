import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function FeedScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.postCard}>
        <Text style={styles.author}>@vitalik.eth</Text>
        <Text style={styles.content}>
          The Dencun upgrade is looking solid. Layer 2 fees are going to drop significantly.
        </Text>
        
        <View style={styles.marketWidget}>
          <Text style={styles.marketTitle}>Will L2 fees drop below $0.01?</Text>
          <View style={styles.buttonsRow}>
            <View style={styles.buttonYes}><Text style={styles.buttonText}>Yes 82¢</Text></View>
            <View style={styles.buttonNo}><Text style={styles.buttonText}>No 18¢</Text></View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0e11',
    padding: 16,
  },
  postCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    color: '#ccc',
    lineHeight: 20,
    marginBottom: 16,
  },
  marketWidget: {
    backgroundColor: '#131720',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  marketTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  buttonYes: {
    flex: 1,
    backgroundColor: 'rgba(14, 203, 129, 0.1)',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonNo: {
    flex: 1,
    backgroundColor: 'rgba(246, 70, 93, 0.1)',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
