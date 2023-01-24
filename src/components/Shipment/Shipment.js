import React,{ useState } from 'react';

const Shipment = () => {
   const [name,setName] = useState('');
   const [email,setEmail] = useState('');
   const [address,setAddress] = useState('');
   const [Phone,setPhone] = useState('');
   const [error,setError] = useState('');
// const navigate = useNavigate();
    const handleNameBlur = (event) =>{
        setName(event.target.value)
        console.log('email blur')
    }
    const handleEmailBlur = (event) =>{
        setEmail(event.target.value);
    }
    const handleAddressBlur = (event) =>{
         setAddress(event.target.value)
         console.log('password blur')
    }
    const handlePhoneNumberBlur = (event) =>{
        setPhone(event.target.value)
        console.log('confirm password blur')
    }
    const handleCreateUser = (event) =>{
    event.preventDefault(); 
    }
    return (
        <div className='form-container'>
        <div>
          <h2 className='form-title'>Shipping Information</h2>  
          <form onSubmit={handleCreateUser}>
             <div className='input-group'>
                <label htmlFor="name">Your Name</label>
                <input onBlur={handleNameBlur}  placeholder='type name' type="text" required name="Name" id="" />
             </div>
             <div className='input-group'>
                <label htmlFor="email">Your Email</label>
                <input onBlur={handleEmailBlur}  placeholder='type email' type="email" required name="email" id="" />
             </div>
             <div className='input-group'>
                <label htmlFor="password">Your Address</label>
                <input onBlur={handleAddressBlur}  type="text" required name="Address" id="" />
             </div>
             <div className='input-group'>
                <label htmlFor="confirm-password">Phone Number</label>
                <input onBlur={handlePhoneNumberBlur} type="number" required name="Phone" id="" />
             </div>
              <p style={{color:'red'}}>{error}</p>
             <input className='form-submit' type="submit" value="Add Shipping" />
          </form>
        </div>
    </div>
    );
};

export default Shipment;