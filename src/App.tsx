import { Button } from "./@/components/ui/button"
import { ModeToggle } from "./components/mode-toggle"

function App() {

  return (
    <>
      <div className="bg-blue-500 text-white p-4">
       <ModeToggle />
        <h1 className="text-2xl">Hello, Tailwind CSS in React!</h1>

        <Button variant="outline">Button</Button>

      </div>
    </>
  )
}

export default App
