import './App.css'

// import BirthdayReminder from './Birthdays Reminder/BirthdayReminder'
// import Tours from './Tours/Tours'
// import Reviews from './Reviews/Reviews'
// import Accordion from './Accordion/Accordion'
// import Menu from './Menu/Menu'
// import Tabs from './Tabs/Tabs'
// import Slider from './Slider/Slider'
// import Lorem from './Lorem Ipsum Generator/Lorem'
// import Color from './Color Shades Generator/Color'
// import GroceryBud from './Grocery Bud/GroceryBud'
// import Navbar from './Navbar/Navbar'
import ModalAndSidebar from './Modal And Sidebar/ModalAndSidebar'
import { AppProvider } from './Modal And Sidebar/Context'
function App() {
  return (
    <>
      <div className='App'>
        {/* <BirthdayReminder /> */}
        {/* <Tours /> */}
        {/* <Reviews /> */}
        {/* <Accordion /> */}
        {/* <Menu /> */}
        {/* <Tabs /> */}
        {/* <Slider /> */}
        {/* <Lorem /> */}
        {/* <Color /> */}
        {/* <GroceryBud /> */}
        {/* <Navbar /> */}
        <AppProvider>
          <ModalAndSidebar />
        </AppProvider>
      </div>
    </>
  )
}

export default App
