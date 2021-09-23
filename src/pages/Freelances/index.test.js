import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { waitFor, screen  } from '@testing-library/react'
import Freelances from './index'
import { render, Wrapper } from '../../utils/test'

const freelancersMockedData = [
    {
        name: 'Harry Potter',
        job: 'Magicien frontend',
        picture: '',
    },
    {
        name: 'Hermione Granger',
        job: 'Magicienne fullstack',
        picturre: ''
    },
]

const server = setupServer(
    rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
        return res(ctx.json({ freelancersList: freelancersMockedData }))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('Should display freelancers names', async () => {
    render(<Freelances />, { wrapper: Wrapper })
    expect(screen.getByTestId('loader')).toBeTruthy()
    await waitFor(() => {
        expect(screen.getByText('Harry Potter')).toBeTruthy()
        expect(screen.getByText('Hermione Granger')).toBeTruthy()
    })
})