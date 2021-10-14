import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ProductModel } from '../Model/ProductModel';
import { AuthService } from '../service/auth.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  product: ProductModel = new ProductModel
  shopCart: ProductModel[]
  vParcial: number
  vTotal: number
  vazio: string
  quant: number
  carrinhoOb = {
    valor: 0}

  constructor(
    private authService: AuthService,
    private productService: ProductService,
    private router: Router
    
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if (environment.token == "") {
     alert('É PRECISO ESTAR LOGADO')
      this.router.navigate(["/login"])
    }

    this.findProdById()
    // this.exibirCarrinho()
  }

  findProdById() {
    this.productService.getByIdProducts(environment.idProd).subscribe((resp: ProductModel) => {
      // this.shopCart.push({resp})
    })
  }

  // exibirCarrinho() {
  //   const localS = localStorage['carrinho']
  //   if (localS.length > 0) {
  //     this.carrinho = localS ? JSON.parse(localS) : []
  //   } else {
  //     this.vazio = "O Carrinho está vazio"
  //     this.vTotal = 0
  //   }
  // }

  // total() {
  //   this.vTotal = 0
  //   let dadosProd = []
  //   dadosProd = JSON.parse(localStorage.getItem('carrinho') || '{}')
  //   dadosProd.forEach((i) => {
  //     this.carrinhoOb = {
  //       valor: i.valorParcial
  //     }


  //     this.vTotal = this.carrinhoOb.valor + this.vTotal
  //   })
  //   return this.vTotal.toFixed(2)
  // }
}
