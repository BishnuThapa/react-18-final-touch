import { MouseEvent, useState } from "react"


interface Props{
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
const ListGroup = ({items,heading,onSelectItem}:Props) => {
  const [selectedIndex,setSelectedIndex]=useState(-1)
    
  const handleClick = (e:MouseEvent) => {
    console.log(e)
  }
  return (
    <>
      <h2>{heading}</h2>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={handleClick}
            onClick={() => { setSelectedIndex(index); onSelectItem(item)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup