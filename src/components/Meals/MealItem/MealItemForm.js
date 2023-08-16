import { useRef,useState } from 'react';
import Input from '../../UI/Input';
import classess from './MealItemForm.module.css';

const MeaItemForm= (props)=>{
const [amountIsValid, setAmountIsValid]=useState(true);
   const amountInputRef=useRef();

const submitHandler=event=>{
 event.preventDefault();
 const enteredAMount=amountInputRef.current.value;
 const enteredAMountNumber=+enteredAMount;

 if(enteredAMount.trim().length===0 ||enteredAMount<1 || enteredAMount>5)
 {
   setAmountIsValid(false);
   return; 
 }
 props.onAddToCart(enteredAMountNumber);
};

return (
 <form className={classess.form} onSubmit={submitHandler}>
 <Input
 ref={amountInputRef} 
 label='Amount' input={{
    id:'amount',
    type:'number',
    min:'1',
    max:'5',
    step:'1',
    defaultValue:'1'
 }} />
 <button>+Add</button>
 {!amountIsValid && <p>Please enter a valid Amount (1-5).</p>}
 </form>
);
};

export default MeaItemForm;