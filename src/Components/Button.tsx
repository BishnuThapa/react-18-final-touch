import  { ReactNode } from 'react'

interface Props{
    children: ReactNode;
    color?: 'primary' | 'secondary' | 'danger';
    onButtonClick: () => void;
}
const Button = ({children,color='primary', onButtonClick}:Props) => {
  return (
    <button className={"mx-2 btn btn-" + color} onClick={onButtonClick}>
      {children}
    </button>
  );
}

export default Button