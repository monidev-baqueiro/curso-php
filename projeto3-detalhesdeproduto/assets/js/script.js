const memorias = {
    '256': { nome: '256 GB', preco: 9291.02, antigo: 12499.0 },
    '512': { nome: '512 GB', preco: 10999.0, antigo: 14499.0 },
    '1tb': { nome: '1 TB', preco: 12999.0, antigo: 16499.0 },
};

const imgPrincipal = document.getElementById('imgPrincipal');

function fmt(valor) {
    return valor.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

// Galeria: clique na miniatura troca a imagem principal
document.querySelectorAll('.thumb').forEach((thumb) => {
    thumb.addEventListener('click', () => {
        const img = thumb.querySelector('img');
        imgPrincipal.src = img.src;
        imgPrincipal.alt = img.alt;

        document
            .querySelectorAll('.thumb')
            .forEach((el) => el.classList.toggle('ativo', el === thumb));
    });
});

// Seletor de memória: atualiza preço, desconto e parcela
document.querySelectorAll('.mem').forEach((btn) => {
    btn.addEventListener('click', () => {
        const mem = memorias[btn.dataset.mem];
        const [inteiro, centavos] = fmt(mem.preco).split(',');

        document.getElementById('memNome').textContent = mem.nome;
        document.getElementById('precoInt').textContent = inteiro;
        document.getElementById('precoCent').textContent = centavos;
        document.getElementById('precoAntigo').textContent = `R$ ${fmt(mem.antigo)}`;
        document.getElementById('precoOff').textContent =
            `${Math.round((1 - mem.preco / mem.antigo) * 100)}% OFF`;
        document.getElementById('parcela').textContent = `10x de R$ ${fmt(mem.preco / 10)}`;

        document
            .querySelectorAll('.mem')
            .forEach((el) => el.classList.toggle('ativo', el === btn));
    });
});

// Favorito
const favBtn = document.getElementById('favBtn');
favBtn.addEventListener('click', () => {
    favBtn.classList.toggle('ativo');
    favBtn.querySelector('i').classList.toggle('fa-regular');
    favBtn.querySelector('i').classList.toggle('fa-solid');
});
