# apidoc 사용방법


## Project tree
* ApiDoc
    * apidoc
      * assets
      * index.html
        ** (이 파일을 브라우저에서 열어보면 ../src 하위에 생성한 js에 따라 api 문서가 만들어진 것을 볼 수 있습니다.)
    * src
      * apidoc 생성할 js 파일
* apidoc.json


## api 문서 생성 방법
src 경로 하위에 src/example.js를 참고하여 api doc 생성 규격에 맞게 js파일을 생성합니다.
terminal을 이용하여 'apidoc.json'파일이 있는 경로에서 하위 명령어를 실행합니다.

``` bash
> apidoc -i src -o apidoc
```
명령어를 실행하고 나면 apidoc/index.html 파일의 내용이 바뀝니다.
'index.html' 파일을 브라우저에서 열어봅니다. 
js파일에 작성한 @apiGroup에 따라 화면 왼쪽에 그룹 메뉴가 생성되어진 것을 볼 수 있을 것입니다.
