import { Button } from "@/components/button";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { linkstorage } from "@/storage/link-storage";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router, Link } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Add() {
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

    async function handleAdd() {
        try {
            if (!category) {
                return Alert.alert("Categoria", "Selecione a categoria")
            }

            if (!name.trim()) {
                return Alert.alert("Nome", "Informe o nome")
            }

            if (!url.trim()) {
                return Alert.alert("URL", "Informe a URL")
            }

            await linkstorage.save({
                id: String(new Date().getTime()),
                name,
                url,
                category
            })

            Alert.alert("Sucesso", "Link adicionado com sucesso", [
                { text: "Ok", onPress: () => router.back() }
            ])
        } catch (error) {
            Alert.alert("Erro", "Não foi possível salvar o link")
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                    <Link href="/index" />
                </TouchableOpacity>

                <Text style={styles.title}>Novo</Text>
            </View>

            <Text style={styles.label}>Selecione uma categoria</Text>
            <Categories onChange={setCategory} selected={category} />

            <View style={styles.form}>
                <Input placeholder="Nome" onChangeText={setName} autoCorrect={false} />
                <Input placeholder="URL" onChangeText={setUrl} autoCorrect={false} autoCapitalize="none" />
                <Button title="Adicionar" onPress={handleAdd} />
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 62,
        backgroundColor: colors.gray[950]
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        marginBottom: 24
    },
    title: {
        color: colors.gray[200],
        fontSize: 24,
        fontWeight: "600"
    },
    label: {
        color: colors.gray[400],
        fontSize: 14,
        paddingHorizontal: 24,
    },
    form: {
        padding: 24,
        gap: 16
    }
})