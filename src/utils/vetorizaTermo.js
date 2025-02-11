import { BedrockEmbeddings } from "@langchain/aws";

export async function vetoriza(termo) {
    //Vetorizando o termo
    const embeddings = new BedrockEmbeddings({
        region: "us-east-1",
        credentials: {
            accessKeyId: process.env.BEDROCK_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.BEDROCK_AWS_SECRET_ACCESS_KEY,
        },
        model: "amazon.titan-embed-text-v2:0",
    });

    const termoVetorizado = await embeddings.embedQuery(termo);
    return termoVetorizado
}