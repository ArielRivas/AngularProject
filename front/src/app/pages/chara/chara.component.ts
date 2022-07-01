import { CharaInterface } from '../../models/chara.interface';
import { Component, OnInit } from '@angular/core';
import { CharaService } from 'src/app/services/chara.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chara',
  templateUrl: './chara.html',
  styleUrls: ['./chara.scss']
})

export class CharaComponent implements OnInit {
  public filteredList: any;
  public filter= "";
  public charaList: CharaInterface[] = [];

  constructor(private CharaService: CharaService, private router: Router) { }
  ngOnInit(): void {
    this.CharaService.getChara().subscribe((data: any) => {
      this.charaList = data;
      this.filteredList = this.charaList;

    })
  }
  public catchChara(chara: any) {
    this.CharaService.editItem(chara);
    this.router.navigate(["/gestion"]);
  }
  public onChangeFilter(filter: string){
    const newList = [this.charaList.filter(chara => chara.name.toLowerCase().includes(filter.trim().toLowerCase()))];
    this.filteredList = [newList];
  }
  }



