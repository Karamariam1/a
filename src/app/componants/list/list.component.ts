import { Component, OnInit } from '@angular/core';
import { Intervention } from './../../models/intervention';
import { Router } from '@angular/router';
import { InterventionService } from 'src/app/services/intervention.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  interventions:Intervention[] = [];
  constructor(private intService:InterventionService,private route:Router){}
  ngOnInit(): void {
    this.interventions = this.intService.getAllinterventions()
  }
  Profile(code:string){
    this.route.navigate(['/profile', code])
  }
  Supprimer(code:string){
    if (confirm(`Vous êtes que vous voulez supprimer ${code}`)) {
      this.intService.supprimerinterventions(code);
      this.ngOnInit();
    }
  }
}
