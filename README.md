# Ferias

Para utilizar o pacote "ferias" em seu projeto node, siga os passos:

## Instalação
Faça o clone do repositório, acesse a pasta clonada e então digite:
```bash
npm install
npm run build
npm link .
```

## Uso

Importe o pacote:

Se o seu projeto está configurado para utilizar módulos ES6:

```js
import {Vacation} from "ferias";
```

Caso esteja utilizando a sintaxe padrão do node, com require:

```js
const Vacation = require("ferias").Vacation;
```

Depois de fazer o import da biblioteca, é preciso instanciar o objeto:

```js
const ferias = new Vacation();
ferias.startVacationPeriod({
  initial_date: "2023-06-23",
  type: "integral",
  number_of_days: 30,
  selling_days: 0
})
```
