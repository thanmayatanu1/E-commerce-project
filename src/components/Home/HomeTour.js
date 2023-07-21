import React from 'react';
import styles from './HomeTour.module.css';

const HomeTour = () => {
  const concerts = [
      {
        date: "JUL 16",
        city: "DETROIT, MI",
        venue: "DTE ENERGY MUSIC THEATRE",
        tickets: "BUY TICKETS"
      },
      {
        date: "JUL 19",
        city: "TORONTO, ON",
        venue: "BUDWEISER STAGE",
        tickets: "BUY TICKETS"
      },
      {
        date: "JUL 22",
        city: "BRISTOW, VA",
        venue: "JIGGY LUBE LIVE",
        tickets: "BUY TICKETS"
      },
      {
        date: "JUL 29",
        city: "PHOENIX, AZ",
        venue: "AK-CHIN PAVILION",
        tickets: "BUY TICKETS"
      },
      {
        date: "AUG 2",
        city: "LAS VEGAS, NV",
        venue: "T-MOBILE ARENA",
        tickets: "BUY TICKETS"
      },
      {
        date: "AUG 7",
        city: "CONCORD, CA",
        venue: "CONCORD PAVILION",
        tickets: "BUY TICKETS"
      }
    ];
    

return (
  <div>
      <h1 className={styles.title}>Tours</h1>
    <ul className={styles['concert-list']}> {/* Apply the CSS module class */}
      {concerts.map((concert, index) => (
        <li key={index} className={styles['concert-item']}> {/* Apply the CSS module class */}
            <div className={styles['concert-date']}>{concert.date}</div> {/* Apply the CSS module class */}
            <div className={styles['concert-city']}>{concert.city}</div> {/* Apply the CSS module class */}
            <div className={styles['concert-venue']}>{concert.venue}</div> {/* Apply the CSS module class */}
            <div className={styles['concert-tickets']}>{concert.tickets}</div> {/* Apply the CSS module class */}
          
        </li>
      ))}
    </ul>
  </div>
);
};

export default HomeTour;
