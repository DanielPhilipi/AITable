const axios = require("axios");
import { BedrockEmbeddings } from "@langchain/aws";

// Função para enviar uma parte do documento para a API
async function comparaIA(termo, base) {
    const apiUrl = process.env.AWS_URL_API;
    const apiKey = process.env.AWS_ACCESS_KEY;
    try {
        const response = await axios.post(
            apiUrl,
            {
                comando: `Analise o termo "${termo}" em comparação com a base de dados abaixo: 
                "${base}" 
                Devolva o item da base que mais se assemelha com o termo enviado.
                Devolva apenas o item da base.`
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Erro ao enviar parte do contrato para API:", error.message);
        throw error;
    }
}

export default { comparaIA };