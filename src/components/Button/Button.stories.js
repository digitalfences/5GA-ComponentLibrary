import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
    .add('Primary', () => <Button type="primary" label="Primary" />)
    .add('Danger', () => <Button type="danger" label="Danger" />)
    .add('Success', () => <Button type="success" label="Success" />)
    .add('Warning', () => <Button type="warning" label="Warning" />)
    .add('Large Primary', () => <Button type="primary" label="Large Primary Button" large/>)
    .add('Large Danger', () => <Button type="danger" label="Large Danger Button" large/>)
    .add('Large Success', () => <Button type="success" label="Large Success Button" large/>)
    .add('Large Warning', () => <Button type="warning" label="Large Warning Button" large/>)


