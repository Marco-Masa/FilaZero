import { StyleSheet, View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SobreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.titulo}>Sobre o FilaZero</Text>

        <Text style={styles.subtitulo}>O tempo a seu favor</Text>

        <Text style={styles.texto}>
          O FilaZero é uma plataforma digital que conecta consumidores a
          empresas e profissionais autônomos de diferentes segmentos.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Para consumidores</Text>
          <Text style={styles.texto}>
            Encontre prestadores de serviços, consulte horários disponíveis e
            realize agendamentos gratuitamente.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Para prestadores</Text>
          <Text style={styles.texto}>
            Divulgue serviços, configure sua agenda e organize os atendimentos
            de seus clientes.
          </Text>
        </View>

        <Text style={styles.rodape}>
          Projeto acadêmico - ETEC de Praia Grande
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F9FF",
  },
  content: {
    padding: 24,
    paddingTop: 32,
    paddingBottom: 100,
    width: "100%",
    maxWidth: 760,
    alignSelf: "center",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#208AEF",
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 17,
    color: "#555555",
    marginBottom: 24,
  },
  texto: {
    fontSize: 16,
    color: "#333333",
    lineHeight: 24,
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 12,
    marginTop: 16,
    elevation: 2,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#208AEF",
    marginBottom: 10,
  },
  rodape: {
    marginTop: 35,
    textAlign: "center",
    fontSize: 12,
    color: "#777777",
  },
});
