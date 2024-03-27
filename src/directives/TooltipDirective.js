const Tooltip = {
    created(el, binding) {
        
        const tooltipElement = el.children[0];
        console.log(tooltipElement)
            el.addEventListener('mouseenter', (event) => {
                console.log("Мишку наведено")
                tooltipElement.style.color = "blue"
                tooltipElement.style.visibility = 'visible';
            });
            el.addEventListener('mouseleave', (event) => {
                console.log("Мишку знято")
                tooltipElement.style.color = "yellow"
                tooltipElement.style.visibility = 'hidden';
            });
        
    },

};
  
export default Tooltip;
