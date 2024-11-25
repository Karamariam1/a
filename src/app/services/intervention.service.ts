import { Injectable } from '@angular/core';
import { Intervention } from '../models/intervention';

@Injectable({
  providedIn: 'root'
})
export class InterventionService{
  interventions: Intervention[] = [];
  constructor() { }
  getAllinterventions(){
    if (localStorage.getItem('interventions') == null){
      this.interventions =[];
    } else {
      this.interventions=JSON.parse(localStorage.getItem('interventions')as string);
    }
    return this.interventions;
  }
  ajouterinterventions(interventions:Intervention){
    this.interventions.push(interventions);
    localStorage.setItem('interventions', JSON.stringify(this.interventions));
  }
  supprimerinterventions(codeIntervention:string){
    for (let index = 0; index < this.interventions.length; index++) {
      if (this.interventions[index].code_intervention == codeIntervention) {
        this.interventions.splice(index, 1);
      }
    }
    localStorage.setItem('interventions', JSON.stringify(this.interventions));
  }
  getinterventionsByCode(codeIntervention:string){
    let intervention;
    for (let index = 0; index < this.interventions.length; index++) {
      if (this.interventions[index].code_intervention == codeIntervention) {
        intervention = this.interventions[index]
      }
    }
    return intervention;
  }
}
