import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CharaService } from 'src/app/services/chara.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  public charaForm!: FormGroup;
  public newChara = this.charaService.charaData;
  public charaID = this.charaService.charaData.id;

  constructor(private formBuilder: FormBuilder, private charaService: CharaService, private router: Router) { }

  ngOnInit(): void {
    this.charaService.clearChara();
    this.charaForm = this.formBuilder.group({
      name: [this.newChara.name, [Validators.required, Validators.minLength(2)]],
      class: [this.newChara.class, [Validators.required]],
      description: [this.newChara.description, [Validators.required]],
      quote: [this.newChara.quote, [Validators.required]],
      image: [this.newChara.image, [Validators.required]]
    })

    this.charaForm.valueChanges.subscribe((changes:any) => {
      this.newChara = changes;
    })
  }

  public onSubmit() {
    if (this.charaID !== "") {
      this.charaService.editChara(this.charaID, this.newChara).subscribe();
      alert("Character equiped correctly");
    } else {
      this.charaService.postChara(this.newChara).subscribe();
      alert("Character created correctly")
    }

    this.charaForm.reset();
    this.router.navigate(["/chara"])
  }

  public delete() {
    if (confirm("Are you sure to kill this character?") == true) {
      this.charaService.deleteChara(this.charaID).subscribe();
      this.charaForm.reset();
      alert("Character fainted");
      this.router.navigate(["/chara"])
    } else {
      this.router.navigate(["/chara"])
    }
  }
}
