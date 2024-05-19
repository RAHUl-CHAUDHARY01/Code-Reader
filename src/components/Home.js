import Notes from './Notes';
import '../App.css'

 const Home = (props) => {
const {showAlert}=props
    return (
        <div style={{backgroundColor:"linear-gradient(#30142b, #a12727)"}}> 
            <Notes showAlert={showAlert}/>
        </div>
    )
}
export default Home
