import { Link, Stack } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Página não encontrada",
          headerShown: false,
        }}
      />

      <View style={styles.container}>
        {/* Logotipo do FilaZero */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/logo_fila_zero_1.png")}
            style={styles.logoImagem}
            resizeMode="contain"
          />
        </View>

        {/* Mensagem principal */}
        <View style={styles.card}>
          <Text style={styles.codigo}>404</Text>

          <Text style={styles.titulo}>Ops! Página não encontrada</Text>

          <Text style={styles.mensagem}>
            Parece que este endereço não está disponível. Mas não se preocupe,
            podemos voltar ao início.
          </Text>

          {/* Navegação para a Home */}
          <Link href="/" asChild>
            <Text style={styles.botao}>Voltar ao início</Text>
          </Link>
        </View>

        <Text style={styles.rodape}>FilaZero — O tempo a seu favor</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F9FF",
    justifyContent: "center",
    padding: 24,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoImagem: {
    width: 110,
    height: 110,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 25,
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    maxWidth: 520,
    elevation: 3,
    shadowColor: "#000000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  codigo: {
    fontSize: 68,
    fontWeight: "bold",
    color: "#208AEF",
  },
  titulo: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#202E40",
    textAlign: "center",
    marginBottom: 15,
  },
  mensagem: {
    fontSize: 16,
    color: "#64748B",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
  },
  botao: {
    backgroundColor: "#208AEF",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 15,
    paddingHorizontal: 28,
    borderRadius: 12,
    overflow: "hidden",
    textAlign: "center",
  },
  rodape: {
    fontSize: 13,
    color: "#64748B",
    textAlign: "center",
    marginTop: 30,
  },
});
