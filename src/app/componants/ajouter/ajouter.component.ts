import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Intervention } from 'src/app/models/intervention';
import { InterventionService } from 'src/app/services/intervention.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {
  ins:Intervention={
    code_intervention:"",
    date_intervention: new Date(),
    matricule_intervention:"",
    nom_intervenant:"",
    grade_intervenant:"",
    nom_patient:""
  }
  constructor(private intService:InterventionService,private route:Router){}Ajouter() {
    if (
      this.ins.code_intervention.trim() &&
      this.ins.date_intervention &&
      this.ins.matricule_intervention.trim() &&
      this.ins.nom_intervenant.trim() &&
      this.ins.grade_intervenant.trim() &&
      this.ins.nom_patient.trim()
    ) {
      this.intService.ajouterinterventions(this.ins);
      this.route.navigate(['/list']);
    } else {
      alert('Please fill in all the required fields for the intervention.');
    }
  }

}
