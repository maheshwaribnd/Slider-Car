import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cards({ img, title, description }) {
    return (
        <div className='w-72'>
            <Card className='bg-slate-400 shadow shadow-slate-700 hover:-translate-y-3 duration-75 ease-in-out ml-3'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <div className='flex justify-center'>
                        <Card.Title>{title}</Card.Title>
                    </div>
                    <div className='flex text-center'>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </div>
                    <a href="" className='flex justify-center my-4'>
                        <Button variant="dark">Read More</Button>
                    </a>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Cards;