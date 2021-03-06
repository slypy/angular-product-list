import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Product } from '../models/product.model'

@Component({
	selector: 'product-list',
	templateUrl: './product-list.component.html',
	styles: [],
})
export class ProductListComponent {
	@Input() productList!: Array<Product>

	@Output() onProductSelected: EventEmitter<Product>

	private currentProduct!: Product

	constructor() {
		this.onProductSelected = new EventEmitter()
	}

	clicked(product: Product): void {
		this.currentProduct = product
		this.onProductSelected.emit(product)
	}

	isSelected(product: Product): boolean {
		if (!product || !this.currentProduct) {
			return false
		}
		return product.sku === this.currentProduct.sku
	}
}
