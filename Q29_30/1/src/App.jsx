import React from 'react';
import ReactDOM from 'react-dom/client'

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {productItem: "Beras"};
  }
  
  changeProduct = () => {
    this.setState({productItem: "Minyak"})
  }

  render() {
    return (
    <div>
      <h1>Produk Item: {this.state.productItem}</h1>
      <button type="button" onClick={this.changeProduct}>Ubah Produk</button>
    </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Product />);