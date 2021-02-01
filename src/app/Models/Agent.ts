import { Files } from './Files';
import { Agency } from './Agency';

export interface Agent{
  id ? : any;
  first_name : string;
  last_name : string;
  identity_document : string;
  birth_day? : string;
  phone_number : string;
  patente_number : string;
  identity_number : string;
  address : string;
  email : string;
  commerce_registration : string;
  id_agence : string;
  files? :Files;
  agency ?: Agency
}
