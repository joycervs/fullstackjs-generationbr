let sobre = document.querySelector("#sobre");
async function getApiGitHub() {
  try {
    const dadosPerfil = await fetch("https://api.github.com/users/joycervs");
    const perfil = await dadosPerfil.json();

    let conteudo = `

 <div>
<img src="${perfil.avatar_url}" alt="Foto do perfil do github - ${perfil.name}">
</div>
<article>
<div class="sobre-conteudo">
<h2>Quem sou eu?</h2>
<div class="img">
</div>
<div>
<p>Olá! Sou Joyce, uma estudante de 26 anos apaixonada por tecnologia, especialmente pelo desenvolvimento de sistemas. Enquanto me aprofundo nos estudos, também mergulho no mundo do desenvolvimento web.
Estou sempre em busca de aprender mais e aplicar esse conhecimento em projetos que possam fazer a diferença. Acredito que cada desafio é uma oportunidade de crescimento e estou animada para ver onde essa jornada na tecnologia vai me levar!</p>
</div>

<div class="git">
<a class="botao" href="${perfil.html_url}">GitHub</a>
<p class="git" id="seguidores">${perfil.followers} Seguidores</p>
<p class="git" id="repositorios">${perfil.public_repos} Repositórios</p>
</div>
</div>
</article>
`;

    sobre.innerHTML += conteudo;
    
  } catch (error) {
    console.log(error);
    }
}

getApiGitHub();

