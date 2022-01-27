import './Card.styles.css'

const Card=(props) => {

    const {monster}=props

    const{id,email,name}=monster



  return(

  <div className='card-container'>

    <img

    alt='monster'

    src={`https://robohash.org/${id}?set=set2&size=180x180`}

    />

    <h2> {name}</h2>

    <p> {email}</p>

   </div>)

   

}

export default Card