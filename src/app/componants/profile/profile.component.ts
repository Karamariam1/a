import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Intervention } from 'src/app/models/intervention';
import { InterventionService } from 'src/app/services/intervention.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  ins:Intervention={
    code_intervention:"",
    date_intervention: new Date(),
    matricule_intervention:"",
    nom_intervenant:"",
    grade_intervenant:"",
    nom_patient:""
  }
  code!:string
  constructor(private intService:InterventionService,private route:Router,private activeRouted:ActivatedRoute){}
  ngOnInit(){
    this.ins=this.intService.getinterventionsByCode(this.activeRouted.snapshot.params["code"]) as Intervention
    this.code=this.ins.code_intervention
  }
  toList(){
    this.route.navigate(['/list'])
  }
}
