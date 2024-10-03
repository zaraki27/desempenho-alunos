const url = 'https://raw.githubusercontent.com/seu-usuario/seu-repositorio/main/desempenho_alunos.csv'; // Substitua pelo seu link

fetch(url)
    .then(response => response.text())
    .then(data => {
        const parsedData = Papa.parse(data, { header: true });
        const alunos = [];
        const notas = [];
        const frequencias = [];

        parsedData.data.forEach(row => {
            alunos.push(row.Aluno);
            notas.push(parseFloat(row["Média 1º Trimestre"]) || 0); // Substitua com a média desejada
            frequencias.push(parseFloat(row["Faltas 1º Trimestre"]) || 0); // Substitua com as faltas desejadas
        });

        gerarGraficoNotas(alunos, notas);
        gerarGraficoFrequencia(alunos, frequencias);
    })
    .catch(error => console.error('Erro ao carregar o arquivo CSV:', error));
