import { vetoriza } from "./utils/vetorizaTermo.js";


// Função principal
async function processaTermo(termo) {
    let retornoAPI = ""
    let termoVetorizado = "";
    const termosVetorizados = [];
    // Vetoriza o termo recebido 
    try {
        termoVetorizado = await vetoriza(termo);
        console.log("Termo vetorizado: " + termoVetorizado.slice(0,100))
    } catch (error) {
        console.log("Erro ao tentar vetorizar o termo recebido: " + error.message);
    }
/*
    // Compara o vetor do termo com a base
    try {
        const vetores = vetorComparador(termoVetorizado);
        if (vetores.length === 0) {
            throw new Error("Não há vetores similares ao enviado");
        }
        termosVetorizados.push(vetores);
    } catch (error) {
        console.log("Não foi possível comparar o termo vetorizado com outros vetores: " + error.message)
    }
    // Compara os termos com a IA
    try {
        retornoAPI = contratoComparador(termo, termosVetorizados)
    } catch (error) {
        console.log("Não foi possível comparar o termo com a base contratual: " + error.message)
    }
    // Salva os resultados
    console.log("Processamento concluído. Resultados:", retornoAPI);*/
}

// Executa o processamento
try {
    processaTermo("Balão");
} catch (error) {
    console.log(error.message);
}