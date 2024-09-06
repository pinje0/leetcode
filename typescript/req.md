#### Setup

(Install local)

1. npm init -y
2. npm install typescript --save-dev
3. npx tsc --init

#### 2.Compiling

1. Bundle / Compile js to ts

```sh
npx tsc
```

1a. Watch mode

```sh
npx tsc -w
```

  <p>Puts the TypeScript compiler into watch mode, which means it will continuously recompile the files whenever changes are made</p>

1b. (Bash Terminal)

```bash
npx tsc && node bundle/index.js
```

  <p>Show the output through terminal</p>

1c. (Powershell Terminal)

```sh
npx tsc; if ($?) { node bundle/index.js }
```

  <p>Show the output through terminal</p>

<br/>

**Use Quokka Extension (For Vscode) for debugging**

```bash
ctrl + shift + p
```
