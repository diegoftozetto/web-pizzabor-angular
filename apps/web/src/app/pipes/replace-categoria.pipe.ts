import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceCategoria'
})
export class ReplaceCategoriaPipe implements PipeTransform {

  transform(
    value: string,
  ): string {
    if (value === 'pizza_salgada') {
      return 'Pizza Salgada';
    } else if (value === 'massa') {
      return 'Massa';
    } else if (value === 'calzone') {
      return 'Calzone';
    } else if (value === 'pizza_doce') {
      return 'Pizza Doce'
    }  else if (value === 'bebida') {
      return 'Bebida'
    }
    return 'Outro';
  }
}
