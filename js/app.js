const app = Vue.createApp({});

// Componente Header
app.component('header-component', {
    template: `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="images/LOGO-LGFWCONSULTORIA.png" alt="Logo Advocacia" class="logo-img">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="#sobre">SOBRE</a></li>
                        <li class="nav-item"><a class="nav-link" href="#area-atuacao">ÁREAS DE ATUAÇÃO</a></li>
                        <li class="nav-item"><a class="nav-link" href="#blog">BLOG</a></li>
                        <li class="nav-item"><a class="nav-link" href="#endereco">ENDEREÇO</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contato">CONTATO</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `
});

// Componente Hero
app.component('hero-component', {
    template: `
        <section class="hero text-white text-center py-5">
            <div class="container hero-content">
                <h1>
                    Especialistas em Entregar<br/>
                    <span>Soluções com Excelência</span>
                </h1>
                <p>Soluções jurídicas com excelência e compromisso.</p>
                <a href="#contato" class="btn btn-light">Fale Conosco</a>
            </div>
        </section>
    `
});

// Componente Sobre
app.component('sobre-component', {
    template: `
        <section id="sobre" class="py-5">
            <div class="container">
                <h2>Sobre Nós</h2>
                <p>Somos um escritório de advocacia com anos de experiência...</p>
            </div>
        </section>
    `
});

// Componente Endereço
app.component('endereco-component', {
    template: `
        <section id="endereco" class="py-5 bg-light">
            <div class="container">
                <h2>Nosso Endereço</h2>
                <p>Rua Exemplo, 123 - Centro, São Paulo - SP</p>
            </div>
        </section>
    `
});

// Componente Contato
app.component('contato-component', {
    template: `
        <section id="contato" class="py-5">
            <div class="container">
                <h2>Contato</h2>
                <form>
                    <div class="mb-3">
                        <label for="nome" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="nome" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">E-mail</label>
                        <input type="email" class="form-control" id="email" required>
                    </div>
                    <div class="mb-3">
                        <label for="mensagem" class="form-label">Mensagem</label>
                        <textarea class="form-control" id="mensagem" rows="3" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>
        </section>
    `
});

app.mount('#app');
