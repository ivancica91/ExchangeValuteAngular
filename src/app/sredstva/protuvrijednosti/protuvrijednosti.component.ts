import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Protuvrijednost } from 'src/app/_models/protuvrijednost';
import { SredstvaService } from 'src/app/_services/sredstva.service';

@Component({
  selector: 'app-protuvrijednosti',
  templateUrl: './protuvrijednosti.component.html',
  styleUrls: ['./protuvrijednosti.component.css']
})
export class ProtuvrijednostiComponent implements OnInit {
  protuvrijednosti: Protuvrijednost[];

  constructor(private route: ActivatedRoute, private sredstvaService: SredstvaService) { }

  ngOnInit(): void {
    this.getProtuvrijednosti();
  }

    getProtuvrijednosti(): void {
    this.sredstvaService.getProtuvrijednost()
    .subscribe(
      data => {
        this.protuvrijednosti = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }


}
