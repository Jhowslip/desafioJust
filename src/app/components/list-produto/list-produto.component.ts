import { Component, OnInit } from '@angular/core';
import { ListProdutoServiceService } from './service/list-produto-service.service';
import { Produto } from 'src/model/produto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { numberToReal } from 'src/shared/utils'
import { DataSharingService } from 'src/shared/data-sharing.service';


@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.scss']
})
export class ListProdutoComponent implements OnInit {
  public dataSource: Produto[];
  public isLoadingResults: boolean;
  public produtos: Produto[];
  public infoProduto: Produto;
  public closeResult: string;
  public itemCarrinho: Produto[] = [];
  

  constructor(public api: ListProdutoServiceService,
    private modalService: NgbModal,
    public share: DataSharingService) { }

  ngOnInit() {
    this.api.getProdutos()
      .subscribe(res => {
        for (let i = 0; i < Object.keys(res)[0].length; i++) {
          Object.values(res)[0][i].price = numberToReal(Object.values(res)[0][i].price)
        }
        this.dataSource = res;
        this.produtos = this.dataSource;
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });

    if (!this.produtos) {
      this.produtos = [];
    }

  }
  openModal(content, obj) {
    this.modalService.open(content, { size: 'lg' });
    this.infoProduto = obj;
  }

  addCarrinho(obj) {
    if (this.infoProduto) {
      this.itemCarrinho.push(obj)
      this.share.setValue(this.itemCarrinho);
    }
    
  }
}
