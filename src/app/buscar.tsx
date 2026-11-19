import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

// Imagem original do FilaZero
const logotipo = require("@/assets/images/logo_fila_zero_1.png");

// Categorias de demonstração
const categorias = [
  "Saúde",
  "Beleza e estética",
  "Serviços automotivos",
  "Manutenção e reparos",
  "Serviços domésticos",
  "Profissionais especializados",
];

export default function BuscarScreen() {
  // Armazena a categoria selecionada
  const [categoria, setCategoria] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        {/* Retorno para a Home */}
        <Link href="/" style={styles.voltar}>
          ← Voltar ao início
        </Link>

        {/* Apresentação */}
        <View style={styles.cabecalho}>
          <Image source={logotipo} style={styles.logo} contentFit="contain" />

          <Text style={styles.titulo}>Buscar serviços</Text>

          <Text style={styles.descricao}>
            Escolha uma categoria para encontrar serviços de seu interesse.
          </Text>
        </View>

        {/* Lista de categorias */}
        <Text style={styles.subtitulo}>Categorias disponíveis</Text>

        <View style={styles.grade}>
          {categorias.map((item) => (
            <Pressable
              key={item}
              onPress={() => setCategoria(item)}
              // Identificação para recursos de acessibilidade
              accessibilityRole="button"
              accessibilityLabel={`Selecionar categoria ${item}`}
              accessibilityState={{
                selected: categoria === item,
              }}
              style={({ pressed }) => [
                styles.cartao,
                categoria === item && styles.selecionado,
                pressed && styles.pressionado,
              ]}
            >
              <Text style={styles.nomeCategoria}>{item}</Text>
            </Pressable>
          ))}
        </View>

        {/* Resultado da interação */}
        {categoria !== "" && (
          <View style={styles.resultado}>
            <Text style={styles.resultadoTitulo}>Categoria selecionada</Text>

            <Text style={styles.resultadoTexto}>{categoria}</Text>
          </View>
        )}

        <View style={styles.aviso}>
          <Text style={styles.avisoTexto}>
            Protótipo acadêmico: a busca de prestadores será integrada em uma
            etapa futura.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F9FF",
  },
  conteudo: {
    padding: 22,
    paddingBottom: 60,
    width: "100%",
    maxWidth: 760,
    alignSelf: "center",
  },
  voltar: {
    color: "#208AEF",
    fontSize: 15,
    marginBottom: 12,
  },
  cabecalho: {
    alignItems: "center",
    marginBottom: 25,
  },
  logo: {
    width: 110,
    height: 110,
    marginBottom: 12,
  },
  titulo: {
    color: "#208AEF",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  descricao: {
    color: "#475569",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    lineHeight: 23,
  },
  subtitulo: {
    color: "#202E40",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 16,
  },
  grade: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  cartao: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#DCE6F0",
    padding: 16,
    width: "47%",
    minHeight: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  selecionado: {
    borderColor: "#208AEF",
    backgroundColor: "#E7F3FF",
  },
  pressionado: {
    opacity: 0.7,
  },
  nomeCategoria: {
    fontSize: 15,
    color: "#334155",
    fontWeight: "bold",
    textAlign: "center",
  },
  resultado: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 18,
    marginTop: 22,
    borderLeftWidth: 4,
    borderLeftColor: "#208AEF",
  },
  resultadoTitulo: {
    color: "#64748B",
    fontSize: 14,
  },
  resultadoTexto: {
    color: "#208AEF",
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 5,
  },
  aviso: {
    backgroundColor: "#E7F3FF",
    padding: 16,
    borderRadius: 12,
    marginTop: 25,
  },
  avisoTexto: {
    color: "#475569",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },
});
