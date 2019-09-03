import { select, withKnobs } from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';

import { storiesOf } from '@storybook/angular/dist/client/preview';
import { ButtonDirective } from 'src/app/components/button/button.directive';
import ButtonDocumentation from 'src/app/components/button/button.directive.md';

const sizeLabel = 'Size';
const sizeOptions = {
    Large: 'LARGE',
    Medium: 'MEDIUM',
    Small: 'SMALL'
};
const sizeDefaultValue = 'LARGE';

const typeLabel = 'Type';
const typeOptions = {
    'Hero blue': 'HERO_BLUE',
    'Hero red': 'HERO_RED',
    Hollow: 'HOLLOW'
};
const typeDefaultValue = 'HERO_RED';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add(
    'Overview',
    () => ({
        moduleMetadata: {
            declarations: [ButtonDirective]
        },
        templateUrl: 'button.overview.template.html',
        styleUrls: ['./button.overview.template.css']
    }),
    {
        notes: {
            markdown: ButtonDocumentation
        }
    }
);

stories.add(
    'Customize',
    () => ({
        moduleMetadata: {
            declarations: [ButtonDirective]
        },
        props: {
            buttonSize: select(sizeLabel, sizeOptions, sizeDefaultValue),
            buttonType: select(typeLabel, typeOptions, typeDefaultValue)
        },
        templateUrl: 'button.customize.template.html',
        styleUrls: ['./button.customize.template.css']
    }),
    {
        notes: {
            markdown: ButtonDocumentation
        }
    }
);
