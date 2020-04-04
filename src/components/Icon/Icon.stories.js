import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from './Icon';

storiesOf('Icon', module)
    .add('Heart', () => <Icon type="heart" />)
    .add('Cart', () => <Icon type="cart" />)