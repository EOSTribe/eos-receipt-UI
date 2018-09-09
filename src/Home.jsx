import React from 'react';
import './Home.css';


export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trx_id: "",
    }
  }
  render() {
    return (
      <div className="home-container-1">
          <div className="home-0" />
          <div className="home-1">
              <div className="home-1-0" />
              <div className="home-body-1">
                  <div className="home-1-1-0">
                      <a href="https://eosreceipt.io" className="home-1-1-0-0">
                          <div className="home-logo-7" />
                      </a>
                  </div>
                  <div className="home-1-1-1">
                      <div className="home-1-1-1-0" />
                      <div className="home-logo-text-1">eos receipt</div>
                      <div className="home-1-1-1-2" />
                  </div>
                  <div className="home-1-1-2">
                      <div className="home-1-1-2-0" />
                      <div className="home-content-8">
                          Welcome to EOS Receipt where you can generate receipts for your EOS based crypto purchases. Search your transaction ID below.
                      </div>
                      <div className="home-1-1-2-2" />
                  </div>
                  <div className="home-1-1-3">
                      <div className="home-1-1-3-0" />
                      <div className="home-1-1-3-1">
                          <input type="text" placeholder="Search Tx ID..." className="home-search-field-4" onChange={(e) => this.setState({trx_id: e.target.value})}/>
                      </div>
                      <div className="home-1-1-3-2" />
                  </div>
                  <div className="home-1-1-4">
                      <div className="home-1-1-4-0" />
                      <div className="home-search-button-1" onClick={() => { console.log(this.props.history.push(`/transaction/${this.state.trx_id}`))} }>
                          <div className="home-1-1-4-1-0">
                              <div className="home-search-button-text-8">
                                  SEARCH
                              </div>
                          </div>
                      </div>
                      <div className="home-1-1-4-2" />
                  </div>
                  <div className="home-1-1-5" />
              </div>
              <div className="home-1-2" />
          </div>
          <div className="home-2" />
          <div className="home-3">
              <div className="home-3-0" />
              <div className="home-sponsors-8">
                  <div className="home-3-1-0">
                      <div className="home-3-1-0-0" />
                      <a href="http://www.uwyo.edu/uw/news/2018/06/blockchain-hackathon-event-poised-to-elevate-uws-technology-profile.html" target="_blank" className="home-3-1-0-1">
                          <div className="home-uw-l-4" />
                      </a>
                      <div className="home-3-1-0-2" />
                      <a href="https://www.eosnation.io/" target="_blank" className="home-3-1-0-3">
                          <div className="home-eos-nation-logo-5" />
                      </a>
                      <div className="home-3-1-0-4" />
                      <a href="https://eostribe.io" target="_blank" className="home-3-1-0-5">
                          <div className="home-eos-tribe-logo-8" />
                      </a>
                      <div className="home-3-1-0-6" />
                  </div>
              </div>
              <div className="home-3-2" />
          </div>
          <div className="home-4" />
          <div className="home-5">
              <div className="home-5-0" />
              <div className="home-footer-2">
                  <div className="home-5-1-0">
                      <div className="home-5-1-0-0" />
                      <div className="home-footer-text-3">
                          A collaboration of EOS Tribe + EOS Nation at the 2018 Wyoming Hackathon
                      </div>
                      <div className="home-5-1-0-2" />
                  </div>
              </div>
              <div className="home-5-2" />
          </div>
          <div className="home-6" />
      </div>
    );
  }
};
