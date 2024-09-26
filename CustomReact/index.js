

const ReactElement={
    type:"a",
    props:{
        href:"www.google.com",
        target:"__blank"
    },
    children:"Click me to visit Google",
   
} 


function render(ReactEle,container){
const ele = document.createElement(ReactEle.type);
ele.setAttribute("href",ReactElement.props.href);
ele.setAttribute("target",ReactElement.props.target);
ele.innerText=ReactEle["children"];
//append it
container.appendChild(ele);
}

const root = document.querySelector("#root");
render(ReactElement,root);