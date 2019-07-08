import ImageService from "./image-service.js";

const _is = new ImageService()

export default class ImageController {}

function drawImage() {
	console.log("Nobody:", _imageService.image)
}

export default class ImageController {

	constructor() {
		_imageService.addSubscriber('image', drawImage)
		_imageService.getImage()
	}