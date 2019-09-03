import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';

@Directive({
    selector: '[appButton]'
})
export class ButtonDirective implements OnChanges {
    @Input() public appButtonType: ButtonType = ButtonType.HERO_RED;
    @Input() public appButtonSize: ButtonSize = ButtonSize.LARGE;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnChanges() {
        if (!ButtonSize[this.appButtonSize]) {
            throw new Error(`'${this.appButtonSize}' is not a valid value for enum ButtonSize`);
        }

        if (!ButtonType[this.appButtonType]) {
            throw new Error(`'${this.appButtonType}' is not a valid value for enum ButtonType`);
        }

        const wrappingSpan = this.renderer.createElement('span');

        wrappingSpan.className += `app-button`;

        const wrappedElement = this.elementRef.nativeElement;
        this.elementRef.nativeElement.className = `${ButtonType[this.appButtonType]} ${ButtonSize[this.appButtonSize]}`.trim();
        const parent = wrappedElement.parentNode;
        this.renderer.insertBefore(parent, wrappingSpan, wrappedElement);

        this.renderer.appendChild(wrappingSpan, wrappedElement);
    }
}

export enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

export enum ButtonType {
    HERO_RED = 'hero hero-red',
    HERO_BLUE = 'hero hero-blue',
    HOLLOW = 'hollow'
}
