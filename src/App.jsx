import SideBar from "./Components/SideBar"
import AppRouter from "./Pages/AppRouter"

function App() {

  return (
    <>
      <div className="flex flex-row bg-base-300">
        <SideBar />
        <div className="overflow-x-auto overflow-y-scroll max-h-screen w-full">
          <AppRouter />
        </div>
      </div>

    </>
  )
}

export default App
