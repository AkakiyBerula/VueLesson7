const TextStyle = {
    mounted(el, attr) {
        if (attr.value.bold) {
            el.style.fontWeight = 'bold';
        }
        if (attr.value.italic) {
            el.style.fontStyle = 'italic';
        }
    }
  };
  
export default TextStyle;