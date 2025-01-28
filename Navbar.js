import React from 'react';
import './Navbar.css';

// Create the main structure
const container = document.createElement("div");
container.className = "container";

// Create the navigation bar
const nav = document.createElement("nav");
const ul = document.createElement("ul");
ul.className = "unordered";

// Add the SVG logo
const logoSvg = `
  <svg class="color cha w-[1.60625rem] m:w-[1.375rem] h-auto" width="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.153 11.46a6.888..."></path>
  </svg>`;
ul.innerHTML += logoSvg;

// Define dropdown menu items
const menuItems = [
  { title: "Research", links: [{ text: "Overview", href: "Research Overview.html" }] },
  {
    title: "Products",
    links: [
      { text: "Platform Overview", href: "Products.html" },
      { text: "OpenAI for Business", href: "business.html" },
    ],
  },
  {
    title: "Safety",
    links: [
      { text: "Safety Overview", href: "Safety Overview.html" },
      { text: "Safety Standards", href: "Safety Standards.html" },
      { text: "Safety Systems", href: "Safety Systems.html" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "Our Charter", href: "OpenAI Charter.html" },
      { text: "Residency", href: "Residency.html" },
      { text: "Security and Privacy", href: "Security.html" },
    ],
  },
];

// Generate dropdown menus
menuItems.forEach((item) => {
  const li = document.createElement("li");
  li.className = "dropdown";

  const button = document.createElement("button");
  button.className = "dropbtn";
  button.textContent = item.title;
  li.appendChild(button);

  const dropdownContent = document.createElement("div");
  dropdownContent.className = "dropdown-content";

  item.links.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    dropdownContent.appendChild(a);
  });

  li.appendChild(dropdownContent);
  ul.appendChild(li);
});

// Add search icon
const searchSvg = `
  <svg class="color sear" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
    <path d="M21 3C11.621..."></path>
  </svg>`;
ul.innerHTML += searchSvg;

nav.appendChild(ul);
container.appendChild(nav);

// Add article content
const articleDiv = document.createElement("div");
articleDiv.className = "article";
articleDiv.innerHTML = `
<center><h4>November 30, 2022</h4></center>;

  <center><p class="chat">Introducing ChatGPT</p></center>`;
  
container.appendChild(articleDiv);

// Add buttons and links
const buttonDiv = document.createElement("div");
buttonDiv.innerHTML = `

  <center>
  
    <a href=""><button type="button" class="btn gapp">&nbsp; Try ChatGPT
      <svg class="arr" width="10px" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9L9 1M9 1H2.5M9 1V7.22222" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </button></a>
    <a href="" class="gap">Download ChatGPT Desktop
      <svg xmlns="http://www.w3.org/2000/svg" style="transform:rotate(-90deg)" width="0.5625rem" viewBox="0 0 14 8" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292892 0.292894..."></path>
      </svg>
    </a>
    <a href="" class="gap">Learn about ChatGPT
      <svg xmlns="http://www.w3.org/2000/svg" style="transform:rotate(-90deg)" width="0.5625rem" viewBox="0 0 14 8" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292892 0.292894..."></path>
      </svg>
    </a>
  </center>`;
container.appendChild(buttonDiv);

// Append the container to the body
document.body.appendChild(container);


// Create a paragraph element
const paragraph = document.createElement("p");

// Set the text content for the paragraph
paragraph.textContent = "(This is the Home Page of the ChatGPT)";
// Optionally, style the paragraph
paragraph.style.fontSize = "18px";
paragraph.style.color = "white";
paragraph.style.textAlign ="center";
paragraph.style.marginTop = "130px";

// Append the paragraph to the body of the document (or any other container)
document.body.appendChild(paragraph);

export default container;