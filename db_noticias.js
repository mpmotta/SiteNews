// Este arquivo simula seu banco de dados.
// Os dados estão ordenados do MAIS NOVO (id: 1) para o MAIS ANTIGO.

async function getMockNoticias() {
    return [
        {
            id: 1,
            titulo: "Governo anuncia novo pacote de medidas econômicas",
            noticia: "O ministério da economia detalhou hoje o novo pacote de medidas que visa estimular o crescimento.\n\nEspecialistas analisam o impacto das propostas no mercado financeiro e no dia a dia da população. A bolsa de valores reagiu positivamente nas primeiras horas do pregão.",
            imagem: "governo.avif",
            categoria: "Política",
            data_postagem: "2025-11-14",
            quem_postou: "Ana Pereira"
        },
        {
            id: 2,
            titulo: "Final do campeonato de futebol é decidida nos pênaltis",
            noticia: "Em um jogo emocionante, o time da casa levou a melhor na disputa de pênaltis após um empate de 2 a 2 no tempo regulamentar.\n\nO goleiro foi o herói da partida, defendendo duas cobranças.",
            imagem: "penaltis.webp",
            categoria: "Esportes",
            data_postagem: "2025-11-13",
            quem_postou: "Bruno Costa"
        },
        {
            id: 3,
            titulo: "Nova série de ficção científica estreia com recorde de audiência",
            noticia: "Aguardada pelos fãs, a nova superprodução do serviço de streaming 'SpaceFlix' quebrou recordes de audiência em seu primeiro fim de semana.\n\nA trama envolve viagens intergalácticas e futuros distópicos.",
            imagem: "fundacao.jpg",
            categoria: "Entretenimento",
            data_postagem: "2025-11-12",
            quem_postou: "Carla Dias"
        },
        {
            id: 4,
            titulo: "Cúpula do G20 discute mudanças climáticas em Berlim",
            noticia: "Líderes das maiores economias do mundo se reúnem na Alemanha para discutir metas de redução de emissão de carbono.\n\O acordo busca limitar o aquecimento global a 1.5°C.",
            imagem: "cupulaG20.webp",
            categoria: "Mundo",
            data_postagem: "2025-11-11",
            quem_postou: "Redação"
        },
        {
            id: 5,
            titulo: "Festival de gastronomia local atrai milhares em São Paulo",
            noticia: "O evento 'Sabores da Terra' reuniu chefs renomados e produtores locais no Parque Ibirapuera. \n\O público pôde experimentar pratos típicos com um toque de modernidade.",
            imagem: "gastronomia.webp",
            categoria: "Variedades",
            data_postagem: "2025-11-10",
            quem_postou: "Fernanda Lima"
        },
        {
            id: 6,
            titulo: "Câmara aprova projeto de lei sobre inteligência artificial",
            noticia: "O plenário votou hoje o marco regulatório para o uso de inteligência artificial no país. O texto segue agora para sanção presidencial.",
            imagem: "projeto-lei.jpg",
            categoria: "Política",
            data_postagem: "2025-11-09",
            quem_postou: "Ana Pereira"
        },
        {
            id: 7,
            titulo: "Atleta brasileira quebra recorde mundial nos 100m rasos",
            noticia: "Uma performance histórica marcou o campeonato mundial de atletismo. A velocista completou a prova em 10.57 segundos.",
            imagem: "atleta.avif",
            categoria: "Esportes",
            data_postagem: "2025-11-08",
            quem_postou: "Bruno Costa"
        },
		{
        "id": 8,
        "titulo": "Reforma Tributária é promulgada com alterações no texto final",
        "noticia": "Após meses de debate, a emenda constitucional da Reforma Tributária foi promulgada. \n\O texto final incluiu mudanças de última hora, com foco na simplificação do sistema de impostos e na manutenção de benefícios fiscais para setores específicos.",
        "imagem": "reforma_tributaria.png",
        "categoria": "Política",
        "data_postagem": "2025-11-16",
        "quem_postou": "Ana Pereira"
    },
    {
        "id": 9,
        "titulo": "Ministro da Saúde anuncia mutirão nacional de vacinação",
        "noticia": "O Ministério da Saúde lançou a campanha 'Vacina Mais Brasil', um esforço concentrado para atualizar a caderneta de vacinação da população.\n\O foco inicial é em áreas com baixa cobertura vacinal e doenças sazonais.",
        "imagem": "vacina.jpg",
        "categoria": "Política",
        "data_postagem": "2025-11-14",
        "quem_postou": "Redação"
    },
    {
        "id": 10,
        "titulo": "Senado aprova indicação de novo ministro para o STF",
        "noticia": "Em votação apertada, o plenário do Senado Federal aprovou o nome do jurista indicado para a vaga de ministro no Supremo Tribunal Federal. \n\A sabatina durou mais de 10 horas e gerou grande expectativa na comunidade jurídica.",
        "imagem": "stf_indicacao.webp",
        "categoria": "Política",
        "data_postagem": "2025-11-12",
        "quem_postou": "Ana Pereira"
    },
    {
        "id": 11,
        "titulo": "Governadores pedem mais recursos federais para segurança pública",
        "noticia": "Durante encontro em Brasília, chefes de executivos estaduais solicitaram um aumento no repasse de verbas para o combate ao crime organizado e melhoria de equipamentos. \n\O tema será pauta de reunião com o presidente na próxima semana.",
        "imagem": "governadores.webp",
        "categoria": "Política",
        "data_postagem": "2025-11-09",
        "quem_postou": "Redação"
    },
    {
        "id": 12,
        "titulo": "PEC do teto de gastos entra em nova rodada de negociação na Câmara",
        "noticia": "Deputados retomam as discussões sobre a Proposta de Emenda à Constituição que altera as regras fiscais do país. \n\A principal divergência está nos gatilhos para o descumprimento do teto e a exclusão de despesas essenciais.",
        "imagem": "pec.jpg",
        "categoria": "Política",
        "data_postagem": "2025-11-04",
        "quem_postou": "Ana Pereira"
    },
    {
        "id": 13,
        "titulo": "Pesquisa aponta aumento da confiança do empresariado no país",
        "noticia": "Um novo levantamento divulgado pelo Instituto Nacional de Estatísticas (INE) mostra que a confiança dos empresários atingiu o maior patamar em dois anos. \n\O setor de serviços é o mais otimista, seguido pela indústria.",
        "imagem": "empresario.webp",
        "categoria": "Política",
        "data_postagem": "2025-10-30",
        "quem_postou": "Ana Pereira"
    },
    {
        "id": 14,
        "titulo": "Debate sobre regulamentação de mídias sociais domina o Congresso",
        "noticia": "O Projeto de Lei que visa regular o conteúdo e a responsabilidade das plataformas digitais está em discussão acalorada. \n\Especialistas e representantes das empresas participam das audiências públicas.",
        "imagem": "midia_social.jpeg",
        "categoria": "Política",
        "data_postagem": "2025-10-25",
        "quem_postou": "Redação"
    },
    {
        "id": 15,
        "titulo": "Comissão aprova projeto de incentivo à energia renovável",
        "noticia": "A Comissão de Meio Ambiente e Desenvolvimento Sustentável deu sinal verde para a proposta que oferece isenção fiscal para empresas que investirem em energia solar e eólica. \n\A expectativa é atrair R$ 50 bilhões em investimentos.",
        "imagem": "energia_renovavel.jpg",
        "categoria": "Política",
        "data_postagem": "2025-10-18",
        "quem_postou": "Ana Pereira"
    },
    {
        "id": 16,
        "titulo": "Prefeituras alertam para crise hídrica e pedem medidas urgentes",
        "noticia": "Em diversas regiões, a falta de chuvas tem impactado o abastecimento de água. \n\O governo federal prometeu enviar recursos para projetos de captação e dessalinização.",
        "imagem": "crise_hidrica.jpg",
        "categoria": "Política",
        "data_postagem": "2025-10-10",
        "quem_postou": "Redação"
    },
    {
        "id": 17,
        "titulo": "Bancada ruralista articula apoio para mudança no Código Florestal",
        "noticia": "Um grupo de parlamentares da bancada ruralista busca votos para aprovar a flexibilização de regras ambientais em áreas de preservação permanente. \n\Organizações não-governamentais criticam a medida e alertam para o desmatamento.",
        "imagem": "codigo_florestal.webp",
        "categoria": "Política",
        "data_postagem": "2025-10-01",
        "quem_postou": "Ana Pereira"
    },
    {
        "id": 18,
        "titulo": "Max Verstappen vence GP de Fórmula 1 na Itália",
        "noticia": "Em uma corrida eletrizante no circuito de Monza, o  piloto da equipe Red Bull conquistou sua terceira vitória na temporada. \n\Ele dedicou a vitória à sua família e à torcida brasileira.",
        "imagem": "f1_italia.webp",
        "categoria": "Esportes",
        "data_postagem": "2025-11-16",
        "quem_postou": "Bruno Costa"
    },
    {
        "id": 19,
        "titulo": "Praia Clube é campeão do Sul-Americano de vôlei feminino",
        "noticia": "Clube brasileiro disputou sua sétima final consecutiva e não deu chances às adversárias peruanas na decisão. \n O Praia Clube é campeão do Sul-Americano de Clubes de vôlei feminino 2025. O time de Uberlândia bateu o Alianza Lima, do Peru, na grande final por 3 a 0, e agora é tricampeão da competição internacional.\n O time brasileiro chegou à grande decisão após bater o rival Minas por 3 a 2 na última segunda-feira (10), e não deu chances ao time do Peru, vencendo com parciais de 25/15, 25/12 e 25/19.",
        "imagem": "volei_campeao.avif",
        "categoria": "Esportes",
        "data_postagem": "2025-11-15",
        "quem_postou": "Bruno Costa"
    },
    {
        "id": 20,
        "titulo": "Recordes e emoção marcam o Ironman 70.3 de Florianópolis",
        "noticia": "Uruguaio Federico Scarabino e brasileira Djenyfer Arnold fizeram tempo histórico na etapa catarinense. \n Aconteceu neste domingo, 26, na Praia dos Ingleses, em Florianópolis (SC), o Ironman 70.3. O desafio, que consiste em 1,9 km de natação, 90 km de ciclismo e 21,1 km de corrida, reuniu 1.800 atletas entre profissionais e amadores. \n Na elite masculina, o vencedor foi o uruguaio Federico Scarabino. Ele concluiu todo o trajeto em 3h35, novo recorde do percurso catarinense, e foi seguido pelo argentino Luciano Taconne com 3h36. O brasileiro Fernando Toldi foi o terceiro com o tempo de 3h39.",
        "imagem": "ironman_brasil.webp",
        "categoria": "Esportes",
        "data_postagem": "2025-11-10",
        "quem_postou": "Bruno Costa"
    },
    {
        "id": 21,
        "titulo": "Clubes de futebol negociam criação de liga independente",
        "noticia": "Os 20 principais clubes da Série A se reuniram para avançar na proposta de uma liga que gerencie os direitos de transmissão e o calendário dos jogos. \n\O objetivo é aumentar a receita e a competitividade do campeonato.",
        "imagem": "liga_futebol.jfif",
        "categoria": "Esportes",
        "data_postagem": "2025-11-06",
        "quem_postou": "Bruno Costa"
    },
    {
        "id": 22,
        "titulo": "Mayra Aguiar conquista ouro no Grand Slam de Tóquio de judô",
        "noticia": "A atleta da categoria peso leve superou a favorita japonesa na final e garantiu a medalha de ouro, um feito histórico para o judô nacional. \n\Ela deve subir no ranking mundial e se consolidar para a próxima Olimpíada.",
        "imagem": "judoca.webp",
        "categoria": "Esportes",
        "data_postagem": "2025-11-02",
        "quem_postou": "Bruno Costa"
    },
    {
        "id": 23,
        "titulo": "Astro da NBA vem ao Brasil para inaugurar quadra de basquete",
        "noticia": "Um dos principais jogadores da NBA aproveitará as férias da liga para visitar o Brasil pela primeira vez. Giannis Antetokounmpo, ala-pivô do Milwaukee Bucks, conhecerá o Rio de Janeiro, onde participará da inauguração de uma quadra de basquete, e São Paulo, onde assistirá a um jogo da seleção brasileira de futebol. \n Antetokounmpo desembarcará no Rio neste sábado, acompanhado da mãe e dos irmãos. Na segunda, ele estará na reabertura da quadra da Praça Claudio Coutinho, no Leblon. O espaço foi revitalizado pela casa de apostas Betano e terá a imagem do jogador gravada no solo em obra do artista Neto 78.",
        "imagem": "basquete.avif",
        "categoria": "Esportes",
        "data_postagem": "2025-10-29",
        "quem_postou": "Bruno Costa"
    },
    {
        "id": 24,
        "titulo": "Casal bate recorde e vence desafio de ciclismo com 282 km",
        "noticia": "Casal bate recorde e vence desafio de ciclismo com 282 km de percurso, em prova dedicada à Nossa Senhora Aparecida: 'Superação'. \n Flávia Mara e Éder Camargo participaram do 9º Desafio Caminho de Aparecida 2025. O percurso iniciou na cidade de Alfenas (MG), passando por 17 cidades e distritos, atravessando a Serra da Mantiqueira por estradas e trilhas até a finalização em Aparecida (SP). \n A gente iniciou às 22h, pedalamos por oito horas à noite e tem muita poeira, frio com sensação térmica abaixo de zero, além de passar a noite acordada, sendo que depois de mais de 220 quilômetros percorridos, ainda enfrentamos mais de 50 km de subida na Serra do Charco, trechos de trilhas e lugares impossíveis de pedalar, chamados de 'empurra bike', onde atravessamos até chegar no alto da Serra da Mantiqueira, contou.",
        "imagem": "mountain_bike.jpg",
        "categoria": "Esportes",
        "data_postagem": "2025-10-24",
        "quem_postou": "Bruno Costa"
    },
    {
        "id": 25,
        "titulo": "Novas regras do VAR geram polêmica no Campeonato Brasileiro",
        "noticia": "A Confederação Brasileira de Futebol (CBF) implementou mudanças na interpretação do impedimento e no tempo de revisão do Árbitro de Vídeo. \n\Os treinadores se dividem sobre o impacto das alterações nos jogos.",
        "imagem": "var_polemica.png",
        "categoria": "Esportes",
        "data_postagem": "2025-10-17",
        "quem_postou": "Bruno Costa"
    },
    {
        "id": 26,
        "titulo": "Gabriel Medina fala sobre rotina de skincare no surfe",
        "noticia": "Surfista tricampeão mundial e um dos maiores nomes do esporte brasileiro, Gabriel Medina vem mostrando que o cuidado com o corpo vai muito além da prancha. Em parceria com a marca Australian Gold, o atleta tem reforçado a importância da proteção solar e do skincare na rotina de quem vive em contato com o sol e o mar.",
        "imagem": "medina_surfe.webp",
        "categoria": "Esportes",
        "data_postagem": "2025-10-08",
        "quem_postou": "Bruno Costa"
    },
    {
        "id": 27,
        "titulo": "Comitê Olímpico anuncia corte de verbas para esportes de inverno",
        "noticia": "Devido a reajustes orçamentários, o Comitê Olímpico Brasileiro (COB) reduziu os investimentos em modalidades de inverno. \n\Atletas e federações expressaram preocupação com o futuro da preparação.",
        "imagem": "esportes_inverno.webp",
        "categoria": "Esportes",
        "data_postagem": "2025-10-03",
        "quem_postou": "Bruno Costa"
    },
    {
        "id": 28,
        "titulo": "Timothée Chalamet vem ao Brasil para divulgar novo filme na CCXP25",
        "noticia": "Sim, é isso mesmo que você leu: Timothée Chalamet vem ao Brasil! O ator queridinho de Hollywood vai participar da CCXP25, o maior festival de cultura pop do mundo, para divulgar o longa 'Marty Supreme', nova produção da A24 com distribuição da Diamond Films. A presença de Timothée marca a estreia das duas empresas no evento, e promete causar um verdadeiro alvoroço entre os fãs.",
        "imagem": "timothee-chalamet.jpg",
        "categoria": "Entretenimento",
        "data_postagem": "2025-11-16",
        "quem_postou": "Carla Dias"
    },
    {
        "id": 29,
        "titulo": "Luna revela bastidores da criação de álbum que venceu o Grammy Latino 2025",
        "noticia": "O álbum de Luedji Luna que venceu uma das categorias do Grammy Latino 2025 nasceu de uma fase intensa da vida da cantora. \n Campeão na categoria Melhor Álbum de Música Popular Brasileira/Música Afro Portuguesa Brasileira, Um Mar Pra Cada Um foi composto em 2024, assim como o disco Antes que a Terra Acabe. Mas ambos só foram lançados neste ano. \n O primeiro, com 11 músicas, traz Luedji Luna em um processo de autoconhecimento. Já o segundo, com mais 10 faixas, apresenta uma expressão da essência da baiana, que se recusa a reproduzir as mesmas receitas de sucesso.",
        "imagem": "luedji-luna.jpg",
        "categoria": "Entretenimento",
        "data_postagem": "2025-11-11",
        "quem_postou": "Carla Dias"
    },
    {
        "id": 30,
        "titulo": "Vitória ganha novo teatro com estreia de peça sobre Picasso",
        "noticia": "Espetáculo sobre Picasso revela conflitos entre arte e política durante a Segunda Guerra em nova casa de teatro em Vitória. Peça continua até o dia 7 de dezembro. \n Uma parceria entre o Círculo de Atores, o Grupo Tapa e o Grupo Beta de Teatro traz aos palcos capixabas a peça 'Um Picasso', do dramaturgo norte-americano Jeffrey Hatcher. A montagem apresenta um intenso duelo verbal entre o pintor espanhol e uma agente alemã durante a Segunda Guerra Mundial, revelando tensões entre arte, política e sobrevivência. Os personagens ganham vida nas interpretações de Patricia Pichamone e Sergio Mastropasqua. \n A peça inaugurou oficialmente o Espaço Cultural VIX no dia 15 de novembro, sábado, marcando o início de uma nova fase para a cena teatral de Vitória. A temporada segue até 7 de dezembro, com sessões às sextas e sábados, às 20h, e domingos, às 18h.",
        "imagem": "picasso-vitoria.jpg",
        "categoria": "Entretenimento",
        "data_postagem": "2025-11-07",
        "quem_postou": "Carla Dias"
    },
    {
        "id": 31,
        "titulo": "Os seis filmes pré-selecionados para representar o Brasil no Oscar 2026",
        "noticia": "A Academia Brasileira de Cinema anunciou nesta segunda-feira, 8 de setembro, a shortlist com os seis longas-metragens que irão concorrer para representar o Brasil no Oscar 2026. No dia 15 de setembro, próxima segunda-feira, a comissão de seleção escolherá o filme que disputará uma indicação à vaga na categoria Melhor Filme Internacional no Oscar.",
        "imagem": "fime_oscar.webp",
        "categoria": "Entretenimento",
        "data_postagem": "2025-11-03",
        "quem_postou": "Carla Dias"
    },
    {
        "id": 32,
        "titulo": "Stranger Things terá retorno surpreendente de personagens esquecidas",
        "noticia": "Ao longo das terceira e quarta temporadas, Barb foi mencionada pouquíssimas vezes, apenas para contextualizar a realidade cada vez mais bizarra de Hawkins. A naturalidade da forma que sua morte foi tratada gerou indignação em boa parte dos fãs da série, que ainda pedem justiça pela personagem, incluindo a explicação do motivo de ela ter morrido, e Will (Noah Shcnapp) não. \n Ao que tudo indica, a quinta temporada fará justiça por Barb, já que ela voltará a aparecer —na verdade, seu corpo. A revista Times revelou que, em uma visita ao set de gravação, viu o cadáver dela coberto de videiras pretas e com um grande corte no pescoço, indicando que o final da série revisitará sua morte e, possivelmente, dará uma explicação.",
        "imagem": "netflix_serie.webp",
        "categoria": "Entretenimento",
        "data_postagem": "2025-10-31",
        "quem_postou": "Carla Dias"
    },
    {
        "id": 33,
        "titulo": "Circoloco: conheça a festa de música eletrônica que Dua Lipa foi após show",
        "noticia": "Depois de realizar um show no Estádio MorumBIS, em São Paulo, neste sábado, a cantora Dua Lipa continuou a noite em uma festa de música eletrônica no Autódromo Capuava, em Indaiatuba, a quase 100 km da capital. \n O evento, chamado Circoloco, nasceu em 1999 no famoso clube de Ibiza, na Espanha, DC-10. Com o tempo, se transformou em uma das festas mais badaladas do gênero pelo mundo, com edições em lugares como Nova Iorque, Tóquio, Milão, Londres e Miami.\n Segundo os organizadores da edição no Brasil, o Circoloco é “palco para gerações de clubbers, DJs e artistas visuais que moldaram a cena eletrônica”. “Sua identidade crua, intensa e inovadora transcende fronteiras e faz da label um verdadeiro ícone cultural.",
        "imagem": "festival_musica.avif",
        "categoria": "Entretenimento",
        "data_postagem": "2025-10-26",
        "quem_postou": "Carla Dias"
    },
    {
        "id": 34,
        "titulo": "Três Graças: veja quem está no elenco da próxima novela das 9 ",
        "noticia": "O elenco de Três Graças, próxima novela das 9, segue gravando a todo vapor as cenas do folhetim criado e escrito por Aguinaldo Silva, Virgílio Silva e Zé Dassilva com direção artística de Luiz Henrique Rios. \n Após encerrar a primeira fase dos trabalhos em São Paulo, a equipe tem batido ponto nos Estúdios Globo para rodar sequências do folhetim que vai assumir a vaga de Vale Tudo. \n A trama, que mistura drama, tragédia, romance, mistério e toques de humor, vai contar a história de uma mulher, filha e mãe, inconformada com a injustiça diante das maldades que assolam sua comunidade e sua família, numa São Paulo que abriga milhões de brasileiras como ela..",
        "imagem": "novela_globo.jpg",
        "categoria": "Entretenimento",
        "data_postagem": "2025-10-22",
        "quem_postou": "Carla Dias"
    },
    {
        "id": 35,
        "titulo": "Museu inaugura exposição sobre Funk em São Paulo",
        "noticia": "O Museu da Língua Portuguesa em São Paulo inaugura neste sábado (15) a exposição Funk: um grito de ousadia e liberdade, que amplia o funk para além do som e resgata as origens negra e periférica do movimento. Depois de passar pelo Museu de Arte do Rio, a mostra apresenta obras inéditas relacionadas ao funk em São Paulo. \n Dos bailes Charme no Rio de Janeiro ao passinho do Romano na zona leste de São Paulo: 473 obras entre colagens, telas, fotografias, vídeos e figurinos destacam a influência do funk na moda, na linguagem e na cultura urbana. \n A Renata Prado, pesquisadora da cultura funk e das relações étnico-raciais e uma das curadoras da exposição, fala sobre a importância de o funk estar dentro do espaço de um museu. \n É fundamental para a gente buscar o reconhecimento institucional da cultura negra e periférica que atualmente está sendo perseguida. Então, acho que é muito importante a gente entender o funk no estado de São Paulo e no Brasil inteiro, essa cultura segue sendo perseguida. Então, ter uma exposição de funk no Museu da Língua Portuguesa é um avanço político-cultural dentro das estruturas institucionais.",
        "imagem": "museu_funk.webp",
        "categoria": "Entretenimento",
        "data_postagem": "2025-10-19",
        "quem_postou": "Carla Dias"
    },
    {
        "id": 36,
        "titulo": "Game Dev Brasil, seriado sobre jogos eletrônicos, estreia na TV Brasil",
        "noticia": "A TV Brasil lança uma nova atração semanal com a estreia da série documental Game Dev Brasil, produção independente sobre jogos eletrônicos, nesta quinta-feira (25), às 23h. Com dez programas de 26 minutos, a obra ainda inédita na telinha apresenta o universo dos desenvolvedores de games do país. \n O seriado revela as principais facetas desta indústria que está na vanguarda da interatividade audiovisual. O conteúdo independente mostra o ciclo desse mercado ao destacar não só o trabalho de grandes empresas como modelos de negócio liderados por profissionais autônomos. \n A proposta é traçar um panorama sobre o segmento que movimenta milhões e envolve parcerias internacionais. A série acompanha desenvolvedores independentes que fazem tudo sozinhos em seus computadores pessoais com o desejo de um dia transformar os produtos em sua fonte de renda principal.",
        "imagem": "videogame_br.webp",
        "categoria": "Entretenimento",
        "data_postagem": "2025-10-13",
        "quem_postou": "Carla Dias"
    },
    {
        "id": 37,
        "titulo": "David Coverdale do Whitesnake, anuncia sua aposentadoria",
        "noticia": "David Coverdale, 74, vocalista da banda de rock Whitesnake e ex-vocalista do grupo Deep Purple, anunciou nesta quinta (13) que irá se aposentar da música. Ele ganhou destaque internacional ao substituir o cantor Ian Gillan no Deep Purple em 1973. Gillian retornaria ao grupo 11 anos mais tarde. Coverdale agradeceu aos fãs e brincou com a decisão num vídeo divulgado no YouTube de sua banda. \n Após mais de 50 anos de uma jornada incrível, está claro para mim que chegou o momento de pendurar meus sapatos de rock n’ roll e minhas calças apertadas. Amo vocês profundamente. Agradeço a todos que me ajudaram e me apoiaram nessa jornada. É hora de aproveitar a aposentadoria. Adeus, afirmou o artista na publicação, que se encerra ao som de Fare Thee Well, da Whitesnake.",
        "imagem": "coverdale.jpg",
        "categoria": "Entretenimento",
        "data_postagem": "2025-10-05",
        "quem_postou": "Carla Dias"
    },
    {
        "id": 38,
        "titulo": "Estudo aponta café como aliado na prevenção de doenças crônicas",
        "noticia": "Pesquisadores da Universidade de Oxford divulgaram um estudo que associa o consumo moderado de café à redução do risco de diabetes tipo 2 e doenças cardiovasculares. \n\O segredo estaria nos antioxidantes presentes no grão.",
        "imagem": "cafe_saude.avif",
        "categoria": "Variedades",
        "data_postagem": "2025-11-16",
        "quem_postou": "Fernanda Lima"
    },
    {
        "id": 39,
        "titulo": "Feira de adoção de animais em Copacabana bate recorde de participantes",
        "noticia": "Mais de 150 cães e gatos foram adotados no evento 'Amigo de Quatro Patas' realizado no último domingo. \n\Veterinários e ONGs alertam para a importância da posse responsável e da castração.",
        "imagem": "adocao_pet.jpg",
        "categoria": "Variedades",
        "data_postagem": "2025-11-13",
        "quem_postou": "Fernanda Lima"
    },
    {
        "id": 40,
        "titulo": "Tendência de 'Minicasas' ganha força nas grandes cidades",
        "noticia": "O conceito de moradias compactas e multifuncionais está atraindo jovens e casais que buscam um estilo de vida minimalista. \n\A tecnologia e o design inteligente são essenciais para otimizar o espaço.",
        "imagem": "mini-casa.jpg",
        "categoria": "Variedades",
        "data_postagem": "2025-11-08",
        "quem_postou": "Fernanda Lima"
    },
    {
        "id": 41,
        "titulo": "Chef renomado lança livro com receitas sustentáveis e orgânicas",
        "noticia": "O premiado Chef Roberto Silva apresenta 'Cozinha Consciente', um guia com pratos que utilizam ingredientes de pequenos produtores e aproveitam integralmente os alimentos. \n\O livro já está entre os mais vendidos.",
        "imagem": "livro-chef.jpg",
        "categoria": "Variedades",
        "data_postagem": "2025-11-05",
        "quem_postou": "Fernanda Lima"
    },
    {
        "id": 42,
        "titulo": "Descoberto novo sítio arqueológico na Serra da Capivara",
        "noticia": "Pesquisadores anunciaram a descoberta de pinturas rupestres datadas de 15 mil anos na região do Piauí. \n\O achado pode reescrever parte da história da ocupação humana nas Américas.",
        "imagem": "arqueologia.jpg",
        "categoria": "Variedades",
        "data_postagem": "2025-10-30",
        "quem_postou": "Redação"
    },
    {
        "id": 43,
        "titulo": "Moda 'second hand' (brechós) é o novo luxo sustentável",
        "noticia": "A compra e venda de roupas de segunda mão está se popularizando, impulsionada pela conscientização ambiental e pelo desejo de peças exclusivas. \n\Grandes marcas de luxo já investem em plataformas de revenda.",
        "imagem": "moda_brecho.jpg",
        "categoria": "Variedades",
        "data_postagem": "2025-10-27",
        "quem_postou": "Fernanda Lima"
    },
    {
        "id": 44,
        "titulo": "Especialistas alertam para o aumento do 'Burnout' digital",
        "noticia": "O excesso de conectividade e o trabalho remoto têm levado a um aumento de casos de esgotamento mental e estresse. \n\Recomendações incluem 'detox' digital e o estabelecimento de limites claros entre vida pessoal e profissional.",
        "imagem": "burnout.webp",
        "categoria": "Variedades",
        "data_postagem": "2025-10-23",
        "quem_postou": "Fernanda Lima"
    },
    {
        "id": 45,
        "titulo": "Aplicativos de meditação e bem-estar crescem 40% no Brasil",
        "noticia": "A busca por equilíbrio e saúde mental impulsionou o mercado de apps que oferecem meditação guiada, exercícios de respiração e monitoramento de sono. \n\A faixa etária de 25 a 35 anos é a que mais utiliza as ferramentas.",
        "imagem": "meditacao_app.webp",
        "categoria": "Variedades",
        "data_postagem": "2025-10-15",
        "quem_postou": "Fernanda Lima"
    },
    {
        "id": 46,
        "titulo": "Novas câmeras fotográficas resgatam o charme das fotos",
        "noticia": "A tecnologia 'instant-print' está de volta, com novos modelos de câmeras que combinam o visual retrô com recursos digitais. \n\O público jovem adere à moda em busca de memórias físicas e tangíveis.",
        "imagem": "camera-instantanea.webp",
        "categoria": "Variedades",
        "data_postagem": "2025-10-09",
        "quem_postou": "Fernanda Lima"
    },
    {
        "id": 47,
        "titulo": "Pesquisadores criam bateria que carrega em segundos",
        "noticia": "Um grupo de cientistas brasileiros desenvolveu um protótipo de bateria de estado sólido capaz de carregar totalmente em menos de 1 minuto. \n\A invenção pode revolucionar o mercado de carros elétricos e celulares.",
        "imagem": "bateria.webp",
        "categoria": "Variedades",
        "data_postagem": "2025-10-02",
        "quem_postou": "Redação"
    },
    {
        "id": 48,
        "titulo": "Crise humanitária no Iêmen atinge novo pico de refugiados",
        "noticia": "A ONU alertou para o agravamento da situação de milhões de pessoas que enfrentam fome e falta de acesso à água potável no país. \n\Organizações internacionais pedem um corredor humanitário permanente.",
        "imagem": "refugiados_iemen.jpg",
        "categoria": "Mundo",
        "data_postagem": "2025-11-16",
        "quem_postou": "Redação"
    },
    {
        "id": 49,
        "titulo": "EUA e China assinam acordo histórico sobre tecnologia 6G",
        "noticia": "As duas maiores potências mundiais fecharam um pacto de cooperação para definir padrões globais da próxima geração de internet móvel. \n\O acordo busca evitar novas 'guerras frias' tecnológicas.",
        "imagem": "eua_china_6g.jpg",
        "categoria": "Mundo",
        "data_postagem": "2025-11-14",
        "quem_postou": "Redação"
    },
    {
        "id": 50,
        "titulo": "Terremoto de magnitude 7.1 atinge a Indonésia; alerta de tsunami",
        "noticia": "Um forte abalo sísmico foi registrado na região de Java, causando danos estruturais e acionando o alerta de tsunami para cidades costeiras. \n\As autoridades locais iniciaram a evacuação das áreas de risco.",
        "imagem": "terremoto_indonesia.webp",
        "categoria": "Mundo",
        "data_postagem": "2025-11-10",
        "quem_postou": "Redação"
    },
    {
        "id": 51,
        "titulo": "União Europeia impõe novas sanções contra regime da Bielorrússia",
        "noticia": "O bloco europeu ampliou as restrições econômicas e de viagem contra o governo de Minsk em resposta à repressão de manifestantes pró-democracia. \n\O presidente bielorrusso classificou as sanções como 'ilegais'.",
        "imagem": "ue_sancoes.jpg",
        "categoria": "Mundo",
        "data_postagem": "2025-11-06",
        "quem_postou": "Redação"
    },
    {
        "id": 52,
        "titulo": "Cientistas da NASA confirmam oceano em lua de Saturno",
        "noticia": "A missão 'Cassini II' enviou dados que comprovam a existência de um vasto oceano subterrâneo na lua Encélado, aumentando as chances de vida extraterrestre. \n\O próximo passo é enviar uma sonda de perfuração.",
        "imagem": "oceano-encelado-ilustra.jpg",
        "categoria": "Mundo",
        "data_postagem": "2025-11-01",
        "quem_postou": "Redação"
    },
    {
        "id": 53,
        "titulo": "Suíça alerta para ataques cibernéticos e desinformação antes de cúpula sobre paz",
        "noticia": "A Suíça tem registrado um aumento nos ataques cibernéticos e na desinformação durante a preparação para uma cúpula neste fim de semana que visa criar um caminho para a paz na Ucrânia, disse o governo suíço nesta segunda-feira (10). \n Noventa Estados e organizações se registraram para participar das discussões que serão realizadas em um resort perto da cidade de Lucerna, de 15 a 16 de junho, cerca de metade deles da América do Sul, Ásia, África e Oriente Médio, afirmou a Suíça. \A Rússia não foi convidada, mas o governo suíço disse que as conversas tinham como objetivo 'definir conjuntamente um roteiro' sobre como envolver tanto a Rússia quanto a Ucrânia em um futuro processo de paz.",
        "imagem": "ataques.webp",
        "categoria": "Mundo",
        "data_postagem": "2025-10-28",
        "quem_postou": "Redação"
    },
    {
        "id": 54,
        "titulo": "Canadá vai investir US$ 3,9 mi no futebol feminino profissional",
        "noticia": "O governo do Canadá anunciou, no sábado (15.nov.2025), investimento de até US$ 3,9 milhões para apoiar o desenvolvimento da NSL (Northern Super League), liga profissional de futebol feminino criada em 2025. A medida foi divulgada momentos antes da final inaugural do torneio realizada no BMO Field, em Toronto. O Vancouver Rise derrotou o AFC Toronto por 2 a 1 e conquistou o título. \n Segundo Ottawa, o aporte busca promover melhorias estruturais em instalações utilizadas pelos 6 clubes da liga, incluindo estádios e centros de treinamento. O governo também discute formas de apoiar infraestruturas comunitárias que fortaleçam o crescimento regional e a expansão do futebol feminino no país. As informações são do jornal CBC.",
        "imagem": "canada-futebol.jpg",
        "categoria": "Mundo",
        "data_postagem": "2025-11-15",
        "quem_postou": "Redação"
    },
    {
        "id": 55,
        "titulo": "Cúpula do Clima da África pede fundo global para adaptação",
        "noticia": "Líderes de 54 nações africanas se reuniram em Nairobi para cobrar dos países ricos o cumprimento das promessas de financiamento climático. \n\O continente é o mais afetado pelas secas e inundações.",
        "imagem": "cupula_africa.avif",
        "categoria": "Mundo",
        "data_postagem": "2025-10-14",
        "quem_postou": "Redação"
    },
    {
        "id": 56,
        "titulo": "Coreia do Sul e Japão retomam exercícios militares conjuntos",
        "noticia": "Os dois países realizaram manobras navais e aéreas em resposta a tensões com a Coreia do Norte. \n\A aliança de defesa regional foi reforçada com a presença de navios de guerra dos EUA.",
        "imagem": "coreia.webp",
        "categoria": "Mundo",
        "data_postagem": "2025-10-07",
        "quem_postou": "Redação"
    },
    {
        "id": 57,
        "titulo": "Índia lança satélite de observação terrestre com sucesso",
        "noticia": "A agência espacial indiana (ISRO) colocou em órbita um novo satélite para monitoramento de recursos naturais e previsão do tempo. \n\O projeto faz parte do plano de expansão da frota de satélites do país.",
        "imagem": "india_satelite.jpg",
        "categoria": "Mundo",
        "data_postagem": "2025-10-01",
        "quem_postou": "Redação"
    }
    ];
}