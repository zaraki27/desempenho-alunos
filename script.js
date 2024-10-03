// URL do arquivo CSV no GitHub
const url = 'https://raw.githubusercontent.com/zaraki27/desempenho-alunos/main/desempenho_alunos.csv'; 

fetch(url)
    .then(response => response.text())
    .then(data => {
        const parsedData = Papa.parse(data, { header: true });
        const alunos = [];
        const notas = [];
        const frequencias = [];

        // Iterar sobre os dados do CSV
        parsedData.data.forEach(row => {
            alunos.push(row.Aluno);
            notas.push(parseFloat(row["Média 1º Trimestre"]) || 0); // Média do 1º Trimestre
            frequencias.push(parseFloat(row["Faltas 1º Trimestre"]) || 0); // Faltas do 1º Trimestre
        });

        // Chamar as funções para gerar os gráficos
        gerarGraficoNotas(alunos, notas);
        gerarGraficoFrequencia(alunos, frequencias);
    })
    .catch(error => console.error('Erro ao carregar o arquivo CSV:', error));

// Função para gerar gráfico de notas
function gerarGraficoNotas(alunos, notas) {
    const ctx = document.getElementById('graficoNotas').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: alunos,
            datasets: [{
                label: 'Notas do 1º Trimestre',
                data: notas,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Função para gerar gráfico de frequência
function gerarGraficoFrequencia(alunos, frequencias) {
    const ctx = document.getElementById('graficoFrequencia').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: alunos,
            datasets: [{
                label: 'Faltas do 1º Trimestre',
                data: frequencias,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
