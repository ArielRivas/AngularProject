import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharaService {

  constructor(private httpClient: HttpClient) { }


  public charaData = {
    name: "",
    class: "",
    description: "",
    quote: "",
    image: "",
    id: ""
  }

  public clearChara() {
    this.charaData = {
      name: "",
      class: "",
      description: "",
      quote: "",
      image: "",
      id: ""
    }
  }

  public editItem(item: any) {
    this.charaData = item
  }
  public getChara() {
    return this.httpClient.get("http://localhost:3000/chara")
  }
  public postChara(newChara: any) {
    return this.httpClient.post("http://localhost:3000/chara", newChara)
  }
  public deleteChara(charaID: any) {
    return this.httpClient.delete("http://localhost:3000/chara/" + charaID)
  }
  public editChara(charaID: any, editedChara: any) {
    return this.httpClient.put("http://localhost:3000/chara/" + charaID, editedChara)
  }
}
