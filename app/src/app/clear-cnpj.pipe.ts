import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'clearCnpj'})
export class ClearCnpj implements PipeTransform {
    transform(value: string): string {
        return value.replace(/[^0-9]+/g, '');
    }
}