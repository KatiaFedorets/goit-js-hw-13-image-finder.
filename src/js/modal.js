import * as basicLightbox from 'basiclightbox';
			


function createModal(imagePath) {
	basicLightbox.create(`
    <div class="modal">
        <img src="${imagePath}">
    </div>
`).show();
}


export default createModal;