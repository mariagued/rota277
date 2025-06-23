  // Inicialização dos componentes Materialize
document.addEventListener('DOMContentLoaded', function () {
  
  // Sidenav (Menu Mobile)
  const sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  // Slider (Carrossel de Imagens)
  const slider = document.querySelectorAll('.slider');
  M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
  });

  // ScrollSpy (Destacar Seções)
  const scrollspy = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(scrollspy);

  // Collapsible (Acordeão)
  const collapsible = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsible);

  // Materialbox (Zoom nas imagens)
  const materialbox = document.querySelectorAll('.materialboxed');
  M.Materialbox.init(materialbox, {
    inDuration: 400,
    outDuration: 300,
    onOpenStart: () => console.log('Abrindo imagem...'),
    onOpenEnd: () => console.log('Imagem aberta!'),
    onCloseStart: () => console.log('Fechando imagem...'),
    onCloseEnd: () => console.log('Imagem fechada!')
  });

  // Form Select (Campos Select estilizados)
  const selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);

  // Autocomplete (Campo de busca)
  const autocomplete = document.querySelectorAll('.autocomplete');
  M.Autocomplete.init(autocomplete, {
    data: {
      'Cerveja': null,
      'Barril Artesanal': null,
      'Anos 90': null,
      'Cidade dos Lagos': null,
      'Lagoa das Lágrimas': null,
      'Parque das Araucárias': null
    }
  });
});

// login - alerta apos enviar formulario
// alertify.confirm(
//     'Confirmação',
//     'Deseja realmente salvar os dados?',
//     function () {
//         alertify.success('Dados salvos com sucesso!');
//         $('#form')[0].reset();
//     },
//     function () {
//         alertify.error('Operação cancelada');
//     }
// );
