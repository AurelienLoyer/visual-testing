import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.scss']
})
export class QpCardComponent {
    @Input() label: string;
    @Input() route: string;
    @Input() imageSrc: string;
}
