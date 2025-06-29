$(document).ready(function () {
    // Função auxiliar para obter parâmetros da URL
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // --- Lógica para Obter os Dados ---
    // Prioridade: 1. Parâmetros da URL, 2. localStorage, 3. Dados de Exemplo

    let nome = getUrlParameter('nome');
    let email = getUrlParameter('email');
    let cpf = getUrlParameter('cpf');
    let nascimento = getUrlParameter('nascimento'); // Espera-se formato YYYY-MM-DD da URL

    // Se não encontrou dados na URL, tenta buscar no localStorage
    if (!nome && !email && !cpf && !nascimento) {
        nome = localStorage.getItem('relatorio_nome') || '';
        email = localStorage.getItem('relatorio_email') || '';
        cpf = localStorage.getItem('relatorio_cpf') || '';
        nascimento = localStorage.getItem('relatorio_nascimento') || ''; // Espera-se formato YYYY-MM-DD do localStorage
    }

    // Se ainda não houver dados (nem na URL, nem no localStorage), usa dados de exemplo
    if (!nome && !email && !cpf && !nascimento) {
        nome = "Dados de Exemplo";
        email = "exemplo@dominio.com";
        cpf = "999.888.777-66";
        nascimento = "2000-01-01"; // Data de exemplo no formato YYYY-MM-DD
        
        // Opcional: Mostrar um alerta que dados de exemplo foram usados
        // if (typeof alertify !== 'undefined') {
        //     alertify.warning('Nenhum dado real encontrado. Exibindo dados de exemplo.');
        // }
    }

    // --- Formatação dos Dados ---
    // Formatar a data de YYYY-MM-DD para DD/MM/YYYY
    let nascimentoFormatado = '';
    if (nascimento) {
        const partesNascimento = nascimento.split('-');
        if (partesNascimento.length === 3) {
            nascimentoFormatado = `${partesNascimento[2]}/${partesNascimento[1]}/${partesNascimento[0]}`;
        } else {
            nascimentoFormatado = nascimento; // Mantém como está se o formato não for YYYY-MM-DD
        }
    }

    // --- Inserção dos Dados no HTML ---
    // Gerar o HTML do relatório com os dados obtidos e injetar na div #relatorio
    $('#relatorio').html(`
        <div class="container col s12 about">
            <div class="flow-text">
                <h5>Relatório de Cadastro de <span id="span-nome-relatorio">${nome}</span></h5>
                <p>
                    <span>${nome}</span> nascido em
                    <span>${nascimentoFormatado}</span> e tendo o número do
                    <span>${cpf}</span>.
                </p>
                <p>Entre em contato com essa pessoa por e-mail no seguinte endereço
                    <span>${email}</span>
                </p>
            </div>
        </div>
    `);

    // Opcional: Mostrar uma mensagem de sucesso após o carregamento do relatório
    // if (typeof alertify !== 'undefined' && nome !== "Dados de Exemplo") {
    //    alertify.success('Relatório carregado com sucesso!');
    // }
});