
document.querySelectorAll('.button').forEach(btn => {
    btn.addEventListener('click', function() {
      
      this.parentElement.querySelectorAll('.button').forEach(b => b.classList.remove('selected'));
    
      this.classList.add('selected');
      
      const targetInput = this.parentElement.nextElementSibling;
      if (targetInput && targetInput.tagName === 'INPUT') {
        targetInput.value = this.getAttribute('data-value');
      }
    });
  });

 
  


  function enviarInformaçoes(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    const idade = document.getElementById('idade').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const objetivo = document.getElementById('objetivo').value;
    const sexo = document.getElementById('sexo').value;
    const imc = (peso / (altura * altura)).toFixed(2);
  
    
    console.log('Dados do formulário:', { nome, idade, objetivo, sexo, altura, peso });
  
    
    if (!nome || !idade || !objetivo || !sexo) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }
  
    let pagina = '';
  
    if (objetivo === 'emagrecer') {
      pagina = 'saúdemg.html';
    } 
    else if (objetivo === 'ganhar-massa') {
      if (sexo === 'masculino') {
        pagina = 'ganhomassam.html';
      } else if (sexo === 'feminino') { 
        pagina = 'ganhomassaf.html';
      }
    }
    else if (objetivo === 'definicao') {
      if (sexo === 'masculino') {
        pagina = 'definiçãom.html';
      } else if (sexo === 'feminino') {
        pagina = 'definiçãof.html';
      }
    }
    else if (objetivo === 'saude') {
      pagina = 'saúdemg.html'; 
    }
    else {
      alert('Objetivo não reconhecido!');
      return;
    }
  
    
    const params = new URLSearchParams({
      nome: nome,
      idade: idade,
      sexo: sexo,
      altura: altura,
      peso: peso,
      objetivo: objetivo,
      imc: imc
    });
  
    
    window.location.href = `${pagina}?${params.toString()}`;
  }