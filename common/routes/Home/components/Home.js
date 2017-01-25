import React from 'react'

import { StyleSheet, css } from 'aphrodite'
import data from '../data'
import { Pie } from 'react-chartjs-2';

const thirteenColorMap = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
  'gold',
  'silver',
  'black',
  'gray',
  'brown',
  'white'
]

const indianLanguageData = {
  'indicLanguageSpeakersInIndia': { // 2001 Census Data from Wikipedia
    'Total Population': 1028610328,
		'Hindi': 422048642,
		'Bengali': 83369769,
    'Telugu': 74002856,
    'Marathi': 71936894,
    'Tamil': 60793814,
    'Urdu': 51536111,
    'Gujarati': 46091617,
    'Kannada': 37924011,
    'Malayalam': 33066392,
    'Odia': 33017446,
    'Punjabi': 29102477,
    'Assamese': 13168484,
    'Other': (1028610328 - 422048642 - 83369769 - 74002856 - 71936894 - 60793814 - 51536111 - 46091617 - 37924011 - 33066392 - 33017446 - 29102477 - 13168484)
  },
  totalSouthAsianPopulations: { // 2016 CIA World Factbook Data Estimates
    'Total Population': (1266883598 + 201995540 + 156186882 + 29033914 + 22235000 + 392960),
    'Indian': 1266883598,
    'Pakistani': 201995540,
    'Bangladeshi': 156186882,
    'Nepali': 29033914,
    'Sri Lankan': 22235000,
    'Maldivian': 392960,
  },
  'indicLanguageSpeakersInUsa': { // 2009-13 ACS Data
    'Total South Asian American Population': 3441773,
		'Hindi': 643337,
		'Bengali': 257740,
    'Telugu': 247760,
    'Marathi': 73630,
    'Tamil': 190685,
    'Urdu': 397502,
    'Gujarati': 373253,
    'Kannada': 48620,
    'Malayalam': 146310,
    'Odia': 5385,
    'Punjabi': 253740,
    'Assamese': 1305,
    'Other': (61385 + 595 + 715 + 1775 + 94220 + 8965 + 12605 + 26745),
    // India n.e.c.3, Bihari, Rajasthani, Kashmiri, Nepali, Sindhi, Pakistan n.e.c.3, Sinhalese
    // note: grouping all 'Other Indic languages together' with ACS note, not incl. Romany
  },
  totalSouthAsianAmericanPopulations: { // 2010 Census Data
    'Total Population': 3441773,
    'Indian': 2843391,
    'Pakistani': 363699,
    'Bangladeshi': 128792,
    'Nepali': 51907,
    'Sri Lankan': 38596,
    'Maldivian': 98,
  }
}
// note and qualify difference between indic languages across US/non-indian south asians included, versus india
// possibly do a chart on language in pakistan/bangladesh/nepal/maldives/sri lanka
// note how difficult it would be to grab language data by nationality for US
// bengali and panjabi and urdu would be somewhat overrepresented in the indian american data
// perhaps project what other south asian americans might speak? find data on it?
// do some charts on religion in india and other south asian countries?
// do some charts on non-american indian or south asian diaspora?

const indianLanguageChartData = {
  labels: ?, // array of the keys
	datasets: [{
		data: ?, // array of the values
		backgroundColor: thirteenColorMap,
		hoverBackgroundColor: thirteenColorMap
	}]
};

const Home = (props) => (
  <div>

    <h2 className={css(styles.header)}>Stats on Telugu People Worldwide</h2>
    <Pie data={globalTeluguData} />

    <h2 className={css(styles.header)}>Stats on Telugu Among Top 12 Languages in India</h2>
    <Pie data={indiaTeluguData} />

    <h2 className={css(styles.header)}>Motivation</h2>
    <p className={css(styles.lead)}>
      The file size of isomorphic React apps can quickly get out of hand. Many isomorphic starter kits look awesome to begin with but yield a several megabyte javascript
      file for the client to download. This project aims to demonstrate some possible solutions.
    </p>

    <h2 className={css(styles.header)}>Under the Hood</h2>
    <ul className={css(styles.list)}>
      {data.map((item, i) => (
        <li key={i}>
          <h3><a className={css(styles.link)} href={item.link} target='_blank'>{item.resource}</a></h3>
          <p className={css(styles.body)}>{item.description}</p>
        </li>
       ))}
    </ul>
  </div>
)

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    lineHeight: '1.2',
    margin: '0 0 1.5rem'
  },
  lead: {
    fontSize: 18,
    lineHeight: '1.5',
    margin: '0 0 1.5rem',
    color: '#555'
  },
  body: {
    fontSize: '1rem',
    lineHeight: '1.5',
    margin: '0 0 1.5rem',
    color: '#555'
  },
  list: {
    fontSize: '1rem',
    listStyle: 'none',
    padding: 0
  },
  link: {
    display: 'block',
    fontSize: '1.25rem',
    margin: '0 0 .5rem',
    lineHeight: '1.5',
    fontWeight: 'bold',
    color: '#08c',
    opacity: 1,
    transition: '.2s opacity ease',
    textDecoration: 'none',
    ':hover': {
      opacity: 0.5,
      textDecoration: 'none'
    }
  }
})

export default Home
