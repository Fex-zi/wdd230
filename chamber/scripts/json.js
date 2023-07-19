const turl = "data/members.json";
const membersContainer2 = document.querySelector("#membersContainer");

async function getmembers() {
  try {
    const response = await fetch(turl);
    const data = await response.json();

    displaymembers(data.members);
  } catch (error) {
    console.log(error);
  }
}

getmembers();

const displaymembers = (members) => {
  // Filter members with silver or gold membership levels
  const qualifiedMembers = members.filter(
    (member) => member.membership === "Silver" || member.membership === "Gold"
  );

  // Shuffle the qualified members array randomly
  const shuffledMembers = shuffleArray(qualifiedMembers);

  // Select the first three members as spotlight advertisements
  const spotlightMembers = shuffledMembers.slice(0, 3);

  spotlightMembers.forEach((member) => {
    const cardfile = document.createElement("div");
    cardfile.classList.add("cardfile");

    const image = document.createElement("img");
    image.src = `images/${member.image}`;
    image.alt = member.name;
    cardfile.appendChild(image);

    const name = document.createElement("h3");
    name.textContent = member.name;
    cardfile.appendChild(name);

    const address = document.createElement("p");
    address.textContent = member.address;
    cardfile.appendChild(address);

    const phone = document.createElement("p");
    phone.textContent = member.phone;
    cardfile.appendChild(phone);

    const website = document.createElement("a");
    website.href = member.website;
    website.textContent = "Website";
    cardfile.appendChild(website);

    const membership = document.createElement("p");
    membership.textContent = `Membership: ${member.membership}`;
    cardfile.appendChild(membership);

    const otherInfo = document.createElement("p");
    otherInfo.textContent = member.otherInfo;
    cardfile.appendChild(otherInfo);
    

    membersContainer2.appendChild(cardfile);
  });
};

// Utility function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

  
//Directory

const membersURL = "data/members.json";
const membersContainer = document.querySelector("#membersContainer");
const gridViewButton = document.querySelector("#gridViewButton");
const listViewButton = document.querySelector("#listViewButton");

let currentView = "grid";

gridViewButton.addEventListener("click", () => {
  if (currentView !== "grid") {
    currentView = "grid";
    displayMembers();
  }
});

listViewButton.addEventListener("click", () => {
  if (currentView !== "list") {
    currentView = "list";
    displayMembers();
  }
});

async function getMembers() {
  try {
    const response = await fetch(membersURL);
    const data = await response.json();
    return data.members;
  } catch (error) {
    console.log(error);
    return [];
  }
}

function createMemberCard(member) {
  const cardfile = document.createElement("div");
  cardfile.classList.add("cardfile");
  
  const image = document.createElement("img");
  image.src = `images/${member.image}`;
  image.alt = member.name;
  cardfile.appendChild(image);
  
  const name = document.createElement("h3");
  name.textContent = member.name;
  cardfile.appendChild(name);
  
  const address = document.createElement("p");
  address.textContent = member.address;
  cardfile.appendChild(address);
  
  const phone = document.createElement("p");
  phone.textContent = member.phone;
  cardfile.appendChild(phone);
  
  const website = document.createElement("a");
  website.href = member.website;
  website.textContent = "Website";
  cardfile.appendChild(website);
  
  const membership = document.createElement("p");
  membership.textContent = `Membership: ${member.membership}`;
  cardfile.appendChild(membership);
  
  const otherInfo = document.createElement("p");
  otherInfo.textContent = member.otherInfo;
  cardfile.appendChild(otherInfo);
  
  return cardfile;
}

function createMemberListItem(member) {
  
  const listItem = document.createElement("li");
  
  const name = document.createElement("h3");
  name.textContent = member.name;
  listItem.appendChild(name);
  
  const address = document.createElement("p");
  address.textContent = member.address;
  listItem.appendChild(address);
  
  const phone = document.createElement("p");
  phone.textContent = member.phone;
  listItem.appendChild(phone);
  
  const website = document.createElement("a");
  website.href = member.website;
  website.textContent = "Website";
  listItem.appendChild(website);
  
  const membership = document.createElement("p");
  membership.textContent = `Membership: ${member.membership}`;
  listItem.appendChild(membership);
  
  const otherInfo = document.createElement("p");
  otherInfo.textContent = member.otherInfo;
  listItem.appendChild(otherInfo);
  

  const details = [
    member.name,
    member.address,
    member.phone,
    website.textContent = "Website",
    `Membership: ${member.membership}`,
    member.otherInfo
  ];

  const detailsText = details.join(" | ");
  listItem.textContent = detailsText;

  return listItem;
}

async function displayMembers() {
  const members = await getMembers();
  membersContainer.innerHTML = "";

  if (currentView === "grid") {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-view");
    membersContainer.appendChild(gridContainer);

    members.forEach((member) => {
      const cardfile = createMemberCard(member);
      gridContainer.appendChild(cardfile);
    });
  } else if (currentView === "list") {
    const listContainer = document.createElement("ul");
    listContainer.classList.add("list-view");
    membersContainer.appendChild(listContainer);

    members.forEach((member) => {
      const listItem = createMemberListItem(member);
      listContainer.appendChild(listItem);
    });
  }
}

displayMembers();

          
          

          
          