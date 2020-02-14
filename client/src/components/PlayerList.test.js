import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';

import mockData from '../MockData';
import PlayerList from './PlayerList';
import 'mutationobserver-shim';
import Player from './Player';

test('PlayerList component is rendered', () => {
    render(<PlayerList players={mockData} />)
})

test('Information is being displayed from API', () => {
    const { getByText } = render(<PlayerList players={mockData}/>)
    getByText(/alex/i)
    const styleText = getByText(/change style/i)
})

test('style button has functionality', () => {
    const { getByText } = render(<PlayerList players={mockData}/>)

    fireEvent.click(getByText(/click me/i))
})

test('all mock data pieces are being displayed', () => {
    const { getAllByText } = render(<PlayerList players={mockData}/>)
    const sampleData = getAllByText(/country/i)
    expect(sampleData.length).toBe(4)
})