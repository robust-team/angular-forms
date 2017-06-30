import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

export class AngularFormsTranslateLoader implements TranslateLoader {

  public getTranslation(lang: string): Observable<any> {
    return Observable.of(require(`./assets/i18n/${lang}.json`));
  }
}
