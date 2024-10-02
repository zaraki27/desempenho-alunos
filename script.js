document.getElementById('csvFileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const data = e.target.result;

        // Usando PapaParse para processar o CSV
        const parsedData = Papa.parse(data, { header: true });
        const alunos = [];
        const notas = [];
        const frequencias = [];

        // Iterar sobre os dados para extrair as notas e frequências
        parsedData.data.forEach(row => {
            alunos.push(row.Aluno);
            notas.push(parseFloat(row.Nota));
            frequencias.push(parseFloat(row.Frequencia));
        });

        // Gerar os gráficos após o upload do CSV
        gerarGraficoNotas(alunos, notas);
        gerarGraficoFrequencia(alunos, frequencias);
    };

    reader.readAsText(file);
});

function gerarGraficoNotas(alunos, notas) {
    const ctx = document.getElementById('graficoNotas').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: alunos,
            datasets: [{
                label: 'Notas',
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

function gerarGraficoFrequencia(alunos, frequencias) {
    const ctx = document.getElementById('graficoFrequencia').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: alunos,
            datasets: [{
                label: 'Frequência (%)',
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
