import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

const i18n: { [lang: string]: Object } = {
  'en-US': {
    'ACTION': 'Action',
    'ADD': 'Add',
    'NO_REGISTERS': 'No registers',
    'NOT_INFORMED': 'Not informed',
    'REMOVE': 'Remove'
  },
  'pt-BR': {
    'ACTION': 'Ação',
    'ADD': 'Adicionar',
    'NO_REGISTERS': 'Nenhum registro encontrado',
    'NOT_INFORMED': 'Não informado(a)',
    'REMOVE': 'Remover'
  }
};

export class AngularFormsTranslateLoader implements TranslateLoader {

  public getTranslation(lang: string): Observable<any> {
    return Observable.of(i18n[lang]);
  }
}
