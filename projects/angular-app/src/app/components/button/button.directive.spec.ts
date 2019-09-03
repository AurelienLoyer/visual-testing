import { Component, DebugElement, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonDirective } from './button.directive';

interface TestButtonComponent {}

@Component({
    template: `
        <button type="text" appButton appButtonSize="LARGE" appButtonType="HERO_RED">super button test</button>
    `
})
class GoodTestButtonComponent implements TestButtonComponent {}

@Component({
    template: `
        <button type="text" appButton appButtonSize="HUGE" appButtonType="HERO_RED">super button test</button>
    `
})
class BadSizeTestButtonComponent implements TestButtonComponent {}

@Component({
    template: `
        <button type="text" appButton appButtonSize="LARGE" appButtonType="HERO_ORANGE">super button test</button>
    `
})
class BadTypeTestButtonComponent implements TestButtonComponent {}

describe('Directive: ButtonDirective', () => {
    let fixture: ComponentFixture<TestButtonComponent>;
    let buttonEl: DebugElement;
    let compiledButton: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ButtonDirective, GoodTestButtonComponent, BadSizeTestButtonComponent, BadTypeTestButtonComponent]
        });
        initComponent(GoodTestButtonComponent);
    });

    it('should add parent element', () => {
        expect(compiledButton).toBeDefined();
        expect(compiledButton as HTMLElement).toBeInstanceOf(HTMLSpanElement);
    });

    it('should add correct class on element', () => {
        expect(compiledButton.className).toBe('app-button');
        expect(buttonEl.nativeElement.className).toBe('hero hero-red large');
    });

    it('should throw error on bad buttonSize directive parameters', () => {
        try {
            initComponent(BadSizeTestButtonComponent);
        } catch (e) {
            expect(e.message).toBe("'HUGE' is not a valid value for enum ButtonSize");
        }
    });

    it('should throw error on bad buttonType directive parameters', () => {
        try {
            initComponent(BadTypeTestButtonComponent);
        } catch (e) {
            expect(e.message).toBe("'HERO_ORANGE' is not a valid value for enum ButtonType");
        }
    });

    function initComponent(buttonComponent: Type<TestButtonComponent>) {
        fixture = TestBed.createComponent(buttonComponent);
        buttonEl = fixture.debugElement.query(By.css('button'));
        fixture.detectChanges();
        compiledButton = buttonEl.parent.nativeElement;
    }
});
