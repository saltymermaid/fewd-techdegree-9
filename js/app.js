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

const bubbleContainer = document.querySelector(".project-list");

function createBubbles() {
  for (let i = 1; i < 8; i ++) {
    const bubble = createAndAddToElement('div', 'class', `project-bubble proj-${i}`, bubbleContainer)
    bubble.setAttribute('data-index', i)
    createWithTextAndAddToElement('p', projectList[i].name, 'bubble-text', bubble)
  }
}

createBubbles()

// function createBubble(index, grandparent, parentClass, modal=false) {
//   const project = projectList[index]
//   const parent = createAndAddToElement('div', 'class', parentClass, grandparent)
//   parent.setAttribute('data-index', index)
//   const photo = createAndAddToElement('img', 'src', project.image, parent)
//   photo.setAttribute('class', 'projectImage')
//   const textContainer = createAndAddToElement('div', 'class', 'text-container', parent)
//   if (!modal) {
//     createWithTextAndAddToElement('h2', `${name.first} ${name.last}`, 'name', textContainer)
//   }
//   createWithTextAndAddToElement('p', email, 'email', textContainer)
//   createWithTextAndAddToElement('p', city, 'location', textContainer)
//   if (modal) {
//     let hr = document.createElement('hr');
//     textContainer.appendChild(hr);
//     createWithTextAndAddToElement('p', cell, 'additional', textContainer )
//     createWithTextAndAddToElement(
//       'p',
//       `${street.number} ${street.name}, ${city}, ${state} ${postcode}`,
//       'additional',
//       textContainer
//     )
//     createWithTextAndAddToElement('p', `Birthday: ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`, 'additional', textContainer )
//   }
// }

// function displayModal(index) {
//   const navButtons = Array.from(modalNav.children);
//   navButtons.forEach(button => button.classList.remove("hidden"));
//   const deleteModal = modal.querySelector('.modal-content');
//   if (deleteModal) modal.removeChild(deleteModal);
//   createEmployee(index, modal, 'modal-content', true)
//   displayModalNav(index);
//   overlay.classList.remove("hidden");
// }

// gridContainer.addEventListener('click', e => {
//   if (e.target !== gridContainer) {
//     const card = e.target.closest(".card");
//     const index = parseInt(card.getAttribute('data-index'));
//     displayModal(index);
//     }
//   });

// modalClose.addEventListener('click', () => {
//   overlay.classList.add("hidden");
// });

// overlay.addEventListener('click', (e) => {
//   if (e.target === overlay) {
//     overlay.classList.add("hidden");
//   }
// });

// modalNav.addEventListener('click', (e) => {
//   const employeeIndex = document.querySelector('.modal-content');
//   displayModalNav(parseInt(employeeIndex.dataset.index));
//   if (e.target === modalNext) {
//     const nextEmployee = parseInt(employeeIndex.dataset.index) + 1;
//     if (nextEmployee < filteredEmployees.length) {
//       displayModal(nextEmployee);
//     };
//   } else if (e.target === modalPrev) {
//     const prevEmployee = parseInt(employeeIndex.dataset.index) - 1;
//     if (prevEmployee >= 0) {
//       displayModal(prevEmployee);
//     };
//   }
// });