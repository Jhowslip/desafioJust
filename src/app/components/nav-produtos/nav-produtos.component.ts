import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/model/produto';
import { somaItems, numberToReal, subtraiItems } from 'src/shared/utils';
import { DataSharingService } from 'src/shared/data-sharing.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-nav-produtos',
  templateUrl: './nav-produtos.component.html',
  styleUrls: ['./nav-produtos.component.scss']
})
export class NavProdutosComponent implements OnInit {
  public itemCarrinho: Produto[];
  public indexCarrinho: number = 0;
  public itemValor: number = 0;
  public exibiValor: number = 0;
  public infoProduto: Produto[];
  public validarCart: boolean = false;

  constructor(private share: DataSharingService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.share.dataShared.subscribe((res) => {
      this.itemCarrinho = res;
      if (this.itemCarrinho) {
        this.itemValor = somaItems(this.itemCarrinho[0].price, this.itemValor);
        this.exibiValor = numberToReal(this.itemValor)
      }
      if (this.itemCarrinho) {
        this.indexCarrinho = this.itemCarrinho.length;
      }
      this.validaCarrinho(res);
    });

    this.exibiValor = numberToReal(this.exibiValor);
  }

  validaCarrinho(value) {
    if (!value) {
      this.validarCart = true;
    } else {
      this.validarCart = false;
    }
    console.log(this.validarCart);
  }


  openModal(content, obj) {
    this.modalService.open(content, { size: 'lg' });
    this.infoProduto = obj;
  }

  excluirItem(pos, obj) {
    let objValue = obj.price
    const index = pos.indexOf(obj);
    let _old = this.exibiValor.toString().replace(/[^0-9,]*/g, '').replace(',', '.');
    objValue = objValue.replace(/[^0-9,]*/g, '').replace(',', '.');
    let result = parseFloat(_old) - parseFloat(objValue);
    if (!result) {
      result = 0;
    }
    this.exibiValor = numberToReal(result)
    this.indexCarrinho--;
    pos.splice(index, 1);

  }
  addItem(pos, obj) {
    let objValue = obj.price
    pos.push(obj);
    let _old = this.exibiValor.toString().replace(/[^0-9,]*/g, '').replace(',', '.');
    objValue = objValue.replace(/[^0-9,]*/g, '').replace(',', '.');
    let result = parseFloat(_old) + parseFloat(objValue);
    this.exibiValor = numberToReal(result)
    this.indexCarrinho = this.itemCarrinho.length;  
  }
}
