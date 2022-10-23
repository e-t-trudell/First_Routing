import {Link, useParams} from 'react-router-dom'

const Hello = (props)=>{
    const {word, display, back} = useParams();
    const styledWords = {
        color:`${display}`,
        backgroundColor:`${back}`
    }
    return(
      <div>
        <h1 style={styledWords}>
          The word is: {word} | {display} | {back}
        </h1>
        {/* link to path established in route below */}
        <Link to={'/number/:thing'}>Go To Number</Link> | 
        <Link to={'/'}>Go To Home</Link>
      </div>
    )
  }

export default Hello;