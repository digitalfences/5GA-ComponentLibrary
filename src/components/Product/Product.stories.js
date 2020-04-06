import React from 'react';
import { storiesOf } from '@storybook/react';

import Product from './Product';

storiesOf('Product',module)
.add('Product-Block-Outline', () => <Product type="block" label="Apple MacBook Pro" default outline/>)
.add('Product-Filled', () => <Product type="block" label="Apple MacBook Pro" default filled/>)
.add('Product-Long', () => <Product type="block" label="Email" long/>)
.add('Product-Small', () => <Product type="block" label="Email" small/>)
.add('Product-Inline', () => <Product type="inline" label="Email" inline/>)
    
