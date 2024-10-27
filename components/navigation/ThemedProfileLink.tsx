import { type ComponentProps } from "react";
import { Link } from "expo-router";
import { ThemedView } from "../ThemedView";

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

export function ThemedProfileLink({ href, ...rest }: Props) {
  return <ThemedView>Deneme</ThemedView>;
}
