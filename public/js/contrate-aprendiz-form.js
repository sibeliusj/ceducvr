// Formulário de Contratação de Aprendizes - CEDUCVR
// Flag para desabilitar o script genérico contact-form.js nesta página
window.DISABLE_GENERIC_CONTACT_FORM = true;

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contrateUmAprendiz');
    const submitBtn = document.getElementById('submit_btn');
    const resultDiv = document.getElementById('result');
    
    // Aguardar um pouco para garantir que o jQuery está carregado
    setTimeout(function() {
        // Remover eventos conflitantes do script genérico
        if (submitBtn && typeof $ !== 'undefined') {
            // Remove todos os event listeners jQuery anteriores
            $(submitBtn).off('click');
        }
        
        // Também remover event listeners vanilla JS clonando o elemento
        if (submitBtn) {
            const newSubmitBtn = submitBtn.cloneNode(true);
            submitBtn.parentNode.replaceChild(newSubmitBtn, submitBtn);
        }
    }, 100);
    
    const cleanSubmitBtn = document.getElementById('submit_btn');
    
    if (form && cleanSubmitBtn) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Resetar mensagens anteriores
            resultDiv.innerHTML = '';
            resultDiv.className = '';
            
            // Desabilitar botão e mostrar carregamento
            cleanSubmitBtn.disabled = true;
            cleanSubmitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Enviando...';
            
            // Preparar dados do formulário
            const formData = new FormData();
            
            // Campos básicos
            formData.append('name', document.getElementById('name').value);
            formData.append('email', document.getElementById('email').value);
            formData.append('Telefone', document.getElementById('Telefone').value);
            formData.append('assunto', document.getElementById('assunto').value); // Nome da empresa
            formData.append('quantidade_aprendizes', document.getElementById('quantidade_aprendizes').value);
            formData.append('message', document.getElementById('message').value);
            
            // Checkboxes
            const primeiraContratacao = document.getElementById('primeira_contratacao');
            const buscaNovaParceira = document.getElementById('busca_nova_parceira');
            
            if (primeiraContratacao && primeiraContratacao.checked) {
                formData.append('primeira_contratacao', '1');
            }
            
            if (buscaNovaParceira && buscaNovaParceira.checked) {
                formData.append('busca_nova_parceira', '1');
            }
            
            // Cloudflare Turnstile response
            const turnstileResponse = document.querySelector('[name="cf-turnstile-response"]');
            if (turnstileResponse && turnstileResponse.value) {
                formData.append('cf-turnstile-response', turnstileResponse.value);
            }
            
            // Enviar requisição
            fetch('php/contrate-aprendiz-handler.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Sucesso
                    resultDiv.innerHTML = `
                        <div class="alert alert-success">
                            <i class="fa fa-check-circle"></i>
                            ${data.message}
                        </div>
                    `;
                    resultDiv.className = 'form-result success';
                    
                    // Limpar formulário
                    form.reset();
                    
                    // Reset Turnstile
                    if (typeof turnstile !== 'undefined') {
                        turnstile.reset();
                    }
                    
                    // Scroll para a mensagem de sucesso
                    resultDiv.scrollIntoView({ behavior: 'smooth' });
                    
                } else {
                    // Erro
                    resultDiv.innerHTML = `
                        <div class="alert alert-danger">
                            <i class="fa fa-exclamation-triangle"></i>
                            ${data.message}
                        </div>
                    `;
                    resultDiv.className = 'form-result error';
                    
                    // Reset Turnstile em caso de erro
                    if (typeof turnstile !== 'undefined') {
                        turnstile.reset();
                    }
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                resultDiv.innerHTML = `
                    <div class="alert alert-danger">
                        <i class="fa fa-exclamation-triangle"></i>
                        Erro inesperado ao enviar a solicitação. Tente novamente ou entre em contato por telefone: (31) 2103-2716
                    </div>
                `;
                resultDiv.className = 'form-result error';
                
                // Reset Turnstile
                if (typeof turnstile !== 'undefined') {
                    turnstile.reset();
                }
            })
            .finally(() => {
                // Reabilitar botão
                cleanSubmitBtn.disabled = false;
                cleanSubmitBtn.innerHTML = '<i class="fa fa-paper-plane"></i> Enviar Solicitação';
            });
        });
        
        // Também adicionar listener no botão diretamente para garantir
        cleanSubmitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Verificar se já está processando para evitar duplo envio
            if (cleanSubmitBtn.disabled) {
                return false;
            }
            
            // Trigger do submit do formulário
            form.dispatchEvent(new Event('submit'));
            return false;
        });
    }
});

// Validação em tempo real dos campos
document.addEventListener('DOMContentLoaded', function() {
    // Validação do campo de quantidade de aprendizes
    const quantidadeInput = document.getElementById('quantidade_aprendizes');
    if (quantidadeInput) {
        quantidadeInput.addEventListener('input', function() {
            const value = this.value;
            if (value && (isNaN(value) || value < 1 || value > 999)) {
                this.setCustomValidity('Digite um número válido entre 1 e 999');
            } else {
                this.setCustomValidity('');
            }
        });
    }
    
    // Formatação do telefone
    const telefoneInput = document.getElementById('Telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, ''); // Remove não dígitos
            
            if (value.length >= 11) {
                // Formato: (XX) XXXXX-XXXX
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else if (value.length >= 6) {
                // Formato: (XX) XXXX-XXXX
                value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else if (value.length >= 2) {
                // Formato: (XX) 
                value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
            }
            
            this.value = value;
        });
    }
    
    // Validação de email corporativo
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const email = this.value.toLowerCase();
            const commonPersonalDomains = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'live.com'];
            
            if (email) {
                const domain = email.split('@')[1];
                if (commonPersonalDomains.includes(domain)) {
                    // Apenas um aviso, não impede o envio
                    this.title = 'Recomendamos usar um e-mail corporativo para melhor atendimento';
                    this.style.borderColor = '#ffc107';
                } else {
                    this.title = '';
                    this.style.borderColor = '';
                }
            }
        });
    }
});