# Proyecto con node.js

## Primeros pasos

Crear archivo:
```sh
index.js
```

Inicializar package.json:
```sh
npm init -y
```

Instalar express:
```sh
npm i express
```

No subir jamas la carpeta node modules:
```sh
.gitignore
```

## Iniciar servidor:

Alternativa 1:
```sh
node index.js
```

2 Iniciar servidor con observable:
```sh
node --watch index.js
```

3 nodemon: es observar y reiniciar el servidor
```sh
npm i -D nodemon
```

json
```sh
  "scripts": {
    "start": "node index.js",
    "watch": "node --watch index.js",
    "dev": "nodemon index.js"
  },
```