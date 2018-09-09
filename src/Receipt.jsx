import React from 'react';
import './Receipt.css';
import eosReceipt, {getTransaction} from "eos-receipt";


/**
 * Parse Search
 *
 * @example
 *
 * parseSearch("?currency=CAD&foo=bar")
 * //=> {currency: "CAD", foo: "bar"}
 */
function parseSearch(search) {
    if (!search) return {};
    search = search.replace(/^\?/, "")
    const items = {};
    for (const item of search.split("&")) {
        const [key, value] = item.split("=")
        items[key] = value;
    }
    return items;
}

export default class Receipt extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      from: "",
      to: "",
      currency: "USD",
      value: "",
      memo: "",
      block_time: "",
      date: "",
      time: "",
      trx_id: "",
      purchase: "",
    }
  }
  async setReceipt() {
    // To-Do Get Memo & Purchase Type
    const search = parseSearch(this.props.location.search);
    const currency = search.currency || "USD";
    const {trx_id} = this.props.match.params;
    const receipt = await eosReceipt(trx_id, currency);
    const [date, time] = receipt.block_time.split("T");
    const value = receipt.value.toFixed(2);
    const memo = search.memo || receipt.memo;
    const purchase = search.purchase || "Services";
    this.setState(Object.assign(receipt, {date, time, trx_id, value, memo, purchase}));
  }
  componentDidMount() {
    this.setReceipt();
  }
  render() {
    return (
      <div className="receipt-component-1">
          <div className="receipt-0" />
          <div className="receipt-1">
              <div className="receipt-receipt-bg-1">
                  <div className="receipt-1-0-0">
                      <div className="receipt-1-0-0-0">
                          <div className="receipt-1-0-0-0-0">
                              <div className="receipt-payment-receipt-title-6">
                                  PAYMENT RECEIPT
                              </div>
                          </div>
                          <div className="receipt-1-0-0-0-1">
                              <div className="receipt-payer-name-1">
                                  {this.state.from}
                              </div>
                          </div>
                      </div>
                      <div className="receipt-logo-1" onClick={() => {
                          window.print()
                        }} />
                      <div className="receipt-1-0-0-2">
                          <div className="receipt-1-0-0-2-0">
                              <div className="receipt-timestamp-8">
                                  <div>{this.state.date}</div>
                                  <div>{this.state.time}</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="receipt-1-0-1">
                      <div className="receipt-transaction-id-7">
                          +++++++++++++++++++++++++++++++++++++
                      </div>
                  </div>
                  <div className="receipt-1-0-2">
                      <div className="receipt-note-title-9">
                          {"NOTE:"}
                      </div>
                  </div>
                  <div className="receipt-1-0-3">
                      <div className="receipt-note-body-text-8">
                          {this.state.memo}
                      </div>
                  </div>
                  <div className="receipt-1-0-4">
                      <div className="receipt-transaction-id-4">
                          +++++++++++++++++++++++++++++++++++++
                      </div>
                  </div>
                  <div className="receipt-1-0-5">
                      <div className="receipt-1-0-5-0">
                          <div className="receipt-1-0-5-0-0">
                              <div className="receipt-triangle-icon-6">
                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15" className="receipt-1-0-5-0-0-0-0">
                                      <polygon points="0 15 18 0 18 15" className="receipt-1-0-5-0-0-0-0-0" />
                                  </svg>
                              </div>
                          </div>
                      </div>
                      <div className="receipt-1-0-5-1">
                          <div className="receipt-1-0-5-1-0">
                              <div className="receipt-recipient-title-1">
                                  RECIPIENT
                              </div>
                          </div>
                          <div className="receipt-1-0-5-1-1">
                              <div className="receipt-eosnationftw-6">
                                  {this.state.to}
                              </div>
                          </div>
                      </div>
                      <div className="receipt-1-0-5-2">
                          <div className="receipt-1-0-5-2-0">
                              <div className="receipt-triangle-icon-8">
                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16" className="receipt-1-0-5-2-0-0-0">
                                      <polygon points="0 16 18 0 18 16" className="receipt-1-0-5-2-0-0-0-0" />
                                  </svg>
                              </div>
                          </div>
                      </div>
                      <div className="receipt-1-0-5-3">
                          <div className="receipt-1-0-5-3-0">
                              <div className="receipt-amount-title-1">
                                  AMOUNT
                              </div>
                          </div>
                          <div className="receipt-1-0-5-3-1">
                              <div className="receipt-amount-total-9">
                                  ${this.state.value}
                              </div>
                          </div>
                      </div>
                      <div className="receipt-1-0-5-4">
                          <div className="receipt-1-0-5-4-0">
                              <div className="receipt-triangle-icon-3">
                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15" className="receipt-1-0-5-4-0-0-0">
                                      <polygon points="0 15 18 0 18 15" className="receipt-1-0-5-4-0-0-0-0" />
                                  </svg>
                              </div>
                          </div>
                      </div>
                      <div className="receipt-1-0-5-5">
                          <div className="receipt-1-0-5-5-0">
                              <div className="receipt-purchase-title-1">
                                  PURCHASE
                              </div>
                          </div>
                          <div className="receipt-1-0-5-5-1">
                              <div className="receipt-purchase-type-5">
                                  {this.state.purchase}
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="receipt-1-0-6">
                      <div className="receipt-transaction-id-0">
                          +++++++++++++++++++++++++++++++++++++
                      </div>
                  </div>
                  <div className="receipt-1-0-7">
                      <div className="receipt-transaction-id-3">
                          <div>{"Transaction id:"}</div>
                          <br/>
                          <div>{this.state.trx_id}</div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="receipt-2" />
          <div className="receipt-3">
              <div className="receipt-3-0" />
              <div className="receipt-sponsors-3">
                  <div className="receipt-3-1-0">
                      <a href="http://www.uwyo.edu/uw/news/2018/06/blockchain-hackathon-event-poised-to-elevate-uws-technology-profile.html" target="_blank" className="receipt-3-1-0-0">
                          <div className="receipt-uw-l-9" />
                      </a>
                      <a href="https://www.eosnation.io/" target="_blank" className="receipt-3-1-0-1">
                          <div className="receipt-eos-nation-logo-2" />
                      </a>
                      <a href="https://eostribe.io" target="_blank" className="receipt-3-1-0-2">
                          <div className="receipt-eos-tribe-logo-9" />
                      </a>
                  </div>
              </div>
              <div className="receipt-3-2" />
          </div>
          <div className="receipt-4">
              <div className="receipt-4-0" />
              <div className="receipt-footer-text-7">
                  A collaboration of EOS Tribe + EOS Nation at the 2018 Wyoming Hackathon
              </div>
              <div className="receipt-4-2" />
          </div>
      </div>
    );
  }
};
