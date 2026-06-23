# Endereçamento de Palmas — a dupla nomenclatura (e a fórmula de conversão)

> Pesquisa 05/06/2026. Palmas tem DOIS sistemas de endereço pra mesma quadra, e a
> população usa os dois. O Mapbox só entende o "novo" (numérico). Pra busca de
> endereço funcionar de verdade, a gente precisa converter ARSE↔numérico.
> **Isso é vantagem local:** nosso app entende as duas formas; Mapbox cru não.

## Os dois sistemas
- **Antigo (cartório/original):** sigla + número → **ARSE 122**, ARSO 101, ARNE 31, ARNO 12.
  - AR = Área Residencial; AC = Área Comercial. S=Sul, N=Norte. E=Leste(Sudeste/Nordeste), O=Oeste.
- **Novo (Correios/postal):** número + Norte/Sul → **1206 Sul**, 1003 Sul, 304 Norte.
  - Norte/Sul = acima/abaixo da Av. JK. Pares a leste, ímpares a oeste da Av. Teotônio Segurado.

## A FÓRMULA (cracked a partir de 9 equivalências reais)
Para `AR(S|N)(E|O) NNN`:
- `band` = S → "Sul", N → "Norte"
- `lado` = E → **2** (par, leste) · O → **1** (ímpar, oeste)
- separa o número: `resto` = tudo menos o último dígito · `d` = último dígito
- **novo = resto × 100 + (2 × d + lado)** → resultado = `"{novo} {band}"`

### Verificação (bate em todos):
| Antigo | Cálculo | Novo |
|---|---|---|
| ARSE 21 | 2·100+(2·1+2) | 204 Sul |
| ARSE 22 | 2·100+(2·2+2) | 206 Sul |
| ARSO 23 | 2·100+(2·3+1) | 207 Sul |
| ARSE 51 | 5·100+(2·1+2) | 504 Sul |
| ARSO 101 | 10·100+(2·1+1) | 1003 Sul |
| ARSO 102 | 10·100+(2·2+1) | 1005 Sul |
| ARSO 103 | 10·100+(2·3+1) | 1007 Sul |
| ARSE 122 | 12·100+(2·2+2) | 1206 Sul |
| ARSE 131 | 13·100+(2·1+2) | 1304 Sul |

## ⚠️ CONFLITO A RESOLVER (antes de shipar)
Eduardo (local) disse **"1304 Sul = ARSE 122"**. A fórmula/web diz **ARSE 122 = 1206** e **ARSE 131 = 1304**.
**Não shipar até confirmar** — se a fórmula estiver errada, encomenda vai pro lugar errado.
Conferir no mapa oficial: `http://geo.palmas.to.gov.br/mapas/` ou prefeitura `consultaCCI`.

## Como vai entrar no app (quando a fórmula for confirmada)
No `AddressAutocomplete`: detectar o padrão `AR(S|N)(E|O)\s*\d+` digitado → converter pelo fórmula → geocodar a forma numérica (+"Palmas TO") → mostrar sugestão. Manter a busca crua como fallback. Assim "ARSE 122" e "1206 Sul" funcionam os dois.
**Plano B se a fórmula tiver exceções:** tabela de correspondência (dado oficial da prefeitura/Correios) — mais trabalhoso, mas 100% preciso.

## Fontes
- rmi.com.br/noticias/desvendando-os-enderecos-em-palmas · soudepalmas.com.br (volta ARSE/ARSO) · conexaoto.com.br (Correios) · geo.palmas.to.gov.br/mapas
