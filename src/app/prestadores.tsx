import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

// Logotipo original do projeto
const logotipo = require("@/assets/images/logo_fila_zero_1.png");

// Recursos previstos para os prestadores
const recursos = [
  {
    id: 1,
    titulo: "Divulgação de serviços",
    descricao:
      "Divulgue os serviços oferecidos pela sua empresa ou atividade autônoma, facilitando a busca pelos consumidores.",
    icone: "megaphone-outline",
  },
  {
    id: 2,
    titulo: "Agenda e disponibilidade",
    descricao:
      "Configure os dias e horários disponíveis e a quantidade de atendimentos simultâneos por horário.",
    icone: "calendar-outline",
  },
  {
    id: 3,
    titulo: "Organização dos agendamentos",
    descricao:
      "Consulte os atendimentos agendados, acompanhe suas situações e organize sua disponibilidade.",
    icone: "clipboard-outline",
  },
  {
    id: 4,
    titulo: "Planos de divulgação",
    descricao:
      "Conheça as opções de divulgação mensal, trimestral, semestral e anual, com contratação e renovação voluntárias.",
    icone: "card-outline",
  },
] as const;

export default function PrestadoresScreen() {
  // Guarda o código do recurso que está expandido
  const [recursoAberto, setRecursoAberto] = useState<number | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        {/* Navegação para a Home */}
        <Link href="/" style={styles.voltar}>
          ← Voltar ao início
        </Link>

        {/* Apresentação da tela */}
        <View style={styles.cabecalho}>
          <Image source={logotipo} style={styles.logo} contentFit="contain" />

          <Text style={styles.titulo}>Para Prestadores</Text>

          <Text style={styles.descricao}>
            Divulgue seus serviços e organize seus atendimentos com o FilaZero.
          </Text>
        </View>

        <Text style={styles.subtitulo}>Recursos da plataforma</Text>

        {/* Cartões interativos */}
        {recursos.map((recurso) => {
          const expandido = recursoAberto === recurso.id;

          return (
            <Pressable
              key={recurso.id}
              onPress={() => setRecursoAberto(expandido ? null : recurso.id)}
              accessibilityRole="button"
              accessibilityState={{ expanded: expandido }}
              style={({ pressed }) => [
                styles.cartao,
                pressed && styles.pressionado,
              ]}
            >
              <View style={styles.linhaCartao}>
                <Ionicons name={recurso.icone} size={25} color="#208AEF" />

                <Text style={styles.tituloCartao}>{recurso.titulo}</Text>

                <Ionicons
                  name={
                    expandido ? "chevron-up-outline" : "chevron-down-outline"
                  }
                  size={20}
                  color="#64748B"
                />
              </View>

              {/* Descrição exibida somente quando expandido */}
              {expandido && (
                <Text style={styles.descricaoCartao}>{recurso.descricao}</Text>
              )}
            </Pressable>
          );
        })}

        {/* Informações sobre o período experimental */}
        <View style={styles.destaque}>
          <Text style={styles.tituloDestaque}>7 dias gratuitos</Text>

          <Text style={styles.textoDestaque}>
            O FilaZero prevê um período de teste gratuito de sete dias para
            prestadores elegíveis, após validação do cadastro.
          </Text>
        </View>

        {/* Limitação do escopo */}
        <View style={styles.aviso}>
          <Text style={styles.avisoTexto}>
            O FilaZero não intermediará a negociação, a execução ou o pagamento
            dos serviços contratados pelos consumidores.
          </Text>
        </View>

        {/* Rodapé acadêmico */}
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
    lineHeight: 23,
    textAlign: "center",
    marginTop: 10,
  },
  subtitulo: {
    color: "#202E40",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 16,
  },
  cartao: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#DCE6F0",
    elevation: 2,
  },
  pressionado: {
    opacity: 0.7,
  },
  linhaCartao: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  tituloCartao: {
    flex: 1,
    color: "#202E40",
    fontSize: 16,
    fontWeight: "bold",
  },
  descricaoCartao: {
    color: "#475569",
    fontSize: 15,
    lineHeight: 23,
    marginTop: 15,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
  },
  destaque: {
    backgroundColor: "#E7F3FF",
    borderRadius: 12,
    padding: 18,
    marginTop: 15,
  },
  tituloDestaque: {
    color: "#208AEF",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textoDestaque: {
    color: "#475569",
    fontSize: 15,
    lineHeight: 23,
  },
  aviso: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  },
  avisoTexto: {
    color: "#64748B",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },
  rodape: {
    color: "#64748B",
    fontSize: 12,
    textAlign: "center",
    marginTop: 30,
  },
});
