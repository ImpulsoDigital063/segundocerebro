# App de troca de roupa de bebê (Marko) · Eventos que o sistema grava desde o dia 1

> Escrito em 14/09/2026. Base da "plataforma que se retroalimenta" sem IA: o app registra o próprio uso e calcula tudo com consulta no Supabase, rodando de madrugada.
> Regra de ouro: **dado que não foi gravado não volta.** Evento que não for usado agora ainda assim é gravado.

---

## 6 regras da tabela de eventos

1. **Só inserção.** Evento nunca é editado nem apagado. Correção vira evento novo.
2. **Evento não é extrato de crédito.** O extrato (entrada e saída de crédito, com motivo) é financeiro, fica em tabela própria e é a fonte da verdade do saldo. Evento é pra aprender, extrato é pra prestar conta.
3. **Lista fechada de nomes.** O tipo do evento vem de uma lista fixa, nunca texto livre. Nome errado quebra a conta de meses.
4. **Guardar ID, não copiar cadastro.** O evento aponta pra mãe, peça e troca pelo ID. Só guarda no próprio evento o que muda com o tempo (nível no momento, cidade no momento, preço cotado).
5. **Volume alto entra agregado por dia.** Visualização de peça e abertura do app viram contagem diária, não uma linha por clique. É o que faz caber nos 500 MB do Supabase Free.
6. **Dado de bebê é dado de criança.** A LGPD (art. 14) pede consentimento específico de um dos pais. Minimizar: guardar **mês e ano** de nascimento, que já basta pra prever tamanho. Sem nome e sem foto do bebê.

**Campos comuns a todo evento:** id · tipo · mae_id · criado_em · cidade · detalhes (json com o específico de cada tipo).

---

## Conta e bebê

| Evento | Detalhes | Alimenta |
|---|---|---|
| `conta_criada` | bairro, origem (UTM, indicação, ponto parceiro, mutirão), indicada_por | de onde vêm as mães que ficam |
| `bebe_cadastrado` | mês e ano de nascimento, tamanho atual informado | aviso do próximo tamanho |
| `tamanho_atualizado` | de, para | previsão de tamanho aprendendo com as mães |
| `consentimento_registrado` | tipo (termos, dado do bebê, avisos), versão do texto | prova LGPD |

## Anúncio (oferta)

| Evento | Detalhes | Alimenta |
|---|---|---|
| `anuncio_criado` | tipo_peca, tamanho, nivel_escolhido, nivel_sugerido, eh_kit, qtd_pecas, entrega_aceita (presencial, ponto, envio) | estoque por tamanho e cidade |
| `anuncio_nivel_alterado` | de, para, origem (sugestão do app ou manual) | se a sugestão de nível funciona |
| `anuncio_favoritado` | — | procura antes do pedido |
| `anuncio_removido` | motivo (trocado, desistiu, moderação) | peça que nunca sai |
| `visualizacoes_do_dia` | anuncio_id, quantidade (agregado) | interesse × saída |

## Busca e procura (a demanda)

| Evento | Detalhes | Alimenta |
|---|---|---|
| `busca_realizada` | filtros (tipo, tamanho, nível, cidade), qtd_resultados | o que as mães procuram |
| `busca_sem_resultado` | mesmos filtros | **mapa dos buracos** e aviso "tem gente procurando isso" |
| `deslize` | anuncio_id, direção (quer ou passa) | ordem da busca e do modo Tinder |

## Troca

| Evento | Detalhes | Alimenta |
|---|---|---|
| `pedido_criado` | anuncio_id, creditos_reservados, modo (presencial, ponto, envio) | funil da troca |
| `pedido_aceito` | tempo até aceitar | agilidade de quem anuncia |
| `pedido_recusado` | motivo | atrito |
| `pedido_expirado` | quem não respondeu | reputação e prazo ideal |
| `encontro_marcado` | local (ponto parceiro ou público) | pontos mais usados |
| `troca_confirmada` | via (QR ou rastreio), dias_desde_anuncio, nivel, creditos_movidos | **tempo de prateleira** e valor que sai |
| `troca_cancelada` | quem cancelou, motivo | onde a troca morre |

## Envio (fase 2)

| Evento | Detalhes | Alimenta |
|---|---|---|
| `frete_cotado` | opções devolvidas, preço e prazo de cada | preço de frete por rota |
| `frete_escolhido` | transportadora, valor, prazo | mais barato × mais rápido |
| `etiqueta_comprada` | valor, transportadora | custo real |
| `pacote_postado` / `pacote_entregue` | data (vinda do rastreio) | prazo real × prometido |

## Qualidade

| Evento | Detalhes | Alimenta |
|---|---|---|
| `avaliacao_enviada` | nota, igual_a_foto, estado, pontualidade | **reputação**, que trava níveis altos |
| `reclamacao_aberta` | motivo, tem_foto | peça pior que o anunciado |
| `reclamacao_resolvida` | resultado (estorno, penalidade, sem razão) | quem exagera sempre |

## Crédito e dinheiro (espelho do funil, não substitui o extrato)

| Evento | Detalhes | Alimenta |
|---|---|---|
| `saldo_insuficiente` | quanto faltou, anuncio_id | **momento exato de oferecer pacote** |
| `pacotes_vistos` | de onde veio (saldo insuficiente, menu, aviso) | funil de compra |
| `pix_gerado` | pacote, valor | funil de compra |
| `pix_confirmado` | pacote, valor, provedor | receita |
| `pix_expirado` | pacote, valor | compra abandonada |

## Retorno da mãe

| Evento | Detalhes | Alimenta |
|---|---|---|
| `aviso_enviado` | tipo (próximo tamanho, procura pela sua peça, pedido), canal | o que traz de volta |
| `aviso_aberto` | tipo | o que funciona |
| `aberturas_do_dia` | quantidade (agregado) | mãe ativa × parada |
| `indicacao_enviada` / `indicacao_convertida` | canal | crescimento sem anúncio |

## Mutirão e pontos parceiros

| Evento | Detalhes | Alimenta |
|---|---|---|
| `sacola_recebida` | ponto_id, qtd_pecas estimada | produtividade do ponto |
| `sacola_anunciada` | ponto_id, qtd_anuncios, quem anunciou (equipe) | quanto do mutirão vira estoque |

---

## O que sai desses eventos (sem IA, só consulta)

| Métrica | De onde vem | Pra quê |
|---|---|---|
| **Tempo de prateleira** por tipo, tamanho, nível e cidade | `anuncio_criado` → `troca_confirmada` | sugerir nível na hora de anunciar |
| **Mapa dos buracos** | `busca_sem_resultado` × estoque ativo | onde fazer mutirão, quem avisar |
| **Taxa de confirmação** | `pedido_criado` → `troca_confirmada` | onde a troca morre |
| **Reputação** | `avaliacao_enviada` + `reclamacao_resolvida` | liberar ou travar níveis 4 e 5 |
| **Previsão de tamanho** | `bebe_cadastrado` + `tamanho_atualizado` | aviso do próximo tamanho |
| **Ordem da busca** | `deslize` + `troca_confirmada` | mostrar primeiro o que sai |
| **Gatilho de venda** | `saldo_insuficiente` → `pix_confirmado` | oferta de pacote na hora certa |
| **Origem que fica** | `conta_criada.origem` × trocas confirmadas | onde vale gastar com campanha |

**Arranque sem dado:** enquanto uma combinação tiver menos de ~20 trocas confirmadas, o app usa a tabela padrão de nível e não mostra média. Média de 3 trocas mente.
