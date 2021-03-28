function createAndAddToElement(elem, attrib, details, adult) {
  let element = document.createElement(elem);
  element.setAttribute(attrib, details);
  adult.appendChild(element);
  return element;
}

function createWithTextAndAddToElement(elem, content, classy, adult) {
  let element = document.createElement(elem);
  element.textContent = content;
  element.setAttribute("class", classy);
  adult.appendChild(element);
  return element;
}

function createLinkAndAddToElement(link, classy, adult) {
  let element = document.createElement('a');
  element.setAttribute('href', link);
  element.setAttribute('class', classy)
  element.setAttribute('target', '_blank')
  adult.appendChild(element);
  return element;
}

const bubbleContainer = document.querySelector(".project-list");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".project-modal");
const modalClose = document.querySelector(".modal-close");
const modalNav = document.querySelector(".modal-nav");
const modalNext = document.querySelector(".modal-next");
const modalPrev = document.querySelector(".modal-prev");

function createBubbles() {
  for (let i = 1; i < 9; i ++) {
    const bubble = createAndAddToElement('div', 'class', `project-bubble proj-${i}`, bubbleContainer)
    bubble.setAttribute('data-index', i)
    createWithTextAndAddToElement('p', projectList[i-1].name, 'bubble-text', bubble)
  }
}

createBubbles()

function createModal(index, grandparent, parentClass, modal=false) {
  const project = projectList[index - 1]
  const parent = createAndAddToElement('div', 'class', parentClass, grandparent)
  parent.setAttribute('data-index', index)
  createWithTextAndAddToElement('h2', project.title, 'title p-1', parent)
  const photo = createLinkAndAddToElement(project.url, 'proj-link', parent)
  createAndAddToElement('img', 'src', project.image, photo)
  photo.setAttribute('class', 'projectImage')
  const textContainer = createAndAddToElement('div', 'class', 'text-container', parent)
  createWithTextAndAddToElement('p', project.description, 'description px-4 py-1', textContainer)
  const list = createAndAddToElement('ul', 'class', 'topics', textContainer)
  project.topics.forEach(topic => {
    createWithTextAndAddToElement('li', topic, 'topic px-7', list)
  })
  const bottomRow = createAndAddToElement('div', 'class', 'bottom-row', parent)
  const skills = createAndAddToElement('ul', 'class', `skills skill-proj-${index}`, bottomRow)
  project.skills.forEach(skill => {
    const skillClass = skill.toLowerCase()
    createWithTextAndAddToElement('li', skill, `badge rounded-pill ${skillClass}`, skills)
  })
  const ghLink = createLinkAndAddToElement(project.github, `logo logo-proj-${index}`, bottomRow)
  ghLink.innerHTML = githubLogo
}

function displayModal(index) {
  const navButtons = Array.from(modalNav.children);
  navButtons.forEach(button => button.classList.remove("hidden"));
  const deleteModal = modal.querySelector('.proj-modal-content');
  if (deleteModal) modal.removeChild(deleteModal);
  createModal(index, modal, 'proj-modal-content', true)
  displayModalNav(index);
  overlay.classList.remove("hidden");
}

function displayModalNav(index) {
  const size = projectList.length;
  if (index === size) modalNext.classList.add("hidden");
  if (index === 1) modalPrev.classList.add("hidden");
}

bubbleContainer.addEventListener('click', e => {
  if (e.target !== bubbleContainer) {
    const bubble = e.target.closest(".project-bubble");
    const index = parseInt(bubble.getAttribute('data-index'));
    displayModal(index);
    }
  });

modalClose.addEventListener('click', () => {
  overlay.classList.add("hidden");
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.add("hidden");
  }
});

modalNav.addEventListener('click', (e) => {
  const projectModal = document.querySelector('.proj-modal-content');
  displayModalNav(parseInt(projectModal.dataset.index));
  if (e.target === modalNext) {
    const nextEmployee = parseInt(projectModal.dataset.index) + 1;
    displayModal(nextEmployee);
  } else if (e.target === modalPrev) {
    const prevEmployee = parseInt(projectModal.dataset.index) - 1;
    displayModal(prevEmployee);
  }
});