import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en <FirstApp/>', () => {
    
    // test('debe hacer match con el snapshot', () => {

    //     const title = 'The Office';
    //     const { container } = render(<FirstApp title={title} />)

    //     expect(container).toMatchSnapshot();
    // });

    test('debe mostrar el titulo en un h1', () => {

        const title = 'The Office';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />)

        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // console.log(h1.innerHTML);
        // expect(h1.innerHTML).toBe(title);
        // expect(h1.innerHTML).toContain(title);
        
        // expect(getByTestId('test-title')).toBeTruthy();
        // expect(getByTestId('test-title').innerHTML).toBe(title);
        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    test('debe mostrar el subtitulo enviado por props', () => {
        
        const title = 'The Office';
        const subTitle = 'Soy un subtitulo';
        const { getByText, getAllByText } = render(
            <FirstApp 
                title={ title } 
                subTitle={ subTitle } 
            />
        );

        // expect(getByText(subTitle)).toBeTruthy();
        expect(getAllByText(subTitle).length).toBe(2);
    })
});