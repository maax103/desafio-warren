# Documentação - Desafio Warren

Este repositório foi criado como resolução ao Desafio Warren do programa de formação e recrutamento da ProWay em parceria com a Warren Academy.

## Sobre o projeto

Este projeto é uma aplicação web desenvolvida com javascript, utilizando a biblioteca de renderização React JS e styled-components.

O detalhamento dos desafios está na sessão final desta documentação

## Instruções de uso

Para executar a aplicação você pode acessar o link: https://maax103.github.io/desafio-warren

Se deseja efetuar o download e executar em máquina local, será necessário as seguintes operações:

- Possuir o Node JS instalado na máquina e abrir o console
- Clonar este repositório com <code>git clone https://github.com/maax103/desafio-warren</code>
- Acessar a pasta clonada com <code>cd desafio-warren</code>
- Baixar todas as dependências com <code>npm install</code> ou <code>yarn add</code>
- Executar <code>npm start</code> ou <code>yarn run start</code>

## Detalhamento dos desafios

### Desafio 01 

  Neste desafio foi necessário escrever a soma de todos os números N sendo N um número dos N*, tal que <code>N + inverso(N) < 1.000.000</code> e seja ímpar. A função <code>inverso(N)</code> converte o número em uma string, inverte a string e retorna a string convertida em número novamente.

  Neste desafio o número 1.000.000 foi flexibilizado, permitindo a escolha de um número limitador qualquer.

  A aplicação retorna uma tabela com:  
  
      nº da linha | N | inverso(N) | N + inverso(N)
  
  Caso a tabela tenha muitas linhas, o sistema não irá retorná-la, ao invés disso irá exibir um botão para baixar a tabela em .txt. 
  
  ### Desafio 02
  
  Neste desafio foi necessário criar um sistema que verificasse o horário de chegada de alunos em uma aula com horário determinado. Com base nessa análise o sistema deve dizer se a aula deve ser cancelada ou não, para isso terá como base a quantidade mínima de alunos necessária para iniciar a aula no horário combinado.
  
  A solução inclui campos para informar o horário da aula, quantidade mínima e botões para adicionar novo aluno a turma ou remover. No campo aluno pode ser informado o horário de chegada deste aluno. O sistema então retorna uma mensagem dizendo se a aula deve ser cancelada ou não.
  
  ### Desafio 03
  
  Este desafio foi o mais difícil, foram criadas duas soluções que são utilizadas em momentos distintos.
  
  O problema consiste em informar uma lista de números V e um número N. O sistema deve então retornar todas as combinações possíveis de V, tal que a soma dos de números desta combinação deve ser o mais próximo possível de N e possua a menor quantidade de elementos possíveis.
  
  Exemplo:
  
    lista V: [2, 3, 4]
    número N: 10
  
    solução: [2,4,4] , [3,4,4]

Este problema pode se tornar complexo pois para calcular todas as soluções possíveis seria necessário verificar todas as combinações e escolher o vetor com menor quantidade de elementos. Isso quer dizer que seria necessário calcular todos os vetores possíveis, isto significa que teriamos que testar todas as combinações de vetores com 1, 2, 3, 4... elementos, até encontrar o vetor cuja soma se aproxime de N.
  
Devido as isto, se o usuário informar N = 1000 e V = [1, 2, 3], o sistema deve retornar [333 elementos 3, 1]. Portanto a solução é um vetor com 334 elementos. No ponto de vista do algoritmo, isso equivale a testar todos os outros vetores menores que 334 elementos.
  
Ao analisar apenas o vetor com 3 elemntos, o algoritmo iria testar (3 possibilidades * 3 possibilidades * 3 possibilidades) = 3^3 = 9 possibilidades
  
Já ao analisar apenas o vetor com 333 elementos, será testado 3^333 combinações. Isto equivale a aproximadamente 7,6 * 10^158 arranjos possíveis.

Para efetuar essas verificações, foi necessário criar uma função recursiva que testa todos os arranjos possíveis de um vetor, este algoritmo se comporta  de forma similar a algoritmos que quebra de senha por força bruta.
  
De forma similar ao desafio 01, o sistema não irá renderizar a solução em tela caso ela for muito grande e irá habilitar um botão para download de um .txt.
  
Porém efetuar todas as validações possíveis implica em um esforço computacional muito grande. Devido a isso ao verificar que serão necessárias mais de 10^7 arranjos, o sistema aplica um algoritmo diferente. Está caso também se aplica caso a operação ultrapasse o tempo limite de 5 segundos.
  
#### Algoritmo de solução otimizada
  
  Este algoritmo ordena o vetor V informado em ordem decrescente, pega o primeiro elemento e começa a verificar a divisão inteira e resto de divisão ao dividir o número N. Este resto de divisão será utilizado para efetuar a mesma operação com o próximo número do vetor V.
  
  Ao esgotar as possibilidades ou ao obter uma divisão inteira = 0, o processo finaliza retornando o a solução utilizando os valores obtidos no processo.
  
  Este algoritmo rapidamente converge para a solução, porém só retorna uma solução ótima para o problema e caso houver mais soluções, todas as demais são descartadas.
  
## Conclusões
  
  Foi divertido concluir cada um dos desafios, acredito que o resultado final serviu para todos os fins propostos.
  
  O código final pode ser refatorado, simplificado, melhor definido a funções dos componentes e criado mais componentes genéricos.
  
  Agradeço por toda a experiência proporcionada pela Warren e Proway. 
