import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName === "IMG")  showImage(event.target);
});

let lightbox;

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
  lightbox = basicLightbox.create(`${newElemImg}`, {
    onShow: () => {
      document.addEventListener("keydown", closeImageByKeyEsc);
    },
    onClose: () => {
      document.removeEventListener("keydown", closeImageByKeyEsc);
    },
  });

  lightbox.show();
}

function closeImageByKeyEsc(e) {
  e.stopPropagation();
  if (e.key === 'Escape') {
    lightbox.close();
  }
}
