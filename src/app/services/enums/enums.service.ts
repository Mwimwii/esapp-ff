import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class EnumsService {
  standards = {
    essap_link: '',
    szi_link: 'https://www.szi.gov.zm',
    szi_name: 'SMART Zambia Institute',
    esapp_name: 'ESAPP',
    testUserName:'admin@emis.com',
    testUserPassword: 'Q!weRTy@134'
  }
  constructor() {}
}
