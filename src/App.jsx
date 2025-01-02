import reactLogo from "./assets/images/logo.webp";
import "./App.css";

function App() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <div>
                    <a href="https://react.dev" target="_blank">
                        <img
                            src={reactLogo}
                            className="logo react"
                            alt="React logo"
                        />
                    </a>
                </div>
                <h1 className="text-4xl font-bold">Pokémon Explorer</h1>
            </div>
        </>
    );
}

export default App;
