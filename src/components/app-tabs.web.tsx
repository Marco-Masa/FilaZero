import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
  TabTriggerSlotProps,
  TabListProps,
} from "expo-router/ui";

import { Pressable, View, StyleSheet } from "react-native";

import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

import { MaxContentWidth, Spacing } from "@/constants/theme";

// Navegação principal da versão web
export default function AppTabs() {
  return (
    <Tabs>
      {/* Menu superior */}
      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="home" href="/" asChild>
            <TabButton>Início</TabButton>
          </TabTrigger>

          <TabTrigger name="sobre" href="/sobre" asChild>
            <TabButton>Sobre</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>

      {/* Conteúdo da tela selecionada */}
      <TabSlot style={styles.conteudo} />
    </Tabs>
  );
}

// Botões de navegação
export function TabButton({
  children,
  isFocused,
  ...props
}: TabTriggerSlotProps) {
  return (
    <Pressable {...props} style={({ pressed }) => pressed && styles.pressed}>
      <ThemedView
        type={isFocused ? "backgroundSelected" : "backgroundElement"}
        style={styles.tabButtonView}
      >
        <ThemedText
          type="small"
          themeColor={isFocused ? "text" : "textSecondary"}
        >
          {children}
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
}

// Cabeçalho com identidade do FilaZero
export function CustomTabList(props: TabListProps) {
  return (
    <View style={styles.tabListContainer}>
      <ThemedView type="backgroundElement" style={styles.innerContainer}>
        <ThemedText type="smallBold" style={styles.brandText}>
          FilaZero
        </ThemedText>

        {props.children}
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
  },
  tabListContainer: {
    width: "100%",
    padding: Spacing.three,
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    width: "100%",
    maxWidth: MaxContentWidth,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.five,
    borderRadius: Spacing.five,
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.two,
  },
  brandText: {
    marginRight: "auto",
  },
  pressed: {
    opacity: 0.7,
  },
  tabButtonView: {
    paddingVertical: Spacing.one,
    paddingHorizontal: Spacing.three,
    borderRadius: Spacing.three,
  },
});
