# Cardápio Medellín Bar — seed real

> Extraído de https://cardapiando.com/medellin-bar em 2026-06-14.
> ~110 itens, 21 categorias. Usar como seed do banco na demo.
> Hoje no Cardapiando: **só visualização** — sem foto, sem descrição, sem pedido, sem estoque.

## Bebidas Diversas
Água sem gás 5,00 · Água com gás 7,00 · H2O 8,00 · H2O limoneto 8,00 · Gatorade 8,00 · Água de coco 10,00 · Red Bull 20,00 · Monster Energy 18,00

## Refrigerante Lata
Coca-cola 8,50 · Guaraná 6,00 · Fanta laranja 6,00 · Fanta uva 6,00 · Sprite 6,00 · Coca-cola zero 8,00

## Suco
Laranja · Maracujá · Morango · Acerola · Cajá · Abacaxi · Abacaxi c/ hortelã — todos 13,00

## Cremes (500ml)
Cupuaçu · Maracujá · Cajá · Morango — todos 18,00

## Chopp e Cervejas
Chopp 300ml 12,00 · Original 600ml 16,00 · Stella 600ml 17,00 · Heineken 600ml 19,00 · Budweiser 600ml 13,00 · Antártica 600ml 13,00 · Spaten 600ml 14,00 · Cozumel 14,00 · Preparo 8,00

## Cerveja Longneck
Corona 13,00 · Heineken 13,00 · Stella P.G. 12,00 · Budweiser 10,00 · Ice 51 12,00 · Ice Smirnoff 15,00 · Heineken Zero 13,00

## Whisky Dose
Old Parr 25,00 · Jack Daniels Black 28,00 · Chivas 30,00 · Buchanans 30,00 · Johnnie Walker Red 22,00 · Red Label 22,00

## Whisky Garrafa
Old Parr 300,00 · Jack Daniels Black 300,00 · Chivas 290,00 · Buchanans 300,00 · Johnnie Walker Red 250,00 · Red Label 250,00

## Gin Dose
Tanqueray 24,00 · Bombay 25,00 · Beefeater 20,00

## Gin Garrafa
Tanqueray 190,00 · Bombay 180,00 · Beefeater 185,00

## Tequila
Dose: Jose Cuervo Ouro 24,00 · Velho Barreiro 6,00 · 51 6,00 — Garrafa: Jose Cuervo Ouro 260,00

## Licores
Dose: Campari 20,00 · Cointreau 20,00 · Jägermeister 20,00 · Licor 43 25,00
Garrafa: Campari 150,00 · Cointreau 220,00 · Jägermeister 220,00 · Licor 43 250,00

## Espumante
Chandon Brut Rosé 170,00 · Casa Perini Moscatel 130,00

## Vinho
Casal Garcia 160,00

## Combo (garrafa + mixers)
Old Parr 400,00 · Chivas 390,00 · Jack Daniels Black 400,00 · Buchanans 400,00 · Red Label 360,00
(cada um: 4 Red Bull + 3 água de coco)

## Drinks
Caipiroska 32,00 · Gin Tônica 30,00 · Gin Frutas 35,00 · Negroni 31,00 · Aperol Spritz 35,00 · Caipirinha 20,00 · Caipifruta 35,00 · Gin Tropical 35,00

## Petisco
Batata frita simples 500g 30,00 · Batata frita c/ calabresa 500g 50,00 · Filé de tilápia 500g 65,00 · Calabresa acebolada 500g 35,00 · Frango a passarinho 500g 35,00 · Mandioca frita 500g 25,00 · Carne na chapa c/ mandioca 500g 85,00 · Panceta c/ mandioca 500g 65,00 · Frango a passarinho 1kg 60,00 · Caranha simples 500g 49,00 · Caranha 1kg simples 90,00 · Caranha 1kg completa 120,00 · Costela de porco 500g 55,00 · Batata frita c/ bacon e cheddar 55,00 · Costela suína c/ mandioca 500g 55,00 · Asa tulipa c/ batata 500g 50,00

## Guarnições
Arroz 10,00 · Feijão tropeiro 10,00 · Mandioca 8,00 · Vinagrete 8,00

## Guloseimas
Halls 4,00 · Tridente 4,00

---

### Observações de modelagem (importam pro sistema)

- **Dose vs Garrafa** é o nó do estoque: 1 garrafa de whisky = N doses. Baixa de estoque tem que tratar "garrafa aberta" → consumo por dose. Sem isso o estoque de destilado nunca bate.
- **Combo** = item composto (garrafa + mixers). Vender combo baixa 1 whisky + 4 Red Bull + 3 água de coco. Modelar como "produto composto" (ficha técnica).
- **Petisco por peso (500g/1kg)**: mesmo produto, tamanhos diferentes = variações do item, não itens separados.
- Categorias já vêm prontas pra virar as seções do cardápio digital + agrupamento da comanda.
