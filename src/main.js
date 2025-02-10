import fs from 'fs';
import path from 'path';
import PdfParse from 'pdf-parse';

import { divideDocumento } from "./utils/dividirDocumento";
import { enviaDocumento } from "./service/conexaoAPI";

// Função principal
async function processaDocumento(arquivo) {
    try {
        // Lê o arquivo PDF
        const pdfData = fs.readFileSync(arquivo);
        const pdf = await PdfParse(pdfData);
        const Texto = pdf.text;

        // Divide o texto em seções
        const secoes = divideDocumento(Texto);

        // Define o comando
        const comando = ["Retorne a tebela de pacotes. Apenas com as informações contidas na tabela. Se não encontrar, procure pela tabela de procedimentos."];

        // Processa cada seção
        const results = [];
        const response = await enviaDocumento(Texto, comando);
        results.push({ secao, comando, response });
 /*       
        for (const secao of secoes) {
            const response = await enviaDocumento(secao, comando);
            results.push({ secao, comando, response });
        }
*/
        // Salva os resultados
        const retornoAPI = path.join(__dirname, "../output/respostas.json");
        fs.writeFileSync(retornoAPI, JSON.stringify(results, null, 2));
        console.log("Processamento concluído. Resultados salvos em:", retornoAPI);
    } catch (error) {
        console.error("Erro durante o processamento:", error.message);
    }
}

// Executa o processamento
const arquivo = path.join(__dirname, "../data/contrato.pdf");
processaDocumento(arquivo);