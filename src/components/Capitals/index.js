import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    countryCapital: countryAndCapitalsList,
    capitalsId: countryAndCapitalsList[0].id,
  }

  onSearchCapital = event => {
    this.setState({capitalsId: event.target.value})
  }

  getCountry = () => {
    const {capitalsId, countryCapital} = this.state
    const findCountry = countryCapital.find(
      eachCountry => eachCountry.id === capitalsId,
    )
    return findCountry.country
  }

  capitalsList = eachCapital => {
    const capital = eachCapital.capitalDisplayText
    const uniqueId = eachCapital.id
    return (
      <option key={uniqueId} value={uniqueId}>
        {capital}
      </option>
    )
  }

  render() {
    const {countryCapital} = this.state
    const country = this.getCountry()
    return (
      <div className="bg-cont">
        <div className="bg-card">
          <h1 className="country-capital">Countries And Capitals</h1>
          <div className="display-cont">
            <select className="capitals" onChange={this.onSearchCapital}>
              {countryCapital.map(eachCapital =>
                this.capitalsList(eachCapital),
              )}
            </select>
            <p className="capital-desc">is capital of which country?</p>
          </div>
          <div>
            <h1 className="country-head">{country}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
