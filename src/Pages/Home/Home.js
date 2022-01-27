import React from 'react'
import CardList from '../../Component/CardList/Card.List'
import Search from '../../Component/Search/Search.Component'
import './Home.styles.css'
{/*
class Home extends React.Component{

  constructor(){

    super();

    this.state={

      name: 'Nani'

    }

  }


render(){

  return(

    <>

      <h1 className='title'>Monster's Rollodex</h1>

        <form>

          <input />

          <button >Search</button>

          <p>{this.state.monsters}</p>

          </form>

    </>

  )

}

}

export default Home
*/}

class Home extends React.Component{
  constructor(){
      super();
      this.state = {
          monsters: [],
          searchField: ''
      }
  }
  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => this.setState({ monsters: users }));
  }

      handleSearch = (event)=>{
      this.setState({searchField:event.target.value})
  }
 
  render(){
    
      const {monsters,searchField } = this.state    //object destructuring
      const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))
      return(
          <>
          <div className='App'>
              <h1>Monsters Rolodex</h1> 
            <Search handleSearch={this.handleSearch} />
              <CardList monsters={this.state.monsters} />
          </div>
          </>
      )
  }
}

export default Home