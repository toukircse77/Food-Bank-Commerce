import React from 'react';

const AddService = () => {

    const handleAddService = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const order = form.order.value;
        const price = form.price.value;
        const image = form.image.value;
        const message = form.message.value;
        const rate = form.rate.value;
        const Services = {
            name: name,
            order: order,
            price: price,
            image: image,
            description: message,
            rate: rate
        }
        
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Services),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('success fully Service set Database')
                    event.target.reset()
                }
            }).catch(error => console.log(error))
    
    }

    return (
        <div>
            <form onSubmit={handleAddService} className='mx-auto w-2/4 bg-slate-300 rounded-3xl' action="">
            <div className="form-control">
                <div className='flex justify-center my-3 gap-5'>
                <input type="text" name='name' placeholder="name" className="input w-80 input-bordered" />
                <input type="text" name='order' placeholder="order" className="input w-80 input-bordered" />
                </div>
                <div className='flex justify-center my-3 gap-5'>
                <input type="text" name='price' placeholder="price" className="input w-80 input-bordered" />
                <input type="text" name='image' placeholder="photo URL" className="input w-80 input-bordered" />
                </div>
                <div className='flex justify-center my-3 gap-5'>
                <input type="text" name='message' placeholder="description" className="input w-80 input-bordered" />
                <input type="text" name='rate' placeholder="rate" className="input w-80 input-bordered" />
                </div>   
        </div>
        <input type="submit" className='btn btn-primary my-5 w-80 ' value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;