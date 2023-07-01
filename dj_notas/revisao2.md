# Revisão 02

## Pacotes que considero suspeitos ou inuteis, e os desativei por segurança da minha maquina

```json
"dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "web-vitals": "^2.1.4"
},
"devDependencies": {
    "reinstall-node-modules": "^2.0.0"
  }
```

para manter no histórico, coloquei eles no package.json em:

```json 
".__desable__dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "web-vitals": "^2.1.4"
},
".__desable__devDependencies": {
    "reinstall-node-modules": "^2.0.0"
  }
```

## Erro ao executar yarn start

Erro:

>    ```bash
>    yarn start
>    
>    Starting the development server...
>    
>    Error: error:0308010C:digital envelope routines::unsupported
>        at new Hash (node:internal/crypto/hash:71:19)
>        at Object.createHash (node:crypto:133:10)
>    at module.exports (C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\webpack\lib\util\createHash.   js:90:53)
>    at NormalModule._initBuildHash (C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\webpack\lib\NormalModule. js:401:16)
>    at handleParseError (C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\webpack\lib\NormalModule.    js:449:10)
>    at C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\webpack\lib\NormalModule.  js:481:5
>    at C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\webpack\lib\NormalModule.  js:342:12        
>    at C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\loader-runner\lib\LoaderRunne  r.js:373:3   
>    at iterateNormalLoaders (C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\loader-runner\lib\LoaderRunn er.js:214:10)
>    at iterateNormalLoaders (C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\loader-runner\lib\LoaderRunn er.js:221:10)
>    at C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\loader-runner\lib\LoaderRunne  r.js:236:3   
>    at runSyncOrAsync (C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\loader-runner\lib\LoaderRunn   er.js:130:11)
>    at iterateNormalLoaders (C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\loader-runner\lib\LoaderRunn er.js:232:2)
>    at Array.<anonymous> (C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\loader-runner\lib\LoaderRunn    er.js:205:4)
>    at Storage.finished (C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\enhanced-resolve\lib\CachedI nputFileSystem.js:55:16)
>    at C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\enhanced-resolve\lib\CachedIn  putFileSystem.js:91:9
>    C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\react-scripts\scripts\start.js:19
>    throw err;
>    ^
>    
>    Error: error:0308010C:digital envelope routines::unsupported
>        at new Hash (node:internal/crypto/hash:71:19)
>        at Object.createHash (node:crypto:133:10)
>    at module.exports (C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\webpack\lib\util\createHash.   js:90:53)
>    at NormalModule._initBuildHash (C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\webpack\lib\NormalModule. js:401:16)
>    at C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\webpack\lib\NormalModule.  js:433:10        
>    at C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\webpack\lib\NormalModule.  js:308:13        
>    at C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\loader-runner\lib\LoaderRunne  r.js:367:11  
>    at C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\loader-runner\lib\LoaderRunne  r.js:233:18  
>    at context.callback (C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\loader-runner\lib\LoaderRunn er.js:111:13)
>    at C:\LES\DjEdu28\projeto-de-outros\aprazamento\node_modules\react-scripts\node_modules\ba  bel-loader\lib\index.js:51:103 {
>    opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
>    library: 'digital envelope routines',
>    reason: 'unsupported',
>    code: 'ERR_OSSL_EVP_UNSUPPORTED'
>    }
>    
>    Node.js v18.16.0
>    error Command failed with exit code 1.
>    ```
>

Este erro acontece devido a uma incompatibilidade entre a versão do Node.js que você está usando e alguns pacotes que dependem de funcionalidades que foram descontinuadas em versões recentes do Node.js. A versão do Node.js que você está usando (Node.js v18.16.0) é incompatível com as rotinas de criptografia usadas por alguns pacotes, como o webpack neste caso.

Existem duas soluções principais para este problema:

  1. Reverter para uma versão mais antiga do Node.js. A versão 16 do Node.js é a versão LTS atual e é compatível com a maioria dos pacotes. Você pode fazer isso utilizando o gerenciador de versões do Node.js (nvm). Para Windows, você pode usar o nvm-windows stackoverflow.com.

  2. Habilitar o provedor OpenSSL legado. Isso pode ser feito configurando a variável de ambiente NODE_OPTIONS para incluir a opção --openssl-legacy-provider. No entanto, este método é menos recomendado, pois pode levar a problemas de segurança stackoverflow.com.

Eu fui além destas soluções triviais, e adicionei um script que ignora o OpenSSL, para que o react rode no node atualizado

Fiz isso pois

- não posso/quero baiar o nodejs 16 (por falta de espaço na minha maquina)
- o metodo 2 não seria compativel com a tua maquina e nem no servidor

o script é bem simples:

```json
    "dev": "react-scripts --openssl-legacy-provider start"
```

Para usar basta trocar o `yarn start` por `yarn dev` e o sistema vai ignorar o openssl

>
> No entanto, tenha em mente que esta solução pode deixar seu aplicativo vulnerável, pois você estará usando uma versão insegura do SSL.
>
> Portanto, a melhor solução seria reverter para uma versão mais antiga do Node.js (como a versão 16) que seja compatível com todos os pacotes que você está usando.
>

