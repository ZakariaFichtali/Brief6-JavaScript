  // DOM NAVIGATION
  document.getElementById("id1--1").innerHTML = document.getElementById("id1--0").innerHTML;
  document.getElementById("id2--1").innerHTML = document.getElementById("id2--0").firstChild.nodeValue;

  //DOM CSS

  document.getElementById("id1--1").style.color = "#fff";
   document.getElementById("id1--1").style.backgroundColor= "cadetblue";
  document.getElementById("id1--1").style.fontSize="29px";
   document.getElementById("h1").style.backgroundColor="cadetblue";
  document.getElementById("h1").style.height="100px";
  document.querySelector("body").style.margin="0px";
  document.querySelector("body").style.padding="0px";

  // DOM Nodes
  // Creating New HTML Elements (Nodes)

  const zaax = document.createElement("h1");
    const node = document.createTextNode("Creating New HTML Elements Nodes");
  zaax.appendChild(node);
    const element = document.getElementById("test1");
  element.appendChild(zaax);

  // Creating new HTML Elements - insertBefore()

  const paragraph = document.createElement("h3");
    const paragraphNode = document.createTextNode("this is a Node paragraph");
    paragraph.appendChild(paragraphNode);
    const elm = document.getElementById("demo2");
  const child = document.getElementById("p1");
  
  elm.insertBefore(paragraph , child);


