import SearchBar from "./ChercherBar";
import Results from "./resultsSrch";

export default class App extends Component {
    constructor (){
        super()
        this.state = {search : ""}
    }
    render(){
        return(
            <div>
             
                    <SearchBar 
                               search = {this.state.search} 
                               OnChangeSearch={(content)=>this.setState({search : content})
                     }/>
                    <Results search = {this.state.search}/>
             
            </div>
        )
    }
}