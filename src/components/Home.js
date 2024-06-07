import Notes from './Notes';
import '../App.css'

 const Home = (props) => {
const {showAlert, loggedin}=props
    return (
        <div style={{backgroundColor:"linear-gradient(#30142b, #a12727)"}}> 
            <Notes showAlert={showAlert} loggedin={loggedin}/>
        </div>
    )
}
export default Home
