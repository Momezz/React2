import hero from '../../images/illustration-hero.svg';
import iconMusic from '../../images/icon-music.svg';

function Order() {
    return (
        <div className='container'>
            <div className="image-hero">
                <img src={hero} alt="illustrationhero" />
            </div>
            <div className="subcontainer">
                <h1>Order Summary</h1>
                <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you
                    like
                </p>
            <div className="price">
                    <img src={iconMusic} alt="icon-music" />
                    <div className="change">
                        <h3>Annual Plan</h3>
                        <p>$59.99/year</p>
                     </div>
                    <a className='right-change'>Change</a>
            </div>
                <button className="btn-proceed">Proceed to Payment</button>
                <button className="btn-cancel">Cancel Order</button>
            </div>
        </div>
    )

};

export default Order;