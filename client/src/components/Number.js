import {Link, useParams} from 'react-router-dom'

const Number = (props)=>{
    const {thing} = useParams();
    return(
      <div>
        <h1 style={{color:'green'}}>
          The number is: {thing}
        </h1>
        {/* link to path established in route below */}
        <Link to={'/'}>Go To Home</Link> | 
        <Link to={'/hello/:word/:color1/:color2'}>Go to Hello</Link>
      </div>
    )
  }

export default Number;