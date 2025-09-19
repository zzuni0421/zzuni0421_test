function runCode() {
    const code = document.getElementById('code-editor').value;
    const iframe = document.getElementById('output-frame');
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(code);
    iframeDoc.close();
}

function addNewFile() {
    const name = prompt("새 파일 이름을 입력하세요:");
    if(name) {
        alert(`파일 "${name}" 생성 완료! (테스트용)`);
        // 실제 파일 관리 기능은 로컬 저장 등 추가 필요
    }
}

function loadTemplate(type) {
    const editor = document.getElementById('code-editor');
    let template = '';
    switch(type) {
        case 'html':
            template = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>나물허브 테스트</title>
</head>
<body>

</body>
</html>`;
            break;
        case 'js':
            template = `console.log("나물허브 JS 테스트");`;
            break;
        case 'css':
            template = `body { background-color: #f9f9f9; }`;
            break;
    }
    editor.value = template;
}
