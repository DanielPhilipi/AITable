// Função para dividir o texto em partes
function divideDocumento(documento, maxLetras = 1000) {
    const secoes = [];
    let secaoAtual = "";
    const paragrafos = documento.split(/\n\s*\n/); // Divide por parágrafos

    for (const paragrafo of paragrafos) {
        if ((secaoAtual + paragrafo).length > maxLetras) {
            secoes.push(secaoAtual.trim());
            secaoAtual = paragrafo;
        } else {
            secaoAtual += "\n\n" + paragrafo;
        }
    }

    if (secaoAtual.trim()) {
        secoes.push(secaoAtual.trim());
    }

    return secoes;
}

export default { divideDocumento };