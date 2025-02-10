const axios = require("axios");

// Função para enviar uma parte do documento para a API
async function enviaDocumento(secao, comando) {
    const apiUrl = process.env.AWS_URL_API;
    const apiKey = process.env.AWS_ACCESS_KEY;
    try {
        const response = await axios.post(
            apiUrl,
            {
                text: secao,
                comando
            },
            {
                headers:{
                    "Content-Type":"application/json",
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

export default { enviaDocumento };