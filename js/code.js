let
    svg = 'http://www.w3.org/2000/svg',  //for short write in SVG constructor
    canvasSvg = new SvgContainer(),
    menuElementIcon = [],
    buttonDomEl = document.querySelector('.btn-menu');


function SvgContainer() {
    this.svgBox = document.createElementNS(svg, 'svg');
    this.svgBox.setAttributeNS(null, 'x', '0');
    this.svgBox.setAttributeNS(null, 'y', '0');
    this.svgBox.setAttributeNS(null, 'width', '40');
    this.svgBox.setAttributeNS(null, 'height', '40');
    this.svgBox.setAttributeNS(null, 'viewBox', '0 0 40 40');
    this.svgBox.classList.add('menuCanvas');
}

function RectMenuIcon(i) {
    this.form = document.createElementNS(svg, 'rect');
    this.form.setAttributeNS(null, 'x', '11');
    this.form.setAttributeNS(null, 'y', i * 6 + 14);
    this.form.setAttributeNS(null, 'width', '18');
    this.form.setAttributeNS(null, 'height', '2');
    this.form.setAttributeNS(null, 'fill', '#000000');
}


for (let i = 0; i < 3; i++) {
    menuElementIcon.push(new RectMenuIcon(i));
    canvasSvg.svgBox.appendChild(menuElementIcon[i].form);
}

buttonDomEl.appendChild(canvasSvg.svgBox);

console.log(menuElementIcon);