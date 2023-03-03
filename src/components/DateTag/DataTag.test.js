import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';

import DateTag from './index';

describe('<DateTag />', () => {
  it('has 1 child', () => {
    const tree = renderer
      .create(<DateTag key={'2023-03-10'} date={'2023-03-10'} color={'#ff0000'} />)
      .toJSON();
    expect(tree.children.length).toBe(1);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<DateTag key={'2023-03-10'} date={'2023-03-10'} color={'#ff0000'} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders Hello World message on the home page', async () => {
    render(<DateTag key={'2023-03-10'} date={'2023-03-10'} color={'#ff0000'} />);
    expect(screen.getByText('10/03')).toBeDefined();
  });
});

// NOTE: You can use either:
// renderer.create(<App />) from  "react-test-renderer"
// or render(<App />) from "@testing-library/react-native"
