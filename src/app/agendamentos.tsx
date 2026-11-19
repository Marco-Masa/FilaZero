import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";

// Logotipo original do FilaZero
const logotipo = require("@/assets/images/logo_fila_zero_1.png");

// Agendamentos fictícios para demonstração acadêmica
const agendamentos = [
  {
    id: 1,
    empresa: "Oficina Modelo",
    servico: "Avaliação inicial",
    data: "10/03/2026",
    horario: "09:30",
    status: "Confirmado",
  },
  {
    id: 2,
    empresa: "Clínica Exemplo",
    servico: "Consulta inicial",
    data: "15/03/2026",
    horario: "14:00",
    status: "Concluído",
  },
  {
    id: 3,
    empresa: "Salão Demonstração",
    servico: "Avaliação inicial",
    data: "20/03/2026",
    horario: "10:00",
    status: "Cancelado",
  },
];

type Filtro = "Todos" | "Confirmado" | "Concluído";

export default function AgendamentosScreen() {
  // Controla o filtro selecionado pelo usuário
  const [filtro, setFiltro] = useState<Filtro>("Todos");

  // Seleciona os registros que serão apresentados
  const lista = agendamentos.filter(
    (item) => filtro === "Todos" || item.status === filtro,
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        {/* Retorno à Home */}
        <Link href="/" style={styles.voltar}>
          ← Voltar ao início
        </Link>

        {/* Cabeçalho */}
        <View style={styles.cabecalho}>
          <Image source={logotipo} style={styles.logo} contentFit="contain" />

          <Text style={styles.titulo}>Meus agendamentos</Text>

          <Text style={styles.descricao}>
            Acompanhe seus atendimentos e consulte a situação de cada
            agendamento.
          </Text>
        </View>

        {/* Botões para filtrar os agendamentos */}
        <View style={styles.filtros}>
          {(["Todos", "Confirmado", "Concluído"] as Filtro[]).map((opcao) => (
            <Pressable
              key={opcao}
              onPress={() => setFiltro(opcao)}
              // Identificação e estado do filtro
              accessibilityRole="button"
              accessibilityLabel={
                opcao === "Todos"
                  ? "Mostrar todos os agendamentos"
                  : `Mostrar agendamentos ${opcao === "Confirmado" ? "confirmados" : "concluídos"}`
              }
              accessibilityState={{
                selected: filtro === opcao,
              }}
              style={[
                styles.botaoFiltro,
                filtro === opcao && styles.filtroAtivo,
              ]}
            >
              <Text
                style={[
                  styles.textoFiltro,
                  filtro === opcao && styles.textoFiltroAtivo,
                ]}
              >
                {opcao === "Confirmado"
                  ? "Confirmados"
                  : opcao === "Concluído"
                    ? "Concluídos"
                    : "Todos"}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Lista de agendamentos */}
        {lista.map((item) => (
          <View key={item.id} style={styles.cartao}>
            <View style={styles.linhaTitulo}>
              <Text style={styles.empresa}>{item.empresa}</Text>

              <Text
                style={[
                  styles.status,
                  item.status === "Confirmado"
                    ? styles.confirmado
                    : item.status === "Concluído"
                      ? styles.concluido
                      : styles.cancelado,
                ]}
              >
                {item.status}
              </Text>
            </View>

            <Text style={styles.servico}>{item.servico}</Text>

            <Text style={styles.detalhes}>Data: {item.data}</Text>

            <Text style={styles.detalhes}>Horário: {item.horario}</Text>
          </View>
        ))}

        {/* Mensagem para lista vazia */}
        {lista.length === 0 && (
          <Text style={styles.vazio}>Nenhum agendamento encontrado.</Text>
        )}

        {/* Informação acadêmica */}
        <View style={styles.aviso}>
          <Text style={styles.avisoTexto}>
            Os agendamentos apresentados são fictícios. Esta tela demonstra a
            futura funcionalidade de acompanhamento do FilaZero.
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
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#208AEF",
    textAlign: "center",
  },
  descricao: {
    fontSize: 15,
    color: "#475569",
    lineHeight: 23,
    textAlign: "center",
    marginTop: 10,
  },
  filtros: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
  },
  botaoFiltro: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DCE6F0",
    alignItems: "center",
  },
  filtroAtivo: {
    backgroundColor: "#208AEF",
    borderColor: "#208AEF",
  },
  textoFiltro: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#334155",
  },
  textoFiltroAtivo: {
    color: "#FFFFFF",
  },
  cartao: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    elevation: 2,
  },
  linhaTitulo: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 10,
  },
  empresa: {
    flex: 1,
    fontSize: 17,
    fontWeight: "bold",
    color: "#202E40",
  },
  status: {
    fontSize: 12,
    fontWeight: "bold",
  },
  confirmado: {
    color: "#208AEF",
  },
  concluido: {
    color: "#25804A",
  },
  cancelado: {
    color: "#64748B",
  },
  servico: {
    fontSize: 15,
    color: "#475569",
    marginBottom: 12,
  },
  detalhes: {
    fontSize: 14,
    color: "#334155",
    marginBottom: 5,
  },
  vazio: {
    color: "#64748B",
    textAlign: "center",
    marginVertical: 30,
  },
  aviso: {
    backgroundColor: "#E7F3FF",
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
  },
  avisoTexto: {
    color: "#475569",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },
});
