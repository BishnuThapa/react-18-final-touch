import { useState } from 'react';
import Button from './Components/Button';
import ListGroup from './Components/ListGroup'
import Message from './Components/Message';
import {BsCalendar2DateFill } from 'react-icons/bs'
import Like from './Components/Like';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
// import Message from './Message'

const App = () => {
  const [cartItems, setCartItems]=useState(['Product1','Product2'])
  const [alertVisible,setAlertVisibility]=useState(false)
  const items = ["New York", "London", "China", "Kathmadu", "Delhi"];
  const handleSelectItem = (item:string) => {
    console.log(item)
  }
  return (
    <div>
      {/* <Message /> */}

      {/* using props we pass data to the oomponent */}
      <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem} />
      { alertVisible && <Message onClose={()=>setAlertVisibility(false)}>
        Hello <span>Mosh</span>
      </Message>}
      <BsCalendar2DateFill color='red' size={40} />
      <Button color='primary' onButtonClick={()=>setAlertVisibility(true)} >
        Login
      </Button>
      <Button color='danger' onButtonClick={()=>console.log('Ok')}>
        Sign Up
      </Button>
      <br />

      <Like onHeartClick={() => console.log('Clicked')} />
      <br />
      <hr />
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={()=>setCartItems([])} />
    </div>
  )
}

export default App