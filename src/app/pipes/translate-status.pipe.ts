import { Pipe, PipeTransform } from '@angular/core';
import { TicketStatus } from '../models/reports/ticket-status.model';

@Pipe({
  name: 'translateStatus'
})
export class TranslateStatusPipe implements PipeTransform {

  transform(status: string): string {
    switch (status) {
      case TicketStatus.NEW:
        return 'NUEVO';

      case TicketStatus.IN_PROGRESS:
        return 'EN PROGRESO';

      case TicketStatus.SOLVED:
        return 'RESPONDIDO';
      
      default:
        return status;
    }
  }

}
