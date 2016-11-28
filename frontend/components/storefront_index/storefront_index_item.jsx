import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class StorefrontIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }


  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  addToCart(){
    return true;
  }

  render(){
    let item = this.props.item;
    return (
      <li key={item.id} className="itembox">
        <div className="itemmain">
          <div className="itemimagewrapper">
            <div className="itemimage" onClick={this.openModal}><img src={item.image} /></div>
          </div>
          <div className="itemnameandprice">
            <div className="itemnamewrapper">
              <div className="itemname">{item.name}</div>
            </div>
            <div className="itempricewrapper">
              <div className="itemprice">${(parseInt(item.price)/100).toFixed(2)}</div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}>
            <img src={item.image} />
        </Modal>
      </li>
    );
  }

  // <div className="addtocart">
  //   <button onClick={this.addToCart}>Add To Cart</button>
  // </div>


}

export default StorefrontIndexItem;
