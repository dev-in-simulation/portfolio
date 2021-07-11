import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Info from './Info';

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders with text', () => {
    act(() => {
        render(<Info text='placeholder text' />, container);
    });
    expect(container.textContent).toBe('placeholder text');

    act(() => {
        render(<Info text='some more text to test' />, container);
    });
    expect(container.textContent).toBe('some more text to test');
});