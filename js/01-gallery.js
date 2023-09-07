import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", (event) => {
  event.preventDefault();
  showImage(event.target);
});

createGalleryItems();

function createGalleryItems() {
  const itemsArray = galleryItems
    .map(
      ({ original, preview, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
            </a>
        </li>`
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", itemsArray);
}

function showImage(imgItem) {
  const newElemImg = "<img src=" + imgItem.getAttribute("data-source") + ">";

  basicLightbox.create(`${newElemImg}`).show();
}
