import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import './Title';

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

it('renders with name', () => {
    act(() => {
        render(<Title name={'test title'} />, container);
    });

    expect(container.textContent).toBe('test title');


    act(() => {
        render(<Title name={'Games'} />, container);
    });

    expect(container.textContent).toBe('Games');
});