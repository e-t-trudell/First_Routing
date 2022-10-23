import {Link} from 'react-router-dom'

const Home = (props)=>{
    return(
      <div>
        <h1 style={{color:'red'}}>
          You have landed
        </h1>
        {/* link to path established in route below */}
        <Link to={'/number'}>Go To Number</Link> | 
        <Link to={'/hello/:word/:display/:back'}>Go to Hello</Link>
      </div>
    )
  }

export default Home;