import { Atleta } from "./Atleta";

export interface Ciclista extends Atleta{
  
  pedalar(): void;
}