# SiteWoopi11v

Este site é o projeto feito para o processo seletivo da Woopi.
O primeiro commit dele não é o inicio do projeto, pois tive que passar ele de Angular 12 para Angular 11, já que o 12 estava com problemas na hora de fazer build. No final acabei descobrindo que o problema era o Angular 12.

A ideia do site é ser um site de divulgação de programação, aonde existiria noticias sobre programação, além de projetos de usuarios. 

Foi desafiador, pois não tinha ideia de como utilizar este framework, além de não saber nada de TypeScript e não ter feito nenhum projeto com HTML e CSS, contando só com um conhecimento simples destes. Felizmente parte do conhecimento que eu tinha de outras linguagens traduziu sem maiores problemas para TypeScript, com uma ou outra coisa precisando procurar no StackOverflow.

## Inicio de desenvolvimento

No começo, eu fiz primeiro a funcionalidade básica de cadastro, sem nenhum conteudo na página.

Tomei esta decisão para conseguir garantir que eu teria o minimo para entregar no final do prazo, já que eu estava começando a utilizar o framework Angular, sem nenhum conhecimento avançado de HTML ou CSS.

### 1 ) Componentes

Primeiro criei os componentes de main-website-body, para ser o corpo principal (acredito que eu poderia ter usado já o app.component para isto, já que tive colocar o main dentro dele), barra de botões (button-bar), aonde eu coloquei o botão de cadastro, e o sign-up-form. Dentro do sign-up-form, criei inputs básicos nele.

![Alt text](/readme_res/readme1.jpeg?raw=true "Versão antes da mudança")

Já neste momento busquei uma funcionalidade nova, na qual os componentes filhos conseguem enviar eventos para componentes parentes. Desta forma, conseguia colocar botões dentro de um componente, e este componente poderia enviar dados para o parente.

```typescript
  @Output() emitterFormOpen = new EventEmitter<boolean>();
  @Output() emitterTableState = new EventEmitter<boolean>();

  private variableToPass : boolean = true;

  constructor() { }

  functionToCall() {
    this.emitterFormOpen.emit(this.variableToPass);
  }

  functionToCloseTableList(){
    this.emitterTableState.emit(false);
  }
```

### 2 ) Serviço
Após esta parte, ao invés de seguir a progressão sugerida pelo e-mail, eu achei prudente já utilizar service, para não precisar refatorar tanto o código. Inicialmente, decidi não utilizar arrays para guardar informações do usuario, utilizando apenas váriaveis dentro do serviço para tal, mas tive que mudar isto devido a forma como o angular table material funciona.

### 3 ) Reatividade
Terminado de implementar o serviço de User Profile, eu fiz uma tabela, seguindo os moldes providênciados pelo curso da Stefanini.

### 4 ) Style Reativo
Após terminar a implementação da tabela, adicionei as classes de cores para cada escolha e criei a lógica para retornar a classe do objeto de acordo com a escolha do usuario. Cada opção tem uma cor diferente na tabela final.

### 5 ) Mostrar / Ocultar Elemento
Depois foi implementada a lógica para ativar ou desativar o botão de enviar no final do cadastro dependendo da idade do usuário. Usuários com menos de 18 anos não conseguem cadastrar.

## Após o básico
Depois de feito o esqueleto do projeto, comecei a construir envolta do projeto.
Nesse momento, comencei a alternar entre adicionar novas funcionalidades e melhorar o design do site. Foram vários momentos no Google e StackOverflow tentando descobrir o que estava ocorrendo de errado, quando algo não funcionava. A documentação do Angular também foi de grande ajuda.

![Alt text](/readme_res/res3.png?raw=true "Uma das versões iniciais do site")

Por fim, eu adicionei materiais disponibilizados pelo Angular, como a tabela, botões e inputs.
Os inputs foram interessantes pois foi possivel adicionar validação de entrada. Com isso, eu mantive a validação básica de idade, mas caso o usuário forneça e-mail ou telefone, eles devem estar corretos. A única entrada obrigatória é a idade.

Também mudei o nome do site, utilizando um service que é disponibilizado pelo próprio angular.

No final, adicionei estas funcionalidades a mais:

* Input e Output entre objeto filho e parente
* Material do Angular
    * Botões
    * Tabelas
    * Inputs
* Validação de Input
* Icones nos Inputs
* Botões de fechar cadastro e fechar tabela
* Reatividade dos botões quando mouse passa por cima
* Alterar nome do site

O site, até o momento, está assim:
![Alt text](/readme_res/res4.jpg?raw=true "Estado atual do site")
