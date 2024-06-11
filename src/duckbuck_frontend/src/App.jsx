import { Button } from './components/ui/button'
function App() {

    return (
        <main>
            <img src="/logo2.svg" alt="DFINITY logo" />
            <br />
            <br />
            <label htmlFor="name" className="font-bold">Enter your name: &nbsp;</label>
            <input id="name" alt="Name" type="text" />
            <Button className='mt-6' type="submit">hello world city

            </Button>
        </main>
    );
}

export default App;
