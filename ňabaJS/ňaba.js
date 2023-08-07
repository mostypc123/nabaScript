class jsňaba {
    static binary(str){
        let binary = '';
        for (let i = 0; i < str.length; i++) {
          const char = str.charCodeAt(i);
          binary += char.toString(2).padStart(8, '0');
        }
        return binary;
    }
  static Render(type, content) {
    const element = document.createElement(type);
    element.innerHTML = content;
    return element;
  }
  static write(text, type){
    if (type ==="console"){
        console.log(text);
    }else if(type ==="document"){
        document.write(text);
    }else{
        console.error("The type "+type+" does not exist. Try type 'console' or 'document'.")
    }
  }
  static Open(type, file, to){
    if (type==="image/*"){
        var img = document.createElement("img");
        img.src=file;
    }
    else if(type==="text/*"){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'cesta_k_suboru.txt', true);
        xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var fileContent = xhr.responseText;
            if (to==="console"){
                console.log(fileContent)
            }else if(to==="document"){
                document.write(fileContent)
            }else{
                console.error("The type "+to+" does not exist. Try type 'console' or 'document'.")
            }
        }
        };
        xhr.send();

    }
  }
}
