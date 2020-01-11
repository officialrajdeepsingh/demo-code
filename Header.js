import React, { Component } from 'react';
import Message from './Message';
import Gmail from './Gmail';


//react-bootstrap copomponent
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';



// Logo for Array
import notificationIcon from '../Image/notification.svg';
import searchIcon from '../Image/search.svg';
import person from '../Image/person.png';

// scss for array
import style from './DefaultHeader.module.scss';


export default class DefaultHaeder extends Component {
   
  constructor(props){
    super(props);
        this.state={
          searchBox:false,
          mouseEnter:false,
          gmailShow:false
        }
    }
   MouseEnter=()=>{
      this.setState({
         mouseEnter:true
       })
    }
    MouseLeave=()=>{
      this.setState({
        mouseEnter:false
      })
    }
    gmailHandler=(event)=>{
      event.preventDefault();
      this.setState({
        gmailShow:true
      })
    }
    messageHandler=(event)=>{
      event.preventDefault();
      this.setState({
        gmailShow:false
      })
    }

    render() {
        return (
            <>
              <Navbar  className={style.bg} expand="lg">
                      
                  <Navbar.Brand className={style.brand} >Overview</Navbar.Brand>
                                
                                  <div className={style.width}></div>
                                  
                                  <div onMouseEnter={this.MouseEnter}  onMouseLeave={this.MouseLeave} className={style.searchbox}>
                                        <input type="text" name="serach" className={style.searchtxt} placeholder="Type to Search" />
                                          <button href='#'  className={style.searchbtn} >
                                            <Image src={searchIcon} roundedCircle />
                                          </button>
                                  </div>
                                  
                                  <Dropdown className={ this.state.mouseEnter? style.none : ''}>
                                      
                                        <Dropdown.Toggle className={style.notificatioToggle }  id="dropdown-basic">
                                          <Image src={notificationIcon} className={style.imageWidth} roundedCircle />
                                        </Dropdown.Toggle>
                                        
                                        <Dropdown.Menu className={style.notificationWidth}>
                                            <div className="d-flex justify-content-between mb-3"> 
                                              <Button onClick={ this.messageHandler}className={style.buttonNotification} type="submit">
                                                    Message
                                              </Button>
                                              <Button onClick={ this.gmailHandler}className={style.buttonNotification} type="submit" >
                                                    Gmail
                                              </Button>
                                            </div>
                                            
                                              {
                                                this.state.gmailShow? <Gmail/>: <Message/>
                                              }

                                        </Dropdown.Menu>

                                  </Dropdown>
                              <div className='border-left border-white pl-4'>

                                    <Navbar.Text className={style.author}>
                                                James Smith
                                    </Navbar.Text>
                                    <Image src={person} className={style.personImage} roundedCircle />
                              </div>     
              </Navbar>                  
            </>
        )
    }
}
