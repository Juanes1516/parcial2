import Card from 'react-bootstrap/Card';

function Cafe(props){
   return(
       <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">
           <Card.Img style={{ height: '14rem' }}  variant="top" src={props.cafe.foto} alt={props.cafe.tipo} />
           <Card.Body>
               <Card.Title>{props.cafe.nombre}</Card.Title>
               <Card.Text>
                   
                   {props.cafe.tipo}
                   {props.cafe.región}
                   {props.cafe.notas}
                   {props.cafe.fecha}
                   {props.cafe.altura}
               </Card.Text>
           </Card.Body>
       </Card>
   );
}

export default Cafe;
