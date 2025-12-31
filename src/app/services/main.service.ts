import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  logo: string = 'assets/dash3/tyto/logo/Brand Model.png';
  logo_transparent: string =
    'assets/dash3/tyto/logo/Brand Model - Transparent.png';

  server = 'https://dash3.yonkou.info/api/v1';


}
