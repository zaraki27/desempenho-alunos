# desempenho-alunosconst ctx = document.getElementById('graficoDesempenho').getContext('2d');

const data = {
    labels: ['Aluno 1', 'Aluno 2', 'Aluno 3', 'Aluno 4', 'Aluno 5'],
    datasets: [{
        label: 'Notas',
        data: [75, 88, 92, 60, 85],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }, {
        label: 'Frequência (%)',
        data: [95, 90, 100, 85, 80],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const graficoDesempenho = new Chart(ctx, config);
