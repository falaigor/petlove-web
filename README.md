<div align="center">
    <img src="https://github.com/falaigor/petlove-web/blob/main/src/images/logo-black.png?raw=true" />
    
</div>

# [Web] Petlove
![](https://img.shields.io/github/languages/count/falaigor/petlove-web?color=%23ffd666) 
![](https://img.shields.io/github/languages/top/falaigor/petlove-web?color=%23ffd666) 
![](https://img.shields.io/github/repo-size/falaigor/petlove-web?color=%23ffd666) 
![](https://img.shields.io/github/last-commit/falaigor/petlove-web?color=%23ffd666)
<br>

## Projeto

Petlove é uma aplicação que permite conectar pessoas e ONGs de cuidados animais de uma forma remota e segura.

## Índice
* [Screenshots](#screenshots)
* [Instalação](#installing)
  * [Configuração](#configuring)
      * [.env](#env)
      * [API](#api)
* [Uso](#usage)
  
# Screenshots
Click to expand.<br>
<img src="https://github.com/falaigor/petlove-web/blob/main/screenshot/landing.jpg" width="49%"/>
<img src="https://github.com/falaigor/petlove-web/blob/main/screenshot/map.jpg" width="49%"/>
<img src="https://github.com/falaigor/petlove-web/blob/main/screenshot/form.jpg" width="49%"/>
<img src="https://github.com/falaigor/petlove-web/blob/main/screenshot/ong.jpg" width="49%"/>

# Instalação
A instalçao é bem simples:
```
$ yarn
```
Or:
```
$ npm install
```
> Foi instalado e configurado o [`eslint`](https://eslint.org/) e [`prettier`](https://prettier.io/) para manter o código limpo e padronizado.

## Configuração
Configure suas variáveis de ambiente e lembre-se de iniciar a [API] (https://github.com/falaigor/petlove-api) antes de iniciar este aplicativo.

### .env
Neste arquivo você pode configurar a url da API. Renomeie o `.env.example` no diretório raiz para` .env` e então atualize com suas configurações.

[Mapbox](https://www.mapbox.com) foi usado o mapbox renderizador do mapa.

key|description|default
---|---|---
REACT_APP_MAPBOX_TOKEN|Token do MAPBOX|`Adiconar o token gerado`

### API
Inicie a [API] (https://github.com/falaigor/petlove-api) (consulte seu README para obter mais informações). Em caso de qualquer mudança no `port` ou` host` da API, lembre-se de atualizar o [`.env`] (# env) também.

# Uso
Para iniciar o aplicativo, execute:
```
$ yarn start
```
Or:
```
npm run start
```
