const DragElement = {
    mounted(el) {
        let offsetX, offsetY;
        let isDragging = false;
  
        function moveElement(event) {
            if (isDragging) {
                el.style.left = `${event.pageX - offsetX}px`;
                el.style.top = `${event.pageY - offsetY}px`;
            }
        }
        el.addEventListener("mousedown", function (event) {
            isDragging = true;
            offsetX = event.clientX - el.getBoundingClientRect().left;
            offsetY = event.clientY - el.getBoundingClientRect().top;
            el.style.position = "absolute";
            moveElement(event);
        });
  
        el.addEventListener("mouseup", function () {
            isDragging = false;
        });
        document.addEventListener("mousemove", moveElement);
    },
}

export default DragElement;
