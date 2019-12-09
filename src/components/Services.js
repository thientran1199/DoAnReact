import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail , FaHiking , FaShuttleVan , FaBeer} from 'react-icons/fa';
export default class Services extends Component {
    state = {
        services: [
        {
            icon:<FaCocktail/>,
            title:"free cocktails",
            info:"Lorem ipsum olor sit met consectetur adipisicing elit.Magni, corporis!"
        },
        {
            icon:<FaHiking/>,
            title:"Endless Hiking",
            info:"Lorem ipsum olor sit met consectetur adipisicing elit.Magni, corporis!"
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free Shuttle",
            info:"Lorem ipsum olor sit met consectetur adipisicing elit.Magni, corporis!"
        }, 
        {
            icon:<FaBeer/>,
            title:"Strongest Beer",
            info:"Lorem ipsum olor sit met consectetur adipisicing elit.Magni, corporis!"
        }, 
        ]
    };
    render() {
        return (
            <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
        );
    }
}
