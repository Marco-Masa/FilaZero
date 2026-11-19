import { Link } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AnimatedIcon } from "@/components/animated-icon";

// Equipe responsável pelo projeto acadêmico
const colaboradores = [
  "Diogo Gonçalves de Jesus",
  "Gustavo Leandro Dantas da Silva",
  "Kauê Figueiredo da Costa",
  "Marco Aurélio Souza Amorim",
  "Vitor José Sena Neres",
];

export default function HomeScreen() {
  // Identifica se o celular está usando o tema escuro
  const colorScheme = useColorScheme();
  const escuro = colorScheme === "dark";

  return (
    <SafeAreaView style={[styles.container, escuro && styles.containerEscuro]}>
      <ScrollView
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
      >
        {/* Apresentação principal */}
        <View style={[styles.card, escuro && styles.cardEscuro]}>
          {/* Mantém o mascote original do projeto */}
          <View style={styles.logoContainer}>
            <AnimatedIcon />
          </View>

          <Text style={styles.titulo}>Bem-vindo ao FilaZero</Text>

          <Text style={styles.slogan}>O tempo a seu favor</Text>

          <Text style={[styles.descricao, escuro && styles.textoEscuro]}>
            Uma plataforma digital que conecta consumidores e prestadores de
            serviços, facilitando a busca e o agendamento de atendimentos.
          </Text>

          <Link href="/sobre" style={styles.botao}>
            Conheça o FilaZero
          </Link>
        </View>

        {/* Navegação para as três telas da segunda atividade */}
        <View style={[styles.card, escuro && styles.cardEscuro]}>
          <Text style={styles.tituloEquipe}>Explorar o FilaZero</Text>

          <Text style={[styles.textoExplorar, escuro && styles.textoEscuro]}>
            Conheça os recursos da nossa plataforma.
          </Text>

          <View style={styles.listaExplorar}>
            <Link href="/buscar" style={styles.linkExplorar}>
              Buscar Serviços →
            </Link>

            <Link href="/agendamentos" style={styles.linkExplorar}>
              Meus Agendamentos →
            </Link>

            <Link href="/prestadores" style={styles.linkExplorar}>
              Para Prestadores →
            </Link>
          </View>
        </View>

        {/* Apresentação da equipe */}
        <View style={[styles.card, escuro && styles.cardEscuro]}>
          <Text style={styles.tituloEquipe}>Equipe de Desenvolvimento</Text>

          <View style={styles.divisor} />

          {colaboradores.map((nome, index) => (
            <View key={index} style={styles.colaborador}>
              <View style={styles.marcador} />
              <Text style={[styles.nome, escuro && styles.textoEscuro]}>
                {nome}
              </Text>
            </View>
          ))}
        </View>

        {/* Identificação acadêmica */}
        <Text style={[styles.rodape, escuro && styles.textoEscuro]}>
          Projeto Acadêmico - ETEC de Praia Grande
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
  containerEscuro: {
    backgroundColor: "#101820",
  },
  conteudo: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 110,
    maxWidth: 600,
    width: "100%",
    alignSelf: "center",
    gap: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 22,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  cardEscuro: {
    backgroundColor: "#222831",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    width: "100%",
    minHeight: 180,
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#208AEF",
    textAlign: "center",
    marginBottom: 8,
  },
  slogan: {
    fontSize: 17,
    color: "#64748B",
    textAlign: "center",
    marginBottom: 18,
  },
  descricao: {
    fontSize: 15,
    color: "#334155",
    lineHeight: 23,
    textAlign: "center",
    marginBottom: 24,
  },
  textoEscuro: {
    color: "#E5E7EB",
  },
  botao: {
    backgroundColor: "#208AEF",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    overflow: "hidden",
    textAlign: "center",
    width: "100%",
  },
  tituloEquipe: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#208AEF",
    textAlign: "center",
    marginBottom: 12,
  },
  divisor: {
    width: "100%",
    height: 1,
    backgroundColor: "#DCE6F0",
    marginBottom: 12,
  },
  colaborador: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 9,
    gap: 12,
  },
  marcador: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#208AEF",
  },
  nome: {
    fontSize: 15,
    color: "#334155",
    flex: 1,
  },
  rodape: {
    textAlign: "center",
    fontSize: 12,
    color: "#64748B",
    marginTop: 4,
  },
  textoExplorar: {
    fontSize: 15,
    color: "#475569",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 18,
  },
  listaExplorar: {
    width: "100%",
    gap: 12,
  },
  linkExplorar: {
    backgroundColor: "#208AEF",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 10,
    overflow: "hidden",
  },
});
